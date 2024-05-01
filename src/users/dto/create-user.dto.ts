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
  @MinLength(6)
  @IsLowercase()
  @IsString()
  @IsNotEmpty()
  username:string;

  @IsLowercase()
  @IsEmail()
  @IsNotEmpty()
  email:string;

  @IsMobilePhone('fa-IR')
  @IsNumber()
  @IsNotEmpty()
  mobile:number;

  @MaxLength(24)
  @IsStrongPassword()
  @IsNotEmpty()
  password:string;

  @IsBoolean()
  @IsOptional()
  status:boolean;

  @IsEnum(RoleEnum)
  @IsOptional()
  role:string;
}