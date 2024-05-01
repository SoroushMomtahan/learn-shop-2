import { OmitType, PartialType, PickType } from "@nestjs/mapped-types";
import { SignUpDto } from "./sign-up.dto";

export class SignInDto extends PickType(SignUpDto, ['username', "password"] as const) {
}