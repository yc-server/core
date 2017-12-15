import { IConfig as ICorsConfig } from './cors';
import { IConfig as IHttpConfig } from './http';
import { IConfig as IMongodbConfig } from './mongodb';
import { IConfig as IDocsConfig } from './docs';
import { IConfig as IAuthConfig } from './auth';
import { IConfig as IStaticsConfig } from './statics';
import { IConfig as ISpdyConfig } from './spdy';
import { IConfig as ISocketConfig } from './socket';

export * from './app';

export interface IConfig {
  /**
   * Project root
   */
  root: string;

  /**
   * Server port
   */
  port: number;

  /**
   * Server IP
   */
  ip: string;

  /**
   * Server domain
   */
  domain: string;

  /**
   *  cors
   */
  cors?: ICorsConfig;

  /**
   * http config
   */
  http?: IHttpConfig;

  /**
   * mongodb config
   */
  mongodb: IMongodbConfig;

  /**
   * document config
   */
  docs: IDocsConfig;

  /**
   * auth config
   */
  auth: IAuthConfig;

  /**
   * static files config
   */
  statics: IStaticsConfig[];

  /**
   * spdy config
   */
  spdy?: ISpdyConfig;

  /**
   * socketio config
   */
  socket: ISocketConfig;
}
