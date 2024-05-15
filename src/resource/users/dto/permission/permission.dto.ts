import { IsArray, IsBoolean, IsIn, IsOptional, IsString, ValidateNested } from "class-validator";
import { PermissionEntityDto } from "./permission-entity.dto";
import { Type } from "class-transformer";





export class PermissionDto {
    @ValidateNested()
    @Type(()=>PermissionEntityDto)
    @IsOptional()
    entities?: PermissionEntityDto;

    @IsBoolean()
    @IsOptional()
    withDeleted?:Boolean = false
}