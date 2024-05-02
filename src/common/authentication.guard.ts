import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import * as process from "process";
import { Reflector } from "@nestjs/core";
import { PUBLIC_KEY } from "./decorator/public.decorator";
import { Request } from "express";
import { FetchIamService } from "./fetch/fetch-iam.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private reflector:Reflector,
    private readonly fetchIamService:FetchIamService
  ) {
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
      context.getClass(),
      context.getHandler()
    ]);

    if (isPublic) {
      return true;
    }

    if (request.headers['api-key'] && request.headers['api-key'] === process.env.API_KEY) {
      return true
    }

    if (!token) {
      return false;
    }

    request['user'] = await this.fetchIamService.verifyToken(token);
    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }

}