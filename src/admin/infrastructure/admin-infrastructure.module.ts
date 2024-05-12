import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../../common/entity/user.entity";
import { IUserRepository } from "../application/port/i-user.repository";
import { UserService } from "./persistence/adapter/user.service";

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers:[
    {
      provide:IUserRepository,
      useClass:UserService
    }
  ],
  exports:[
    IUserRepository
  ]
})
export class AdminInfrastructureModule {
}