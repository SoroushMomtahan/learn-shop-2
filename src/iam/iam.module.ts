import { Module } from "@nestjs/common";
import { HashingService } from "./hashing/abstract/hashing.service";
import { BcryptService } from "./hashing/bcrypt.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/entity/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { jwtSecretConstant } from "./constant/jwt-secret.constant";
import { TokenService } from "./token/token.service";
import { TokenStorageService } from "./token/token-storage.service";
import { TokenController } from "./token/token.controller";
import { HashingController } from "./hashing/hashing.controller";
import { AuthenticationController } from "./authentication/authentication.controller";
import { AuthenticationService } from "./authentication/authentication.service";
import { HttpModule } from "@nestjs/axios";
import { FetchUserService } from "./authentication/fetch-user.service";

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      global: true,
      secret: jwtSecretConstant,
      signOptions: { expiresIn: "1d" }
    })
  ],
  controllers: [
    TokenController,
    HashingController,
    AuthenticationController
  ],
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService
    },
    {
      provide: "USERS_URL",
      useValue: "http://localhost:4000/users"
    },
    FetchUserService,
    TokenService,
    TokenStorageService,
    AuthenticationService
  ],
  exports:[HashingService]
})
export class IamModule {
}