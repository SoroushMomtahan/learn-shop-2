import { IsNumber, IsOptional, Max, Min } from "class-validator";

export class PaginationDto {
    @Max(100)
    @Min(0)
    @IsNumber()
    @IsOptional()
    take?:number = 0

    @Max(100)
    @Min(0)
    @IsNumber()
    @IsOptional()
    skip?:number = 0
}