import { UserEntity } from "../../../../../common/entity/user.entity";
import { UserModel } from "../../../../domain/user-model";

export class UserMapper {
  static toDomain(userEntity: UserEntity): UserModel {
    return new UserModel(userEntity);
  }

  static toPersistence(userModel:UserModel) {

  }
}