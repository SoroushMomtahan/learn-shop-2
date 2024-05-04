import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtPropertyDto } from "../dto/jwt-property.dto";
import { TokenStorageService } from "./token-storage.service";
import { TokenDto } from "../dto/token.dto";
import { FetchUserService } from "../fetch/fetch-user.service";

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly tokenStorageService: TokenStorageService,
    private readonly fetchUserService: FetchUserService
  ) {
  }

  public generateToken(jwtPropertyDto: JwtPropertyDto) {
    const { sub, ...payload } = jwtPropertyDto;
    const tokenId = crypto.randomUUID();
    this.tokenStorageService.set(sub, tokenId);
    const accessToken =  this.jwtService.sign({
      sub,
      tokenId,
      ...payload
    });
    const refreshToken = this.jwtService.sign({
      sub,
      tokenId
    }, {
      expiresIn: "30d"
    });
    return {
      accessToken,
      refreshToken
    }
  }

  public async verifyAccessToken(tokenDto: TokenDto) {
    try {
      const payload = this.jwtService.verify(tokenDto.token);
      const tokenId = await this.tokenStorageService.get(payload.sub);
      if (tokenId !== payload.tokenId){
        throw new UnauthorizedException();
      }
      if (!payload.email) {
        throw new UnauthorizedException();
      }
      return this.fetchUserService.findOneById(payload.sub);
    } catch (e) {
      throw new UnauthorizedException();
    }

  }

  public async refreshToken(tokenDto: TokenDto) {
    const payload = await this.verifyRefreshToken(tokenDto);
    const { sub, email } = payload;
    this.tokenStorageService.delete(sub);
    return this.generateToken({ sub, email });
  }

  public async deleteGeneratedToken(accessToken:string){
    try {
      const payload = await this.verifyAccessToken({ token:accessToken });
      const {id} = payload;
      this.tokenStorageService.delete(id);
      return payload
    }catch (e){
      throw new UnauthorizedException();
    }
  }

  // ----------------------------- private ----------------------------
  private async verifyRefreshToken(tokenDto: TokenDto): Promise<JwtPropertyDto> {
    try {
      const payload = this.jwtService.verify(tokenDto.token);
      const tokenId = await this.tokenStorageService.get(payload.sub);
      if (payload.email) {
        throw new UnauthorizedException()
      }
      if (tokenId !== payload.tokenId) {
        throw new UnauthorizedException();
      }
      return payload;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}