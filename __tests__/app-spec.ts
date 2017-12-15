import { Ycs } from '../src/app';
import * as mr from 'mock-require';

jest.mock(`../src/auth.ts`, () => {
  return {
    setup: () => {
      console.log('setup auth called');
    },
  };
});
jest.mock(`../src/http.ts`, () => {
  return {
    setup: () => {
      console.log('setup http called');
    },
  };
});
jest.mock(`../src/spdy.ts`, () => {
  return {
    setup: () => {
      console.log('setup spdy called');
    },
  };
});
jest.mock(`../src/socket.ts`, () => {
  return {
    setup: () => {
      console.log('setup socket called');
    },
  };
});
jest.mock(`../src/mongodb.ts`, () => {
  return {
    setup: () => {
      console.log('setup mongodb called');
    },
  };
});
jest.mock(`../src/plugins.ts`, () => {
  return {
    setup: () => {
      console.log('setup plugins called');
    },
  };
});
jest.mock(`../src/routers.ts`, () => {
  return {
    setup: () => {
      console.log('setup routers called');
    },
  };
});

jest.mock('koa-better-body', () => x => {
  const g = x.handler(
    {
      request: {
        text: (x: any) => '',
      },
    },
    {
      textLimit: 100,
    }
  );
  console.log(g.next());
  console.log(g.next('<a></a>'));
  return function*(next) {
    yield next;
  };
});

describe('Test class Ycs', () => {
  const app = Ycs.create('here', { cors: { ok: 'ok' } });

  it('shold be created', () => {
    expect(app).toBeTruthy();
    expect(Ycs.instance).toBe(app);
    expect(app.config).toMatchObject({});
    expect(app.dir).toBe('here');
  });

  it('shold started', () => {
    app.start();
  });
  it('shold started without cors', () => {
    app.config.cors = false;
    app.start();
  });
});
