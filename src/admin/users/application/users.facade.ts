import { Injectable } from "@nestjs/common";
import { CreateUserCommand } from "./command/create-user.command";
import { UserModel } from "../domain/user-model";
import { IUserRepository } from "./port/i-user.repository";
import { UpdateUserCommand } from "./command/update-user.command";
import { UsersFactory } from "../domain/factory/users.factory";

@Injectable()
export class UsersFacade {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly userFactory:UsersFactory,
    ) {
    }


    public create(createUserCommand: CreateUserCommand) {
        const model = this.userFactory.create(createUserCommand);
        return this.userRepository.save(model);
    }

    public findOne(id: string) {
        return this.userRepository.findOne(id);
    }

    public findAll() {
        return this.userRepository.findAll();
    }

    public deleteOne(id: string) {
        return this.userRepository.deleteOne(id);
    }

    public updateOne(id: string, updateUserCommand: UpdateUserCommand) {
        const model = this.userFactory.update(updateUserCommand);
        return this.userRepository.updateOne(id, model);
    }
}