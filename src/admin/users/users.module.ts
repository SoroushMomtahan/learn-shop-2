import { Module } from "@nestjs/common";
import { UsersFacade } from "./application/users.facade";
import { UsersController } from "./presenter/http/users.controller";
import { UsersInfrastructure } from "./infrastructure/users.infrastructure";
import { UsersFactory } from "./domain/factory/users.factory";

@Module({
    imports: [UsersInfrastructure],
    controllers: [UsersController],
    providers: [UsersFacade, UsersFactory]
})
export class UsersModule {
}