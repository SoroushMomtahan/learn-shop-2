import { IsJWT } from "class-validator";

export class FetchTokenDto {
  @IsJWT()
  token:string
}