import {
    IsBoolean,
    IsEmail, IsEnum,
    IsLowercase,
    IsOptional,
    IsString,
    MaxLength,
    ValidateNested
} from "class-validator";
import { Type } from "class-transformer";

import { FindUserOptionsDto } from "./find-user-options.dto";

import { RoleEnum } from "../../../common/enum/role.enum";

export class FindUserDto {
    @MaxLength(50)
    @IsString()
    @IsOptional()
    firstname?: string;

    @MaxLength(50)
    @IsString()
    @IsOptional()
    lastname?: string;

    @MaxLength(20)
    @IsLowercase()
    @IsString()
    @IsOptional()
    username?: string;

    @IsLowercase()
    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    mobile?: string;

    @IsBoolean()
    @IsOptional()
    public readonly status?: boolean;

    @IsEnum(RoleEnum)
    @IsOptional()
    public readonly role?: RoleEnum;

    @ValidateNested()
    @Type(()=>FindUserOptionsDto)
    @IsOptional()
    public readonly options:FindUserOptionsDto
}