import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserEntity } from "../common/entity/user.entity";

import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

import { CoursesModule } from "../courses/courses.module";

@Module({
    imports:[TypeOrmModule.forFeature([UserEntity]), CoursesModule],
    controllers:[
      UsersController
    ],
    providers:[
        UsersService
    ],
    exports:[
        UsersService
    ]
})
export class UsersModule {
}