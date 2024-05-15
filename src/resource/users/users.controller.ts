import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { FindUserDto } from "./dto/find-user.dto";
import { PaginationDto } from "../../common/dto/pagination.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

import { UsersService } from "./users.service";
import { FindUserOptionsDto } from "./dto/find-user-options.dto";

@ApiTags("users")
@Controller("resource/users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post("create")
    public create(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
        return this.usersService.create(createUserDto);
    }

    @Post("find-all")
    public findAll(@Query() pagination?: PaginationDto, @Body() findUserDto?: FindUserDto) {
        return this.usersService.findAll(pagination, findUserDto);
    }

    @Post("find-one/:id")
    public findOne(@Param("id") id: string, @Body() findUserOptionsDto:FindUserOptionsDto) {
        return this.usersService.findOne(id, findUserOptionsDto);
    }

    @Patch(":id")
    public updateOne(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateOne(id, updateUserDto);
    }

    @Delete(":id")
    public deleteOne(@Param("id") id: string, @Query("isHard", ParseBoolPipe) type: boolean) {
        return this.usersService.deleteOne(id, type);
    }
}