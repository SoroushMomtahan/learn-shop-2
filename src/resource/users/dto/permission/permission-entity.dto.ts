import { PermissionMethodUserDto } from "./method/permission-method-user.dto";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { PermissionMethodCourseDto } from "./method/permission-method-course.dto";

enum Entities {
    courses = "courses",
    users = "users"
}
export class PermissionEntityDto {
    @ValidateNested()
    @Type(()=> PermissionMethodUserDto)
    @IsOptional()
    [Entities.users]?:PermissionMethodUserDto;

    @ValidateNested()
    @Type(()=> PermissionMethodCourseDto)
    @IsOptional()
    [Entities.courses]?:PermissionMethodCourseDto;
}