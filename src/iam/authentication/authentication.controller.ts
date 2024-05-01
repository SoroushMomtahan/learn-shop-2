import { Controller } from "@nestjs/common";
import { SignUpDto } from "../dto/sign-up.dto";
import { SignInDto } from "../dto/sign-in.dto";

@Controller('authentication')
export class AuthenticationController {
  public signUp(signUpDto:SignUpDto){

  }
  public signIn(si:SignInDto){}
  public signOut(id:number){}
}