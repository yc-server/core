import { Request } from 'koa';
import { IRouterContext } from 'koa-router';

export interface IRequest extends Request {
  files: any;
  fields: any;
  auth: {
    _id: string;
    providers: Array<{
      name: string;
      openid: string;
    }>;
    roles: string[];
    owns: boolean;
  };
  body: string;
}

export interface IContext extends IRouterContext {
  request: IRequest;
  session: any;
}
