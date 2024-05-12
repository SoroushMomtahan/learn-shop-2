import { UserModel } from "src/admin/domain/user-model";
import { IUserRepository } from "../../../application/port/i-user.repository";
import { Repository } from "typeorm";
import { UserEntity } from "../../../../common/entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { UserMapper } from "./mapper/user.mapper";

@Injectable()
export class UserService implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
    }

    async findOne(id: string): Promise<UserModel> {
        const foundedEntity = await this.userRepository.findOneBy({ id });
        if (!foundedEntity){
            throw new NotFoundException(`user with id #${id} not found`);
        }
        return UserMapper.toDomain(foundedEntity);
    }

    async deleteOne(id: string): Promise<UserModel> {
        const foundedEntity = await this.findOne(id);
        const deletedEntity = await this.userRepository.softRemove(foundedEntity);
        return UserMapper.toDomain(deletedEntity);
    }

    async findAll(): Promise<UserModel[]> {
        const entities = await this.userRepository.find();
        return entities.map((entity) => new UserModel(entity));
    }

    async save(user: Partial<UserModel>): Promise<UserModel> {
        const entity = this.userRepository.create(user);
        const savedEntity = await this.userRepository.save(entity);
        return UserMapper.toDomain(savedEntity);
    }
}