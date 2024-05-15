import { IsArray, IsIn, IsOptional, IsString } from "class-validator";

import { UserPropertiesEnum } from "../../../enum/user-properties.enum";

enum UserMethod {
    create = "create",
    findAll = "findAll",
    findOne = "findOne",
    updateOne = "updateOne",
    deleteOne = "deleteOne"
}

export class PermissionMethodUserDto {
    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [UserMethod.create]?: UserPropertiesEnum[];

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [UserMethod.findAll]?: UserPropertiesEnum[];

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [UserMethod.findOne]?: UserPropertiesEnum[];

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [UserMethod.updateOne]?: UserPropertiesEnum[];

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [UserMethod.deleteOne]?: UserPropertiesEnum[];
}