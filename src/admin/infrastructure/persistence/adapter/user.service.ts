import { UserModel } from "src/admin/domain/user-model";
import { IUserRepository } from "../../../application/port/i-user.repository";
import { Repository } from "typeorm";
import { UserEntity } from "../../../../common/entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { UserMapper } from "./mapper/user.mapper";

@Injectable()
export class UserService implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
    }

    async save(user: Partial<UserModel>): Promise<UserModel> {
        const entity = this.userRepository.create(user);
        const savedEntity = await this.userRepository.save(entity);
        return UserMapper.toDomain(savedEntity);
    }
}