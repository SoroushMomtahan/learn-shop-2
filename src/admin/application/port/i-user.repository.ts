import { UserModel } from "../../domain/user-model";

export abstract class IUserRepository {
    abstract save(user: Partial<UserModel>): Promise<UserModel>;

    abstract findAll(): Promise<UserModel[]>;

    abstract deleteOne(id: string): Promise<UserModel>;

    abstract findOne(id: string): Promise<UserModel>;
}