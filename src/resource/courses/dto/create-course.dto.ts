import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

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
    @IsUUID("all", { each: true })
    @IsOptional()
    userIds?: string[];

    @IsArray()
    @IsString({ each: true })
    @IsUUID("all", { each: true })
    @IsOptional()
    commentsId?: number[];
}