import { Inject, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { SignUpDto } from "../dto/sign-up.dto";
import { AxiosResponse } from "axios";
import { FetchUserDto } from "../dto/fetch-user.dto";
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
        'API_KEY': process.env.API_KEY
      }
    });
    return response.data;
  }

  public async findOneByUsername(username: string): Promise<FetchUserDto> {
    const response = await this.httpModule.axiosRef.get(`${this.userUrl}/one/user/?username=${username}`, {
      headers:{
        'API_KEY': process.env.API_KEY
      }
    });
    return response.data;
  }
}