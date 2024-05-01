import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { IamModule } from "../iam/iam.module";

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    IamModule
  ],
  controllers:[UsersController],
  providers:[UsersService]
})
export class UsersModule {
}