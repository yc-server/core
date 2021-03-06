[@ycs/core](../README.md) > ["app"](../modules/_app_.md) > [Ycs](../classes/_app_.ycs.md) > [Application](../modules/_app_.ycs.application.md) > [BaseContext](../interfaces/_app_.ycs.application.basecontext.md)



# Interface: BaseContext


## Properties
<a id="assert"></a>

###  assert

**●  assert**:  *`assert`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:599*



Similar to .throw(), adds assertion.

this.assert(this.user, 401, 'Please login!');

See: [https://github.com/jshttp/http-assert](https://github.com/jshttp/http-assert)




___


## Methods
<a id="inspect"></a>

###  inspect

► **inspect**(): `any`



*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:580*



util.inspect() implementation, which just returns the JSON output.




**Returns:** `any`





___

<a id="onerror"></a>

###  onerror

► **onerror**(err: *`Error`*): `void`



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



*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:616*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| status | `number`   |  - |





**Returns:** `never`



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



*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:590*



Return JSON representation.

Here we explicitly invoke .toJSON() on each object, as iteration will otherwise fail due to the getters and cause utilities such as clone() to fail.




**Returns:** `any`





___


