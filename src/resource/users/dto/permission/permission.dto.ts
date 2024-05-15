import { IsBoolean, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

import { PermissionEntityDto } from "./permission-entity.dto";

export class PermissionDto {
    @ValidateNested()
    @Type(() => PermissionEntityDto)
    @IsOptional()
    entities?: PermissionEntityDto;

    @IsBoolean()
    @IsOptional()
    withDeleted?: Boolean = false;
}