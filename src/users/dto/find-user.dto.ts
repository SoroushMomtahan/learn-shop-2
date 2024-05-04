import { PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";

export class FindUserDto extends PartialType(CreateUserDto){
}