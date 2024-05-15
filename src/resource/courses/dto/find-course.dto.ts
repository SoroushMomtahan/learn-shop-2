import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { FindUserOptionsDto } from "../../users/dto/find-user-options.dto";

export class FindCourseDto {
    @IsString()
    @IsNotEmpty()
    title?: string;

    @IsString()
    @IsNotEmpty()
    description?: string;

    @IsOptional()
    options:FindUserOptionsDto
}