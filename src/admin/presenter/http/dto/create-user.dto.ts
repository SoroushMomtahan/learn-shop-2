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

export class CreateUserDto {
  @ApiProperty({
    default: "soroush"
  })
  @MaxLength(50)
  @MinLength(3)
  @IsString()
  @IsOptional()
  firstname: string;

  @MaxLength(50)
  @MinLength(3)
  @IsString()
  @IsOptional()
  lastname: string;

  @MaxLength(20)
  @MinLength(3)
  @IsLowercase()
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsLowercase()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsMobilePhone("fa-IR")
  @IsString()
  @IsNotEmpty()
  mobile: string;

  @MaxLength(24)
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsOptional()
  status: boolean;

  @IsEnum(RoleEnum)
  @IsOptional()
  role: RoleEnum;

  @IsArray({ each: true })
  @IsOptional()
  courseIds: number[];

  // static toCreateUserCommand(createUserDto:CreateUserDto){
  //   return new CreateUserCommand(
  //     createUserDto.firstname,
  //     createUserDto.lastname,
  //     createUserDto.username,
  //     createUserDto.email,
  //     createUserDto.mobile,
  //     createUserDto.password,
  //     createUserDto.status,
  //     createUserDto.role
  //   )
  // }
}