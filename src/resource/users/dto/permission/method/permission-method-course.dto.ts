import { IsArray, IsIn, IsOptional, IsString } from "class-validator";

import { UserPropertiesEnum } from "../../../enum/user-properties.enum";

import { CoursePropertiesEnum } from "../../../../common/enum/course-properties.enum";
import { CourseMethodsEnum } from "../../../enum/course.methods.enum";

export class PermissionMethodCourseDto {
    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(CoursePropertiesEnum), {each:true})
    @IsOptional()
    [CourseMethodsEnum.create]: CoursePropertiesEnum[]

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [CourseMethodsEnum.findAll]: CoursePropertiesEnum[]

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [CourseMethodsEnum.findOne]: CoursePropertiesEnum[]

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [CourseMethodsEnum.updateOne]: CoursePropertiesEnum[]

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [CourseMethodsEnum.deleteOne]: CoursePropertiesEnum[]
}