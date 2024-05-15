import {
  IsArray,
  IsBoolean,
  IsEmail, IsEnum,
  IsLowercase, IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { CreateUserCommand } from "../../../application/command/create-user.command";
import { RoleEnum } from "../../../domain/value-object/role.enum";

export class CreateUserDto1 {
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

  @IsArray({ each: true })
  @IsOptional()
  public readonly courseIds?: string[];
}