import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { AdminFacade } from "../../application/admin.facade";
import { CreateUserCommand } from "../../application/command/create-user.command";

@ApiTags("admin")
@Controller("admin")
export class AdminController {
    constructor(
        private readonly adminFacade: AdminFacade
    ) {
    }

    @Post("users")
    public create(@Body() createUserDto: CreateUserDto) {
        return this.adminFacade.createUser(new CreateUserCommand(createUserDto));
    }

    @Get(":id")
    findOneUsers(@Param("id") id: string) {
        return this.adminFacade.findOneUser(id);
    }

    @Get("users")
    public findAllUsers() {
        return this.adminFacade.findAllUsers();
    }

    @Delete(":id")
    public deleteOneUsers(@Param("id") id: string) {
        return this.adminFacade.deleteOneUser(id);
    }
}