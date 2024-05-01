import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../users/entity/user.entity";
import { Repository } from "typeorm";
import { SignUpDto } from "../dto/sign-up.dto";
import { SignInDto } from "../dto/sign-in.dto";

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
  }

  public signUp(signUpDto: SignUpDto) {

  }

  public signIn(si: SignInDto) {
  }

  public signOut(id: number) {
  }

}