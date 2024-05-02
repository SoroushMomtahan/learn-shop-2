import { Injectable, OnApplicationBootstrap, OnApplicationShutdown } from "@nestjs/common";
import Redis from "ioredis";

@Injectable()
export class TokenStorageService implements OnApplicationShutdown, OnApplicationBootstrap {
  private redisClient:Redis
  onApplicationBootstrap() {
    this.redisClient = new Redis({
      host: 'localhost',
      port: 6379,
      password:"mypassword"
    });
  }

  onApplicationShutdown(signal?: string) {
    this.redisClient.quit()
  }

  public set(key:number,value:string) {
    this.redisClient.set(this.getKey(key), value)
  }
  public get(key:number){
    return this.redisClient.get(this.getKey(key));
  }
  public delete(key:number){
    this.redisClient.del(this.getKey(key));
  }
  private getKey(key:number){
    return `user-${key}`
  }
}