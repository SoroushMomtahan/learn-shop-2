import { IsArray, IsIn, IsOptional, IsString } from "class-validator";

import { UserPropertiesEnum } from "../../../enum/user-properties.enum";

import { CoursePropertiesEnum } from "../../../../common/enum/course-properties.enum";

enum CourseMethod {
    create = "create",
    findAll = "findAll",
    findOne = "findOne",
    updateOne = "updateOne",
    deleteOne = "deleteOne"
}

export class PermissionMethodCourseDto {
    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(CoursePropertiesEnum), {each:true})
    @IsOptional()
    [CourseMethod.create]: CoursePropertiesEnum[]

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [CourseMethod.findAll]: CoursePropertiesEnum[]

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [CourseMethod.findOne]: CoursePropertiesEnum[]

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [CourseMethod.updateOne]: CoursePropertiesEnum[]

    @IsArray()
    @IsString({each:true})
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), {each:true})
    @IsOptional()
    [CourseMethod.deleteOne]: CoursePropertiesEnum[]
}