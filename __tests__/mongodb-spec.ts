import { setup } from '../src/mongodb';
import { Mongoose } from '../src/db';
import * as mocker from './mock';

describe('test mongodb', () => {
  const backup = {
    connect: Mongoose.connect,
    on: Mongoose.connection.on,
    exit: process.exit,
  };

  beforeAll(() => {
    mocker.mockMongoose();
  });

  test('it should connect mongodb', async () => {
    const app: any = {
      config: {
        mongodb: {
          uri: 'mongodb://test/test',
          options: {
            useMongoClient: true,
          },
          promise: global.Promise,
        },
      },
    };
    expect(() => {
      setup(app);
    }).not.toThrow();
  });

  afterAll(() => {
    mocker.unmockMongoose();
  });
});
