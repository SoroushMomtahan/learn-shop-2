import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto1 } from "./dto/create-user.dto1";
import { UsersFacade } from "../../application/users.facade";
import { CreateUserCommand } from "../../application/command/create-user.command";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdateUserCommand } from "../../application/command/update-user.command";
import { isUUID } from "class-validator";

@ApiTags("users")
@Controller("admin/users")
export class UsersController {
    constructor(
        private readonly adminFacade: UsersFacade
    ) {
    }

    @Get(":id")
    findOneUsers(@Param("id") id: string) {
        return this.adminFacade.findOne(id);
    }

    @Get()
    public findAllUsers() {
        return this.adminFacade.findAll();
    }

    @Post()
    public create(@Body() createUserDto: CreateUserDto1) {
        return this.adminFacade.create(createUserDto);
    }

    @Patch(":id")
    public updateOneUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.adminFacade.updateOne(id, updateUserDto);
    }

    @Delete(":id")
    public deleteOneUsers(@Param("id") id: string) {
        return this.adminFacade.deleteOne(id);
    }
}