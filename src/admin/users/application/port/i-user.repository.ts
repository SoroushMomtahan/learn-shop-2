import { UserModel } from "../../domain/user-model";
import { DeepPartial } from "typeorm";

export abstract class IUserRepository {
    abstract save(user: UserModel): Promise<UserModel>;

    abstract findAll(): Promise<UserModel[]>;

    abstract deleteOne(id: string): Promise<UserModel>;

    abstract findOne(id: string): Promise<UserModel>;

    abstract updateOne(id:string, user:UserModel):Promise<UserModel>
}