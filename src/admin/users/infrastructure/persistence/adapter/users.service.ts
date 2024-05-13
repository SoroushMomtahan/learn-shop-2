import { UserModel } from "src/admin/users/domain/user-model";
import { IUserRepository } from "../../../application/port/i-user.repository";
import { Repository } from "typeorm";
import { UserEntity } from "../../../../../common/entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ConflictException, HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { UserMapper } from "./mapper/user.mapper";

@Injectable()
export class UsersService implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
    }

    async updateOne(id: string, user: Partial<UserModel>): Promise<UserModel> {
        const entity = UserMapper.toPersistence(user);
        const updatedUser = await this.userRepository.preload({
            id,
            ...entity
        });
        try {
            const savedUser = await this.userRepository.save(updatedUser);
            return UserMapper.toDomain(savedUser);
        } catch (e) {
            if (e.number) {
                throw new ConflictException("Duplication error");
            }
            throw new HttpException("server error", 500);
        }
    }

    async findOne(id: string): Promise<UserModel> {
        const foundedEntity = await this.userRepository.findOneBy({ id });
        if (!foundedEntity) {
            throw new NotFoundException(`user with id #${id} not found`);
        }
        return UserMapper.toDomain(foundedEntity);
    }

    async deleteOne(id: string): Promise<UserModel> {
        const foundedEntity = await this.userRepository.findOneBy({ id });
        const deletedEntity = await this.userRepository.softRemove(foundedEntity);
        return UserMapper.toDomain(deletedEntity);
    }

    async findAll() {
        const entities = await this.userRepository.find();
        return entities.map((entity) => new UserModel(entity));
    }

    async save(user: Partial<UserModel>): Promise<UserModel> {
        const entity = UserMapper.toPersistence(user);
        try {
            const savedEntity = await this.userRepository.save(entity);
            return UserMapper.toDomain(savedEntity);
        } catch (e) {
            if (e.number) {
                throw new ConflictException("Duplication error");
            }
            throw new HttpException("server error", 500);
        }

    }
}