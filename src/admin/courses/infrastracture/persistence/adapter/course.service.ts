import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CourseEntity } from "../../../../../common/entity/course.entity";
import { Repository } from "typeorm";
import { ICourseRepository } from "../../../application/port/i-course.repository";
import { CourseModel } from "src/admin/courses/domain/course-model";
import { CourseMapper } from "./mapper/course.mapper";
import { UsersService } from "../../../../../resource/users/users.service";
import { UserEntity } from "../../../../../common/entity/user.entity";

@Injectable()
export class CourseService implements ICourseRepository {
    constructor(
        @InjectRepository(CourseEntity)
        private readonly courseRepository: Repository<CourseEntity>,
        private readonly usersService:UsersService,
    ) {
    }



    async updateOne(id: string, course: CourseModel): Promise<CourseModel> {
        const entity = CourseMapper.toPersistence(course);
        entity.users = course.userIds && await this.findRelatedUsers(course.userIds);
        const updatedEntity = await this.courseRepository.preload({
            ...entity,
            id
        });
        const savedEntity = await this.courseRepository.save(updatedEntity);
        return CourseMapper.toDomain(savedEntity);
    }

    async save(model: CourseModel): Promise<CourseModel> {
        const entity = CourseMapper.toPersistence(model);
        entity.users = model.userIds && await this.findRelatedUsers(model.userIds);
        const savedEntity = await this.courseRepository.save(entity);
        return CourseMapper.toDomain(savedEntity);
    }
    async findAll(): Promise<CourseModel[]> {
        const foundedEntities = await this.courseRepository.find();
        return foundedEntities.map((foundedEntity)=>CourseMapper.toDomain(foundedEntity));
    }
    async findOne(id: string): Promise<CourseModel> {
        const foundedEntity = await this.courseRepository.findOneBy({id});
        return CourseMapper.toDomain(foundedEntity);
    }

    async deleteOne(id: string): Promise<CourseModel> {
        const model = await this.findOne(id);
        const entity = CourseMapper.toPersistence(model);
        const deletedEntity = await this.courseRepository.softRemove(entity);
        return CourseMapper.toDomain(deletedEntity);
    }
    private async findRelatedUsers(ids:string[]){
        let users:UserEntity[] = [];
        for (const id of ids) {
            const user = await this.usersService.findOne(id);
            users.push(user);
        }
        return users;
    }
}