import { Injectable } from "@nestjs/common";
import { UserModel } from "../user-model";
import { RoleEnum } from "../value-object/role.enum";

@Injectable()
export class UsersFactory {
    public create(userModel: Partial<UserModel>) {
        userModel.id = crypto.randomUUID();
        userModel.createAt = new Date(Date.now());
        userModel.updateAt = new Date(Date.now());
        userModel.deleteAt = null;

        userModel.status = userModel.status ?? true;
        userModel.role = userModel.role ?? RoleEnum.USER;

        return new UserModel(userModel);
    }

    public update(userModel: Partial<UserModel>) {
        userModel.updateAt = new Date(Date.now());
        return new UserModel(userModel);
    }

    public delete(userModel: Partial<UserModel>) {
        userModel.updateAt = new Date(Date.now());
        userModel.deleteAt = new Date(Date.now());
        return new UserModel(userModel);
    }
}