import { HttpException, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { SignUpDto } from "../dto/sign-up.dto";
import { FetchUserDto } from "./fetch-user.dto";
import * as process from "process";

@Injectable()
export class FetchUserService {
  constructor(
    private readonly httpModule: HttpService,
    @Inject("USERS_URL")
    private readonly userUrl: string
  ) {
  }

  public async create(signUpDto: SignUpDto):Promise<FetchUserDto> {
    const response = await this.httpModule.axiosRef.post(this.userUrl, signUpDto, {
      headers:{
        'api-key': process.env.API_KEY
      }
    });
    return response.data;
  }

  public async findOneByUsername(username: string): Promise<FetchUserDto> {
    try {
      const response = await this.httpModule.axiosRef.get(`${this.userUrl}/one/user/?username=${username}`,{
        headers:{
          'api-key': process.env.API_KEY
        }
      });
      return response.data;
    }catch (e){
      throw new HttpException(e.response.data.message, e.response.data.status)
    }
  }

  public async findOneById(id: number): Promise<FetchUserDto> {
    try {
      const response = await this.httpModule.axiosRef.get(`${this.userUrl}/${id}`,{
        headers:{
          'api-key': process.env.API_KEY
        }
      });
      return response.data;
    }catch (e){
      throw new HttpException(e.response.data.message, e.response.data.status)
    }
  }
}