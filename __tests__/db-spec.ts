import { Mongoose, Model, Schema, patchUpdates } from '../src/db';
import { setup as setupMongodb } from '../src/mongodb';

describe('test crud', () => {
  beforeAll(() => {});

  afterAll(() => {});

  it('should create a model', async () => {
    const model = Model({
      auth: true,
      name: 'test',
      schema: new Schema({
        name: String,
        info: String,
      }),
    });
    expect(model.schema.path('name')).toBeTruthy();
    expect(model.schema.path('info')).toBeTruthy();
  });

  it('should update an entity', async () => {
    const entity: any = {};
    patchUpdates(entity, {
      a: 1,
    });
    expect(entity).toMatchObject({
      a: 1,
    });
  });
});
