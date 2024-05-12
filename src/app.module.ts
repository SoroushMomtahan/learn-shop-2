import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AdminModule } from "./admin/admin.module";

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
      autoLoadEntities: true,
      options: {
        encrypt: false
      }
    }),
    // TypeOrmModule.forFeature([UserEntity, CourseEntity]),
    ConfigModule.forRoot(),
    // TeacherModule
    AdminModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
