import { Like, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";

import { FindUserDto } from "./dto/find-user.dto";
import { PaginationDto } from "../../common/dto/pagination.dto";
import { UserEntity } from "../common/entity/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

import { CoursesService } from "../courses/courses.service";
import { FindUserOptionsDto } from "./dto/find-user-options.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly courseService: CoursesService
    ) {
    }

    public create(createUserDto: CreateUserDto) {
        const entity = this.userRepository.create(createUserDto);
        return this.userRepository.save(entity);
    }

    public findAll(pagination?: PaginationDto, findUserDto?: FindUserDto) {
        const { options, ...otherProp } = findUserDto;
        return this.userRepository.find({
            where: {
                firstname: findUserDto?.firstname && Like(`%${findUserDto?.firstname}%`),
                lastname: findUserDto?.lastname && Like(`%${findUserDto?.lastname}%`),
                username: findUserDto?.username && Like(`%${findUserDto?.username}%`),
                email: findUserDto?.email && Like(`%${findUserDto?.email}%`),
                mobile: findUserDto?.mobile && Like(`%${findUserDto?.mobile}%`),
                status: findUserDto?.status,
                role: findUserDto?.role
            },
            ...options,
            take: pagination?.take,
            skip: pagination?.skip,
            order: {
                [options?.orderBy]: options?.ascOrDec
            }
        });
    }

    public findOne(id: string, findUserOptionsDto?: FindUserOptionsDto) {
        return this.userRepository.findOne({
            where: {
                id
            },
            ...findUserOptionsDto
        });
    }

    public async updateOne(id: string, updateUserDto: UpdateUserDto) {
        const courses = updateUserDto.courseIds && await this.getCourseBy(updateUserDto.courseIds);
        const updatedUser = await this.userRepository.preload({
            id,
            ...updateUserDto,
            courses
        });
        return this.userRepository.save(updatedUser);
    }

    public async deleteOne(id: string, isHard: boolean = false) {
        if (isHard) return this.userRepository.delete(id);
        const foundedEntity = await this.findOne(id);
        if (!foundedEntity) {
            throw new NotFoundException(`user with id #${id} not found`);
        }
        return this.userRepository.softRemove(foundedEntity);
    }

    private async getCourseBy(ids: string[]) {
        let courses = [];
        for (const id of ids) {
            const course = await this.courseService.findOne(id);
            courses.push(course);
        }
        return courses;
    }
}