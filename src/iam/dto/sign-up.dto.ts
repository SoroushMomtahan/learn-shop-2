import { PickType } from "@nestjs/mapped-types";
import { CreateUserDto } from "../../users/dto/create-user.dto";
import {
  IsEmail,
  IsLowercase,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength
} from "class-validator";

export class SignUpDto {
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
}