import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { FindUserDto } from "./dto/find-user.dto";
import { ApiBearerAuth, ApiForbiddenResponse, ApiProperty, ApiTags } from "@nestjs/swagger";
@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService:UsersService) {
  }
  @ApiForbiddenResponse({description:'forbidden'})
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
  @Get('one/user')
  public findOneBy(@Query() findUserDto:FindUserDto){
    return this.usersService.findOneBy(findUserDto);
  }
  @Get()
  public findAll(@Query() findUserDto:FindUserDto){
    return this.usersService.findAll(findUserDto);
  }
  @Delete(':id')
  public removeOne(@Param('id', ParseIntPipe) id:number){
    const permission = [
      {
        type: 'courses',
        relation:{}
      }
    ]
    return this.usersService.removeOne(id)
  }
}