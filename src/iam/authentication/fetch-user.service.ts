import { Inject, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { SignUpDto } from "../dto/sign-up.dto";
import { AxiosResponse } from "axios";

@Injectable()
export class FetchUser {
  constructor(
    private readonly httpModule:HttpService,
    @Inject("USERS_URL")
    private readonly userUrl:string
  ) {
  }
  public create(signUpDto:SignUpDto):Promise<AxiosResponse{
    return this.httpModule.axiosRef.post(this.userUrl, signUpDto);
  }
  public findOne(){

  }
}