import { ConflictException, HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../users/entity/user.entity";
import { Repository } from "typeorm";
import { SignUpDto } from "../dto/sign-up.dto";
import { SignInDto } from "../dto/sign-in.dto";
import { HashingService } from "../hashing/abstract/hashing.service";
import { TokenService } from "../token/token.service";
import { FetchUserService } from "../fetch/fetch-user.service";
import { FetchUserDto } from "../fetch/fetch-user.dto";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly fetchUserService:FetchUserService,
    private readonly hashingService:HashingService,
    private readonly tokenService:TokenService
  ) {
  }

  public async signUp(signUpDto: SignUpDto) {
    try {
      const user = await this.fetchUserService.create(signUpDto);
      return this.tokenService.generateToken({ sub: user.id, email: user.email })
    } catch (e) {
      const mssqlServerDuplicationError = 2601;
      if (e.code == mssqlServerDuplicationError)
        throw new ConflictException();
      throw new HttpException('server error', 500);
    }
  }

  public async signIn(signInDto: SignInDto) {
    const { username, password } = signInDto;
    const user = await this.fetchUserService.findOneByUsername(username);
    if (!user){
      throw new NotFoundException()
    }
    const isEqual = this.hashingService.compare(password, user.password);
    if (!isEqual){
      throw new NotFoundException();
    }
    return this.tokenService.generateToken({sub:user.id, email:user.email});
  }

  public async signOut(id: number) {
    // const user = await this.fetchUserService.({ id });
  }

}