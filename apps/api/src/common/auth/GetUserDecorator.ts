import {ExecutionContext, createParamDecorator} from '@nestjs/common';

import {IUser} from '@autospace/domain';
import {GqlExecutionContext} from '@nestjs/graphql';

type Context = {
  req: Request & {
    user?: IUser;
  };
};

export const GetUserDecorator = createParamDecorator(
  (_data, ctx: ExecutionContext) => {
    const context = GqlExecutionContext.create(ctx);
    return context.getContext<Context>().req.user;
  },
);
