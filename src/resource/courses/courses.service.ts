import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { CourseEntity } from "../common/entity/course.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(CourseEntity)
        private readonly courseRepository:Repository<CourseEntity>
    ) {
    }
    public findAll(){

    }
    public async findOne(id:string){
        const foundedEntity = await this.courseRepository.findOneBy({ id });
        if (!foundedEntity){
            throw new NotFoundException(`course with id #${id} not found`)
        }
        return foundedEntity;
    }
}
