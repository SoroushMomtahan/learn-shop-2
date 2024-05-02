import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtPropertyDto } from "../dto/jwt-property.dto";
import { TokenStorageService } from "./token-storage.service";
import { TokenDto } from "../dto/token.dto";

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly tokenStorageService:TokenStorageService
  ) {
  }

  public generateToken(jwtPropertyDto:JwtPropertyDto) {
    return {
      accessToken: this.generateAccessToken(jwtPropertyDto),
      refreshToken: this.generateRefreshToken(jwtPropertyDto)
    };
  }

  public async verifyAccessToken(tokenDto:TokenDto):Promise<JwtPropertyDto>{
    try {
      const payload = this.jwtService.verify(tokenDto.token);
      if (payload.tokenId){
        throw new UnauthorizedException();
      }
      return payload;
    }catch (e) {
      throw new UnauthorizedException();
    }

  }

  public async refreshToken(tokenDto:TokenDto){
    const payload = await this.verifyRefreshToken(tokenDto);
    const {sub, email} = payload;
    this.tokenStorageService.delete(sub);
    return this.generateToken({sub, email});
  }

  // ----------------------------- private ----------------------------
  private generateAccessToken(jwtPayload:JwtPropertyDto) {
    const {sub, ...payload} = jwtPayload;
    return this.jwtService.sign({
      sub,
      ...payload
    });
  }

  private generateRefreshToken(jwtPayload:JwtPropertyDto) {
    const {sub, ...payload} = jwtPayload;
    const tokenId = crypto.randomUUID();
    this.tokenStorageService.set(sub, tokenId);
    return this.jwtService.sign({
      sub,
      tokenId,
      ...payload
    }, {
      expiresIn: '30d'
    });
  }

  private async verifyRefreshToken(tokenDto: TokenDto):Promise<JwtPropertyDto> {
    try {
      const payload = this.jwtService.verify(tokenDto.token)
      const tokenId = await this.tokenStorageService.get(payload.sub);
      if (tokenId !== payload.tokenId) {
        throw new UnauthorizedException()
      }
      return payload;
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
}