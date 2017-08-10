import * as koa from 'koa';
import * as body from 'koa-better-body';
import * as compress from 'koa-compress';
import * as conditional from 'koa-conditional-get';
import * as convert from 'koa-convert';
import * as etag from 'koa-etag';
import * as logger from 'koa-logger';
import * as mongoose from 'mongoose';
import * as qs from 'qs';
import * as xml2json from 'xml2json';
import { setup as setupAuth } from './auth';
import { setup as setupHttp } from './http';
import { setup as setupMongodb } from './mongodb';
import { setup as setupPlugins } from './plugins';
import { setup as setupRouters } from './routers';

export class Ycs extends koa {
  public static create(dirname, config): Ycs {
    Ycs.__instance = new Ycs(dirname, config);
    return Ycs.__instance;
  }

  private static __instance: Ycs;

  private __config;
  private __dirname;

  private constructor(dirname, config) {
    super();
    this.__config = config;
    this.__dirname = dirname;
  }

  public static get instance(): Ycs {
    return Ycs.__instance;
  }

  public get config() {
    return this.__config;
  }

  public get dir() {
    return this.__dirname;
  }

  public async start() {
    await setupMongodb(this);

    this.use(logger());
    this.use(
      convert(
        body({
          extendTypes: {
            custom: ['text/xml', 'application/xml'],
          },
          *handler(ctx, opts) {
            const xml: string = yield ctx.request.text(opts.textLimit);
            const obj: any = xml2json.toJson(xml, { object: true });
            ctx.request.fields = obj.xml;
          },
          querystring: qs,
        })
      )
    );
    this.use(compress());
    this.use(conditional());
    this.use(etag());

    await setupAuth(this);
    await setupPlugins(this, 'pre');
    await setupRouters(this);
    await setupHttp(this);
    await setupPlugins(this, 'post');
  }
}
