import { Module } from "@nestjs/common";
import { HashingService } from "./hashing/hashing.service";
import { BcryptService } from "./hashing/bcrypt.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/entity/user.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([User])
  ],
  providers:[
    {
      provide:HashingService,
      useClass:BcryptService
    }
  ],
  exports:[HashingService]
})
export class IamModule {
}