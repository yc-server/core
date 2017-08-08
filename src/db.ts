import * as _ from 'lodash';
import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';
import { IContext } from './context';
import { DocSchema, IDocs } from './docs';
import { Boom } from './errors';
import { Router } from './routers';

export interface IModelOptions {
  auth?: boolean;
  collection?: string;
  name: string;
  schema: mongoose.Schema;
  skipInit?: boolean;
}

export interface IModel extends mongoose.PaginateModel<mongoose.Document> {
  docSchema: DocSchema;
  routes: (prefix: string, ...paths: IDocs[]) => Router;
}

export function Model(options: IModelOptions): IModel {
  options.schema.add({
    __auth: {
      ref: '__auths',
      required: !!options.auth,
      type: mongoose.SchemaTypes.ObjectId,
    },
  });
  options.schema.plugin(mongoosePaginate);
  const model = mongoose.model(
    options.name,
    options.schema,
    options.collection,
    options.skipInit
  );
  model['docSchema'] = new DocSchema(model);
  model['routes'] = (prefix, ...paths) => {
    const router = new Router(prefix).paths(...paths);
    router.model = model as IModel;
    return router;
  };
  return model as IModel;
}

export const Schema = mongoose.Schema;

export const Mongoose = mongoose;

export async function paginate(
  model: mongoose.PaginateModel<mongoose.Document>,
  ctx: IContext,
  filters?: any,
  options?: mongoose.PaginateOptions
): Promise<mongoose.PaginateResult<mongoose.Document>> {
  let _filters = {};
  let _options: mongoose.PaginateOptions = {};

  if (filters) {
    _filters = _.merge(_filters, filters);
  }

  if (options) {
    _options = _.merge(_options, options);
  }

  if (ctx.request.query._filters) {
    try {
      const reqFilters = JSON.parse(ctx.request.query._filters);
      _filters = _.merge(_filters, reqFilters);
    } catch (e) {
      throw Boom.boomify(e, { statusCode: 422 });
    }
  }

  if (ctx.request.query._options) {
    try {
      const reqOptions = JSON.parse(ctx.request.query._options);
      _options = _.merge(_options, reqOptions);
    } catch (e) {
      throw Boom.boomify(e, { statusCode: 422 });
    }
  }

  return await model.paginate(_filters, _options);
}

export async function show(
  model: mongoose.PaginateModel<mongoose.Document>,
  ctx: IContext,
  options?: mongoose.PaginateOptions
): Promise<mongoose.Document> {
  let _options: mongoose.PaginateOptions = {};

  if (options) {
    _options = _.merge(_options, options);
  }

  if (ctx.request.query._options) {
    try {
      const reqOptions = JSON.parse(ctx.request.query._options);
      _options = _.merge(_options, reqOptions);
    } catch (e) {
      throw Boom.boomify(e, { statusCode: 422 });
    }
  }

  let query = model.findById(ctx.params.id);
  if (_options.select) query = query.select(_options.select);
  if (_options.populate) query = query.populate(_options.populate);

  return await query.exec();
}

export function patchUpdates(
  entity: mongoose.Document,
  updates: any
): mongoose.Document {
  if (updates._id) delete updates._id;
  const updated = _.mergeWith(entity, updates, (objValue, srcValue) => {
    if (_.isObject(objValue) && srcValue === null) {
      if (_.isArray(objValue)) return [];
      return {};
    }
    if (_.isArray(objValue)) {
      const merged = [];
      for (let i = 0; i < srcValue.length; i++) {
        merged[i] =
          _.isEmpty(srcValue[i]) && srcValue[i] !== null
            ? objValue[i]
            : srcValue[i];
      }
      return merged.filter(x => x !== null);
    }
  });
  return updated;
}
