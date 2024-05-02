import { IsLowercase, IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";

export class SignInDto {
  @MaxLength(20)
  @MinLength(3)
  @IsLowercase()
  @IsString()
  @IsNotEmpty()
  username:string;

  @MaxLength(24)
  @IsStrongPassword()
  @IsNotEmpty()
  password:string;
}