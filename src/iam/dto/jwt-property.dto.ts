import { IsEmail, IsNumber } from "class-validator";

export class JwtPayload {

  @IsNumber()
  sub: number;

  @IsEmail()
  email: string;

}