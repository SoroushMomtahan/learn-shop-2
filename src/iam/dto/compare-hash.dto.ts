import { IsHash, IsString } from "class-validator";

export class CompareHashDto {
  @IsString()
  password:string;

  @IsString()
  hashedPassword:string;
}