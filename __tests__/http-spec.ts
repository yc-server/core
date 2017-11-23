import { setup } from '../src/http';
import * as http from 'http';

test('it sould run http', async () => {
  const app: any = {
    config: {
      http: {
        preListen: x => {},
      },
      domain: 'test.com',
      port: 80,
    },
    callback: () => true,
  };
  (<any>http).createServer = x => {
    return {
      listen: x => {},
    };
  };
  const res = await setup(app);
  expect(res).toBe(undefined);
});

test('it sould run http without preListen', async () => {
  const app: any = {
    config: {
      http: {},
      domain: 'test.com',
      port: 80,
    },
    callback: () => true,
  };
  (<any>http).createServer = x => {
    return {
      listen: x => {},
    };
  };
  const res = await setup(app);
  expect(res).toBe(undefined);
});
