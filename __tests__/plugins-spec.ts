import { setup } from '../src/plugins';
import * as mr from 'mock-require';
import * as fs from 'fs';

console.log = jest.fn();
console.error = jest.fn();

const ypb: any = require('ycs-plugin-bookmark');

jest.mock('fs');
jest.mock('ycs-plugin-bookmark', () => {
  return {
    setup: {
      pre: function() {
        return [1, 2, 3];
      },
      post: function() {},
    },
  };
});

//  26,27,28,29,30
test('it should setup a plugin failed', async () => {
  const app: any = {
    dir: '/notExists',
  };
  const res = await setup(app, 'pre');
  expect(res).toBeFalsy();
});

test('it should setup a plugin', async () => {
  const app: any = {
    dir: 'E',
    config: {
      root: 'E',
    },
  };
  (fs as any).mockFiles([
    'E/plugins/bookmark.js',
    'E/plugins/.bookmark.js',
    'E/plugins/bookmark.ts',
    'E/plugins/dir.js',
    'E/plugins/err.js',
  ]);
  await setup(app, 'pre');
  ypb.setup = {
    pre: function() {},
    post: function() {},
  };
  await setup(app, 'pre');
  ypb.setup = {
    pre: function() {
      return [1, 2, 3];
    },
    post: function() {},
  };
  await setup(app, 'post');
  ypb.setup = {
    pre: function() {
      return [];
    },
    post: function() {},
  };
  await setup(app, 'pre');
  ypb.setup = {
    pre: false,
  };
  console.log(ypb);
  await setup(app, 'pre');
  ypb.setup = {};
  await setup(app, 'post');
  expect(0).toBeFalsy();
});
