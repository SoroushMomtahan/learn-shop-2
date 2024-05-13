import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsOptional()
    price?: number;


    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    userIds?: string[];

    @IsArray({ each: true })
    @IsOptional()
    commentsId?: number[];
}