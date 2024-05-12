import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const ActiveUser = createParamDecorator(
  (field, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request['user']){
      return 2;
    }
    return field ? request['user'][field] : request['user'];
  },
);