import { PartialType } from "@nestjs/mapped-types";
import { CreateUserCommand } from "./create-user.command";

export class UpdateUserCommand extends PartialType(CreateUserCommand){
}