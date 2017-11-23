import { setup } from '../src/mongodb';
import { Mongoose } from '../src/db';

describe('test mongodb', () => {
  const backup = {
    connect: Mongoose.connect,
    on: Mongoose.connection.on,
    exit: process.exit,
  };

  beforeAll(() => {
    Mongoose.connect = jest.fn();
    Mongoose.connection.on = jest.fn().mockImplementation((x, cb) => cb(x));
    process.exit = jest.fn() as any;
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
    Mongoose.connect = backup.connect;
    Mongoose.connection.on = backup.on;
    process.exit = backup.exit;
  });
});
