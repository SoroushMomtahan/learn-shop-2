import { IsArray, IsIn, IsOptional, IsString } from "class-validator";

import { UserPropertiesEnum } from "../../../enum/user-properties.enum";
import { UserMethodsEnum } from "../../../enum/user.methods.enum";


export class PermissionMethodUserDto {
    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [UserMethodsEnum.create]?: UserPropertiesEnum[];

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [UserMethodsEnum.findAll]?: UserPropertiesEnum[];

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [UserMethodsEnum.findOne]?: UserPropertiesEnum[];

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [UserMethodsEnum.updateOne]?: UserPropertiesEnum[];

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [UserMethodsEnum.deleteOne]?: UserPropertiesEnum[];
}