import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "../dto/jwt-payload";
import { TokenStorageService } from "./token-storage.service";
import { TokenDto } from "../dto/token.dto";

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly tokenStorageService:TokenStorageService
  ) {
  }

  public generateToken(jwtPayload:JwtPayload) {
    return {
      accessToken: this.generateAccessToken(jwtPayload),
      refreshToken: this.generateRefreshToken(jwtPayload)
    };
  }

  private generateAccessToken(jwtPayload:JwtPayload) {
    const {sub, ...payload} = jwtPayload;
    return this.jwtService.sign({
      sub,
      ...payload
    });
  }

  private generateRefreshToken(jwtPayload:JwtPayload) {
    const {sub, ...payload} = jwtPayload;
    const tokenId = crypto.randomUUID();
    this.tokenStorageService.set(sub, tokenId);
    return this.jwtService.sign({
      sub,
      tokenId,
      ...payload,
    }, {
      expiresIn: '30d'
    });
  }

  public async verifyAccessToken(tokenDto:TokenDto){


  }
  public async verifyRefreshToken(tokenDto: TokenDto) {
    try {
      const payload = this.jwtService.verify(tokenDto.token)
      const tokenId = await this.tokenStorageService.get(payload.sub);
      if (tokenId !== payload.tokenId) {
        return new UnauthorizedException()
      }
      return
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
}