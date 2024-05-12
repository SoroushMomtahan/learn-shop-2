import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { CreateUserCommand } from "./command/create-user.command";
import { UserModel } from "../domain/user-model";
import { IUserRepository } from "./port/i-user.repository";

@Injectable()
export class AdminFacade {
    constructor(
        private readonly userRepository: IUserRepository
    ) {
    }


    public createUser(createUserCommand: CreateUserCommand) {
        const model = new UserModel(createUserCommand);
        return this.userRepository.save(model);
    }

    public findOneUser(id: string) {
        return this.userRepository.findOne(id);
    }

    public findAllUsers() {
        return this.userRepository.findAll();
    }

    public deleteOneUser(id: string) {
        return this.userRepository.deleteOne(id);
    }
}