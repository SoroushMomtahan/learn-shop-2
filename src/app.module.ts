import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { CommonModule } from "./common/common.module";
import { IamModule } from "./iam/iam.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forRoot({
    host: "localhost",
    port: 1433,
    type: "mssql",
    username: "sa",
    password: "1234@abcd",
    database: "learnShop2DB",
    synchronize: true,
    autoLoadEntities:true,
    options:{
      encrypt:false
    }
  }),
    ConfigModule.forRoot(),
    UsersModule, CommonModule, IamModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
