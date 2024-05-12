import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { AdminFacade } from "../../application/admin.facade";
import { CreateUserCommand } from "../../application/command/create-user.command";
@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminFacade:AdminFacade
  ) {
  }
  @Post('users')
  public create(@Body() createUserDto:CreateUserDto){
    return this.adminFacade.create(new CreateUserCommand(createUserDto));
  }
}