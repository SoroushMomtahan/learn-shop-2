import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService:UsersService) {
  }
  @Post()
  public createOne(@Body() createUserDto:CreateUserDto){
    return this.usersService.createOne(createUserDto);
  }
  @Patch()
  public updateOne(@Body() updateUserDto:UpdateUserDto){
    return this.usersService.updateOne(updateUserDto);
  }
  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id:number){
    return this.usersService.findOne(id);
  }
  @Get()
  public findAll(){
    return this.usersService.findAll();
  }
  @Delete(':id')
  public removeOne(@Param('id', ParseIntPipe) id:number){
    return this.usersService.removeOne(id);
  }
}