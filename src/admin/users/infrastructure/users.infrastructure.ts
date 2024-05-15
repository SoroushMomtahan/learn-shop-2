import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../../../resource/common/entity/user.entity";
import { IUserRepository } from "../application/port/i-user.repository";
import { UsersService } from "./persistence/adapter/users.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [
        {
            provide: IUserRepository,
            useClass: UsersService
        },
    ],
    exports: [
        IUserRepository
    ]
})
export class UsersInfrastructure {
}