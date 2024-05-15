import {
    IsArray,
    IsBoolean,
    IsEmail, IsEnum,
    IsLowercase,
    IsMobilePhone,
    IsNotEmpty,
    IsOptional,
    IsString, IsStrongPassword, IsUUID,
    MaxLength,
    MinLength, ValidateNested
} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

import { PermissionDto } from "./permission/permission.dto";

import { RoleEnum } from "../../../common/enum/role.enum";

export class CreateUserDto {
    @ApiProperty({
        default: "soroush"
    })
    @MaxLength(50)
    @MinLength(3)
    @IsString()
    @IsOptional()
    public readonly firstname?: string;

    @MaxLength(50)
    @MinLength(3)
    @IsString()
    @IsOptional()
    public readonly lastname?: string;

    @MaxLength(20)
    @MinLength(3)
    @IsLowercase()
    @IsString()
    @IsNotEmpty()
    public readonly username: string;

    @IsLowercase()
    @IsEmail()
    @IsNotEmpty()
    public readonly email: string;

    @IsMobilePhone("fa-IR")
    @IsString()
    @IsNotEmpty()
    public readonly mobile: string;

    @MaxLength(24)
    @IsStrongPassword()
    @IsNotEmpty()
    public readonly password: string;

    @IsBoolean()
    @IsOptional()
    public readonly status?: boolean;

    @IsEnum(RoleEnum)
    @IsOptional()
    public readonly role?: RoleEnum;

    @ValidateNested()
    @Type(() => PermissionDto)
    @IsOptional()
    public readonly permission?: PermissionDto;

    @IsArray()
    @IsString({ each: true })
    @IsUUID("all", { each: true })
    @IsOptional()
    public readonly courseIds?: string[];
}