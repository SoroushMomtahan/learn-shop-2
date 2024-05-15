import { UserEntity } from "../../../../../../resource/common/entity/user.entity";
import { UserModel } from "../../../../domain/user-model";

export class UserMapper {
    static toDomain(userEntity: UserEntity): UserModel {
        const model = new UserModel(userEntity);
        model.dateConvertor('fa-IR');
        return model;
    }

    static toPersistence(userModel: Partial<UserModel>) {
        const userEntity = new UserEntity();
        userEntity.id = userModel.id;
        userEntity.firstname = userModel.firstname;
        userEntity.lastname = userModel.lastname;
        userEntity.username = userModel.username;
        userEntity.email = userModel.email;
        userEntity.mobile = userModel.mobile;
        userEntity.password = userModel.password;
        userEntity.status = userModel.status;
        userEntity.role = userModel.role;
        userEntity.courseIds = userModel.courseIds;
        userEntity.createAt = userModel.createAt;
        userEntity.updateAt = userModel.updateAt;
        userEntity.deleteAt = userModel.deleteAt;
        return userEntity;
    }
}