import { Repository } from "typeorm";
import { UserEntity } from "../../common/entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
    }

    public findOne(id: string) {
        return this.userRepository.findOneBy({id});
    }
}