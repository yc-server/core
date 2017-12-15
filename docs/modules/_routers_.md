[@ycs/core](../README.md) > ["routers"](../modules/_routers_.md)



# External module: "routers"

## Index

### Classes

* [Router](../classes/_routers_.router.md)


### Variables

* [SimpleAuthRouter](_routers_.md#simpleauthrouter)


### Functions

* [setup](_routers_.md#setup)



---
## Variables
<a id="simpleauthrouter"></a>

###  SimpleAuthRouter

**●  SimpleAuthRouter**:  *[Router](../classes/_routers_.router.md)*  =  new Router('/auth/simple').paths(
  {
    path: '/signin',
    methods: ['post'],
    controller: async (ctx: IContext) => {
      try {
        const auth: any = await AuthModel.findOne({
          username: ctx.request.fields.username,
        }).exec();
        if (!auth)
          throw boom.forbidden(
            Ycs.instance.config.auth.messages.errors.username_not_registered
          );
        if (!await auth.authenticate(ctx.request.fields.password))
          throw boom.forbidden(
            Ycs.instance.config.auth.messages.errors.invalid_password
          );
        const token = signToken(auth, {
          expiresIn: Ycs.instance.config.auth.expiresIn || '1h',
        });
        response(ctx, 200, { token });
      } catch (e) {
        handleError(ctx, e);
      }
    },
    tags: ['Auth'],
    summary: 'Sign in',
    description: 'Sign in with username and password',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [
      {
        in: 'body',
        name: 'body',
        required: true,
        schema: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
            },
            password: {
              type: 'string',
              format: 'password',
            },
          },
          xml: {
            name: 'xml',
          },
        },
      },
    ],
    responses: {
      200: {
        description: 'Successful operation',
        schema: {
          type: 'object',
          properties: {
            token: {
              type: 'string',
            },
          },
          xml: {
            name: 'xml',
          },
        },
      },
      403: {
        description: 'Failed',
      },
    },
  },
  {
    path: '/signup',
    methods: ['post'],
    controller: async (ctx: IContext) => {
      try {
        const auth = await AuthModel.create({
          username: ctx.request.fields.username,
          password: ctx.request.fields.password,
        });
        const token = signToken(auth, { expiresIn: '1h' });
        response(ctx, 200, { token });
      } catch (e) {
        handleError(ctx, e);
      }
    },
    tags: ['Auth'],
    summary: 'Sign in',
    description: 'Sign in with username and password',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [
      {
        in: 'body',
        name: 'body',
        required: true,
        schema: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
            },
            password: {
              type: 'string',
              format: 'password',
            },
          },
          xml: {
            name: 'xml',
          },
        },
      },
    ],
    responses: {
      201: {
        description: 'Successful operation',
        schema: {
          type: 'object',
          properties: {
            token: {
              type: 'string',
            },
          },
          xml: {
            name: 'xml',
          },
        },
      },
      403: {
        description: 'Failed',
      },
    },
  },
  {
    path: '/reset',
    methods: ['post'],
    controller: async (ctx: IContext) => {
      try {
        const auth: any = await AuthModel.findOne({
          username: ctx.request.fields.username,
        }).exec();
        if (!auth)
          throw boom.forbidden(
            Ycs.instance.config.auth.messages.errors.username_not_registered
          );
        if (!await auth.authenticate(ctx.request.fields.oldPassword))
          throw boom.forbidden(
            Ycs.instance.config.auth.messages.errors.invalid_password
          );
        auth['password'] = String(ctx.request.fields.newPassword);
        await auth.save();
        response(ctx, 204);
      } catch (e) {
        handleError(ctx, e);
      }
    },
    tags: ['Auth'],
    summary: 'Reset password',
    description: 'Reset password',
    consumes: ['application/json', 'application/xml'],
    produces: ['text/plain'],
    parameters: [
      {
        in: 'body',
        name: 'body',
        required: true,
        schema: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
            },
            oldPassword: {
              type: 'string',
              format: 'password',
            },
            newPassword: {
              type: 'string',
              format: 'password',
            },
          },
          xml: {
            name: 'xml',
          },
        },
      },
    ],
    responses: {
      204: {
        description: 'Successful operation',
      },
      403: {
        description: 'Failed',
      },
    },
  }
)

*Defined in [routers.ts:199](https://github.com/yc-server/core/blob/408b191/src/routers.ts#L199)*





___


## Functions
<a id="setup"></a>

###  setup

► **setup**(app: *[Ycs](../classes/_app_.ycs.md)*): `Promise`.<`void`>



*Defined in [routers.ts:27](https://github.com/yc-server/core/blob/408b191/src/routers.ts#L27)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| app | [Ycs](../classes/_app_.ycs.md)   |  - |





**Returns:** `Promise`.<`void`>





___


