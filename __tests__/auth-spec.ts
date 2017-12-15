import { Ycs } from '../src/app';
import * as auth from '../src/auth';

describe('AuthModel', () => {
  beforeAll(() => {
    const app = Ycs.create('hi', {
      auth: {
        messages: {
          errors: {
            empty_username: 'Username cannot be blank',
            empty_password: 'Password cannot be blank',
            username_already_in_use:
              'The specified username is already in use.',
            username_not_registered: '该用户名未注册成为管理员.',
            invalid_password: 'Invalid password',
            unauthorized: 'Unauthorized',
            invalid_token: 'Invalid token',
            no_permission: 'No permission to access',
          },
        },
        secret: 'This is a secret',
        enableSimpleAuth: true,
        defaultRoles: ['user', 'admin', 'super'],
      },
    });
    auth.setup(app);
  });

  it('should create AuthModel', async () => {
    expect(auth.AuthModel).toBeTruthy();
  });

  it('should get token', () => {
    expect(
      auth.getHeaderToken({ headers: { authorization: 'xxx' } } as any)
    ).toBe(null);
    expect(auth.getHeaderToken({ headers: {} } as any)).toBe(null);
    expect(
      auth.getHeaderToken({ headers: { authorization: 'Bearer xxx' } } as any)
    ).toBe('xxx');
  });

  it('should sign token', async () => {
    const doc = { _id: 1 };
    const signed = auth.signToken(doc as any, {});
    const verified = await auth.verifyToken(signed);
    expect(signed).toMatch(/^eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9/);
    expect(verified).toMatchObject(doc);
  });
});
