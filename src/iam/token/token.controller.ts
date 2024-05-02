import { Body, Controller, Get, Post } from "@nestjs/common";
import { JwtPropertyDto } from "../dto/jwt-property.dto";
import { TokenService } from "./token.service";
import { TokenDto } from "../dto/token.dto";

@Controller('token')
export class TokenController {
  constructor(
    private readonly tokenService:TokenService
  ) {
  }
  @Post('generate')
  public generate(@Body() jwtPropertyDto:JwtPropertyDto){
    return this.tokenService.generateToken(jwtPropertyDto);
  }
  @Post('refresh')
  public async refresh(@Body() tokenDto:TokenDto){
    // const payload = await this.tokenService.verifyRefreshToken(tokenDto);
    // const {sub, email} = payload
    // return this.tokenService.generateToken({sub, email})
    return this.tokenService.refreshToken(tokenDto);
  }
  @Post('verify')
  public verify(@Body() tokenDto:TokenDto){
    return this.tokenService.verifyAccessToken(tokenDto);
  }
}