import { IsArray, IsBoolean, IsIn, IsOptional, IsString } from "class-validator";

import { CourseRelationsEnum } from "../enum/course-relations.enum";

import { CoursePropertiesEnum } from "../../common/enum/course-properties.enum";




export class FindCourseOptionDto {
    @IsArray()
    @IsString({ each: true })
    @IsIn(Object.getOwnPropertyNames(CourseRelationsEnum), { each: true })
    @IsOptional()
    relations?: CourseRelationsEnum[];

    @IsArray()
    @IsString({ each: true })
    @IsIn(Object.getOwnPropertyNames(CoursePropertiesEnum), { each: true })
    @IsOptional()
    select?: CoursePropertiesEnum[];

    @IsBoolean()
    @IsOptional()
    withDeleted?: boolean = false;

    @IsString()
    @IsIn(Object.getOwnPropertyNames(CoursePropertiesEnum))
    @IsOptional()
    orderBy?: CoursePropertiesEnum

    @IsString()
    @IsIn(["asc", "desc"])
    @IsOptional()
    ascOrDec?:string;
}