import { PickType } from "@nestjs/mapped-types";
import { CreateUserDto } from "../../users/dto/create-user.dto";

export class SignUpDto extends PickType(CreateUserDto, ['username', 'email', 'mobile', 'password'] as const){
}