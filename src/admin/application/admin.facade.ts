import { Injectable } from "@nestjs/common";
import { CreateUserCommand } from "./command/create-user.command";
import { UserModel } from "../domain/user-model";
import { IUserRepository } from "./port/i-user.repository";

@Injectable()
export class AdminFacade {
  constructor(
    private readonly userRepository:IUserRepository
  ) {
  }
  public create(createUserCommand:CreateUserCommand){
    const model = new UserModel(createUserCommand);
    return this.userRepository.save(model);
  }
}