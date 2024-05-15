import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";

import { PermissionMethodUserDto } from "./method/permission-method-user.dto";
import { PermissionMethodCourseDto } from "./method/permission-method-course.dto";

import { EntitiesEnum } from "../../enum/entities.enum";

export class PermissionEntityDto {
    @ValidateNested()
    @Type(()=> PermissionMethodUserDto)
    @IsOptional()
    [EntitiesEnum.users]?:PermissionMethodUserDto;

    @ValidateNested()
    @Type(()=> PermissionMethodCourseDto)
    @IsOptional()
    [EntitiesEnum.courses]?:PermissionMethodCourseDto;
}