import { DocSchema } from '../src/docs';
import { Model, Schema } from '../src/db';

describe('test class DocSchema', () => {
  const model = Model({
    auth: true,
    name: 'test',
    schema: new Schema({
      name: String,
      info: String,
    }),
  });
  const docSchema = new DocSchema(model);
  it('should match schema', () => {
    expect(docSchema.schema).toMatchObject({
      properties: {
        __auth: {
          required: true,
          type: 'string',
        },
        __v: {
          format: 'int64',
          required: false,
          type: 'integer',
        },
        _id: {
          required: false,
          type: 'string',
        },
        info: {
          required: false,
          type: 'string',
        },
        name: {
          required: false,
          type: 'string',
        },
      },
      required: ['__auth'],
      type: 'object',
      xml: {
        name: 'xml',
      },
    });
  });
  it('should match filters', () => {
    const filters = docSchema.filters;
    expect(filters).toMatchObject({
      in: 'query',
      name: '_filters',
    });
    expect(filters.description).toMatch(/name: \{\}/);
    expect(filters.description).toMatch(/info: \{\}/);
  });
  it('should match result', () => {
    expect(docSchema.result).toMatchObject({
      properties: {
        __auth: {
          required: true,
          type: 'string',
        },
        __v: {
          format: 'int64',
          required: false,
          type: 'integer',
        },
        _id: {
          required: false,
          type: 'string',
        },
        info: {
          required: false,
          type: 'string',
        },
        name: {
          required: false,
          type: 'string',
        },
      },
      required: ['__auth'],
      type: 'object',
      xml: {
        name: 'xml',
      },
    });
  });
});
