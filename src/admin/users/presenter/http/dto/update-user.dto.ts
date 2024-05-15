import { PartialType } from "@nestjs/swagger";
import { CreateUserDto1 } from "./create-user.dto1";

export class UpdateUserDto extends PartialType(CreateUserDto1){
}