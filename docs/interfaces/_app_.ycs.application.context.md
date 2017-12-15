[@ycs/core](../README.md) > ["app"](../modules/_app_.md) > [Ycs](../classes/_app_.ycs.md) > [Application](../modules/_app_.ycs.application.md) > [Context](../interfaces/_app_.ycs.application.context.md)



# Interface: Context


## Properties
<a id="accept"></a>

###  accept

**●  accept**:  *`Accepts`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:652*





___

<a id="app"></a>

###  app

**●  app**:  *`Application`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:645*





___

<a id="assert"></a>

###  assert

**●  assert**:  *`assert`* 

*Inherited from BaseContext.assert*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:599*



Similar to .throw(), adds assertion.

this.assert(this.user, 401, 'Please login!');

See: [https://github.com/jshttp/http-assert](https://github.com/jshttp/http-assert)




___

<a id="cookies"></a>

###  cookies

**●  cookies**:  *`Cookies`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:651*





___

<a id="originalurl"></a>

###  originalUrl

**●  originalUrl**:  *`string`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:650*





___

<a id="req"></a>

###  req

**●  req**:  *`IncomingMessage`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:648*





___

<a id="request"></a>

###  request

**●  request**:  *`Request`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:646*





___

<a id="res"></a>

###  res

**●  res**:  *`ServerResponse`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:649*





___

<a id="respond"></a>

### «Optional» respond

**●  respond**:  *`boolean`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:657*



To bypass Koa's built-in response handling, you may explicitly set `ctx.respond = false;`




___

<a id="response"></a>

###  response

**●  response**:  *`Response`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:647*





___

<a id="state"></a>

###  state

**●  state**:  *`any`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:653*





___


## Methods
<a id="inspect"></a>

###  inspect

► **inspect**(): `any`



*Inherited from BaseContext.inspect*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:580*



util.inspect() implementation, which just returns the JSON output.




**Returns:** `any`





___

<a id="onerror"></a>

###  onerror

► **onerror**(err: *`Error`*): `void`



*Inherited from BaseContext.onerror*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:622*



Default error handling.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| err | `Error`   |  - |





**Returns:** `void`





___

<a id="throw"></a>

###  throw

► **throw**(message: *`string`*, code?: *`number`*, properties?: *`__type`*): `never`

► **throw**(status: *`number`*): `never`

► **throw**(...properties: *`Array`.<`number`⎮`string`⎮`__type`>*): `never`



*Inherited from BaseContext.throw*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:615*



Throw an error with `msg` and optional `status` defaulting to 500\. Note that these are user-level errors, and the message may be exposed to the client.

this.throw(403) this.throw('name required', 400) this.throw(400, 'name required') this.throw('something exploded') this.throw(new Error('invalid'), 400); this.throw(400, new Error('invalid'));

See: [https://github.com/jshttp/http-errors](https://github.com/jshttp/http-errors)


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  - |
| code | `number`   |  - |
| properties | `__type`   |  - |





**Returns:** `never`



*Inherited from BaseContext.throw*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:616*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| status | `number`   |  - |





**Returns:** `never`



*Inherited from BaseContext.throw*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:617*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| properties | `Array`.<`number`⎮`string`⎮`__type`>   |  - |





**Returns:** `never`





___

<a id="tojson"></a>

###  toJSON

► **toJSON**(): `any`



*Inherited from BaseContext.toJSON*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:590*



Return JSON representation.

Here we explicitly invoke .toJSON() on each object, as iteration will otherwise fail due to the getters and cause utilities such as clone() to fail.




**Returns:** `any`





___


