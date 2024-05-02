import { HttpException, Inject, Injectable } from "@nestjs/common";
import { HttpModule, HttpService } from "@nestjs/axios";
import * as process from "process";
import { response } from "express";

@Injectable()
export class FetchIamService {
  constructor(
    private readonly httpService:HttpService,
    @Inject('IAM_URL')
    private readonly iamUrl:string
  ) {
  }
  public async verifyToken(token:string){
    try {
      const response = await this.httpService.axiosRef.post(`${this.iamUrl}/verify`, {token:token}, {
        headers:{
          'api-key':process.env.API_KEY
        }
      });
      return response.data;
    }catch (e) {
      throw new HttpException(e.response.data.message, e.response.data.status)
    }
  }
}