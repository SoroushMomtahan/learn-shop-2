import {
  IsBoolean,
  IsEmail, IsEnum,
  IsLowercase, IsMobilePhone,
  IsNotEmpty, IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength, Min,
  MinLength
} from "class-validator";
import { RoleEnum } from "../enum/role.enum";

export class CreateUserDto {

  @MaxLength(50)
  @MinLength(3)
  @IsString()
  @IsOptional()
  firstname:string;

  @MaxLength(50)
  @MinLength(3)
  @IsString()
  @IsOptional()
  lastname:string;

  @MaxLength(20)
  @MinLength(3)
  @IsLowercase()
  @IsString()
  @IsNotEmpty()
  username:string;

  @IsLowercase()
  @IsEmail()
  @IsNotEmpty()
  email:string;

  @IsMobilePhone('fa-IR')
  @IsString()
  @IsNotEmpty()
  mobile:string;

  @MaxLength(24)
  @IsStrongPassword()
  @IsNotEmpty()
  password:string;

  @IsBoolean()
  @IsOptional()
  status:boolean;

  @IsEnum(RoleEnum)
  @IsOptional()
  role:RoleEnum;
}