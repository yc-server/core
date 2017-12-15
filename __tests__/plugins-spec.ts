import { setup } from '../src/plugins';

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
    dir: __dirname + '/plugins-spec',
    config: {
      root: __dirname + '/plugins-spec',
    },
  };
  const res = await setup(app, 'pre');
  expect(res).toBeFalsy();
});

test('it should setup a plugin failed', async () => {
  const app: any = {
    dir: __dirname + '/plugins-spec-fail',
    config: {
      root: __dirname + '/plugins-spec-fail',
    },
  };
  const res = await setup(app, 'pre');
  expect(res).toBeFalsy();
});
