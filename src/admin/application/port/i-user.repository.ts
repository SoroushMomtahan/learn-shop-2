import { UserModel } from "../../domain/user-model";

export abstract class IUserRepository{
  abstract save(user:Partial<UserModel>):Promise<UserModel>;
}