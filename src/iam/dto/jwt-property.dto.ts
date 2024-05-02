import { IsEmail, IsNumber } from "class-validator";

export class JwtPropertyDto {

  @IsNumber()
  sub: number;

  @IsEmail()
  email: string;

}