import { Body, Controller, Get, Post, Req, UnauthorizedException } from "@nestjs/common";
import { SignUpDto } from "../dto/sign-up.dto";
import { SignInDto } from "../dto/sign-in.dto";
import { AuthenticationService } from "./authentication.service";
import { Public } from "../../common/decorator/public.decorator";
import { TokenDto } from "../dto/token.dto";
import { Request } from "express";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('iam')
@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService:AuthenticationService
  ) {
  }
  @Public()
  @Post('sign-up')
  public signUp(@Body() signUpDto:SignUpDto){
    return this.authenticationService.signUp(signUpDto)
  }
  @Public()
  @Post('sign-in')
  public signIn(@Body() signInDto:SignInDto){
    return this.authenticationService.signIn(signInDto);
  }
  @Get('sign-out')
  public signOut(@Req() req:Request){
    const token = this.extractTokenFromHeader(req);
    if (!token){
      throw new UnauthorizedException();
    }
    return this.authenticationService.signOut(token);
  }
  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}