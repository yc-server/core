import * as lodash from 'lodash';

export interface IResultOptions {
  select?: string;
  exclude?: string;
}

export class DocSchema {
  constructor(private model) {}

  get paginateResult() {
    return lodash.merge(PAGINATE_RESULT, {
      properties: {
        docs: this.result,
      },
    });
  }

  public paginateResultWithOptions(options: IResultOptions) {
    return lodash.merge(PAGINATE_RESULT, {
      properties: {
        docs: this.resultWithOptions(options),
      },
    });
  }

  public resultWithOptions(options: IResultOptions) {
    const result = this.result;
    const properties = result.properties;
    if (typeof options.select === 'string') {
      result.properties = {};
      for (const k of options.select.split(' ')) {
        if (k) result.properties[k] = properties[k];
      }
      return result;
    }
    if (typeof options.exclude === 'string') {
      for (const k of options.exclude.split(' ')) {
        if (k) delete result.properties[k];
      }
      return result;
    }
    return result;
  }

  get result() {
    const schema = model2Schema(this.model);
    schema.properties._id = schema.properties._id || {
      type: 'string',
    };
    schema.properties._id = schema.properties.__v || {
      type: 'string',
    };
    return schema;
  }

  get paginateOptions() {
    return PAGINATE_OPTIONS;
  }

  get showOptions() {
    return SHOW_OPTIONS;
  }

  get paramId() {
    return PARAM_ID;
  }

  get body(): IDocsParameter {
    const schema = model2Schema(this.model);
    schema.xml = {
      name: 'xml',
    };
    return {
      in: 'body',
      name: 'body',
      schema,
    };
  }

  get response4xx() {
    return RESPONSE_4XX;
  }

  get response5xx() {
    return RESPONSE_5XX;
  }
}

export type IDocsAccept =
  | 'application/xml'
  | 'application/json'
  | 'text/plain'
  | 'multipart/form-data';
export type IDocsDataType =
  | 'integer'
  | 'number'
  | 'string'
  | 'boolean'
  | 'file'
  | 'array'
  | 'object';
export type IDocsDataFormat =
  | 'int32'
  | 'int64'
  | 'float'
  | 'double'
  | 'binary'
  | 'date'
  | 'date-time'
  | 'password';

export interface IDocsDataTypeItem {
  type: IDocsDataType;
  format?: IDocsDataFormat;
  items?: IDocsDataTypeItem;
  properties?: IDocsDataTypeProperties;
  description?: string;
  required?: boolean;
  xml?: {
    name: string;
  };
}

export interface IDocsDataTypeProperties {
  [index: string]: IDocsDataTypeItem;
}

export interface IDocsParameter {
  in: 'body' | 'query' | 'formData' | 'path';
  name: string;
  type?: IDocsDataType;
  items?: {
    type: IDocsDataType;
  };
  properties?: {
    [index: string]: {
      type: IDocsDataType;
    };
  };
  summary?: string;
  description?: string;
  required?: boolean;
  schema?: IDocsDataTypeItem;
}

export interface IDocs {
  path: string;
  methods: ['post' | 'get' | 'put' | 'patch' | 'delete'];
  controller: (ctx: any) => Promise<any>;
  auth?: {
    type: 'isAuthenticated' | 'owns' | 'hasRoles' | 'ownsOrHasRoles';
    roles?: string[];
  };
  tags: string[];
  summary?: string;
  description?: string;
  consumes?: IDocsAccept[];
  produces?: IDocsAccept[];
  parameters?: IDocsParameter[];
  responses: {
    [index: string]: {
      description: string;
      schema?: any;
    };
  };
}

export function model2Schema(model): IDocsDataTypeItem {
  return signObjectType(model.schema.obj);
}

function signSimpleType(obj): IDocsDataTypeItem {
  switch (obj) {
    case Date:
      return {
        format: 'date-time',
        type: 'string',
      };
    case Boolean:
      return {
        type: 'boolean',
      };
    case Number:
      return {
        type: 'number',
      };
    default:
      return {
        type: 'string',
      };
  }
}

function signArrayType(obj): IDocsDataTypeItem {
  const res: any = {
    items: {},
    type: 'array',
  };

  if (obj[0].constructor === Array) {
    res.items = signArrayType(obj[0]);
  } else if (obj[0].constructor === Object) {
    res.items = signObjectType(obj[0]);
  } else {
    res.items = signSimpleType(obj[0]);
  }
  return res;
}

function signObjectType(obj): IDocsDataTypeItem {
  const res: any = {
    properties: {},
    type: 'object',
  };
  for (const k of Object.keys(obj)) {
    if (obj[k].constructor === Array) {
      res.properties[k] = signArrayType(obj[k]);
    } else if (obj[k].constructor === Object) {
      res.properties[k] = signObjectType(obj[k]);
    } else {
      res.properties[k] = signSimpleType(obj[k]);
    }
  }
  return res;
}

const PAGINATE_OPTIONS: IDocsParameter = {
  description: `More info at [https://www.npmjs.com/package/mongoose-paginate](https://www.npmjs.com/package/mongoose-paginate)
  <br />

    {
      "lean": Boolean,
      "leanWithId": Boolean,
      "limit": Number,
      "offset": Number,
      "page": Number,
      "populate": String,
      "select": String,
      "sort": String
    }
    `,
  in: 'query',
  name: '_options',
};

const PAGINATE_RESULT: IDocsDataTypeItem = {
  properties: {
    limit: {
      type: 'number',
    },
    next: {
      type: 'number',
    },
    offset: {
      type: 'number',
    },
    page: {
      type: 'number',
    },
    pages: {
      type: 'number',
    },
    prev: {
      type: 'number',
    },
    total: {
      type: 'number',
    },
  },
  type: 'object',
};

const SHOW_OPTIONS: IDocsParameter = {
  description: `
    {
      "select": String,
      "populate": String
    }
    `,
  in: 'query',
  name: '_options',
};

const PARAM_ID: IDocsParameter = {
  description: 'Unique id',
  in: 'path',
  name: 'id',
  required: true,
  type: 'string',
};

const RESPONSE_4XX = {
  description: 'Client side errors',
};

const RESPONSE_5XX = {
  description: 'Server side errors',
};
