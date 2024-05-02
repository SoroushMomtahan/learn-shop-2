import { Body, Controller, Post } from "@nestjs/common";
import { SignUpDto } from "../dto/sign-up.dto";
import { SignInDto } from "../dto/sign-in.dto";
import { AuthenticationService } from "./authentication.service";

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService:AuthenticationService
  ) {
  }
  @Post('sign-up')
  public signUp(@Body() signUpDto:SignUpDto){
    return this.authenticationService.signUp(signUpDto)
  }
  @Post('sign-in')
  public signIn(@Body() signInDto:SignInDto){
    return this.authenticationService.signIn(signInDto);
  }
  public signOut(id:number){}
}