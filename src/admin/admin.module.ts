import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../common/entity/user.entity";
import { AdminFacade } from "./application/admin.facade";
import { AdminController } from "./presenter/http/admin.controller";
import { AdminInfrastructureModule } from "./infrastructure/admin-infrastructure.module";

@Module({
  imports:[AdminInfrastructureModule],
  controllers:[AdminController],
  providers:[AdminFacade]
})
export class AdminModule {
}