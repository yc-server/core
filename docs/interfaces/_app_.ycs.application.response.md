[@ycs/core](../README.md) > ["app"](../modules/_app_.md) > [Ycs](../classes/_app_.ycs.md) > [Application](../modules/_app_.ycs.application.md) > [Response](../interfaces/_app_.ycs.application.response.md)



# Interface: Response


## Properties
<a id="app"></a>

###  app

**●  app**:  *`Application`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:637*





___

<a id="ctx"></a>

###  ctx

**●  ctx**:  *`Context`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:640*





___

<a id="header"></a>

###  header

**●  header**:  *`any`* 

*Inherited from BaseResponse.header*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:532*



Return response header.




___

<a id="headers"></a>

###  headers

**●  headers**:  *`any`* 

*Inherited from BaseResponse.headers*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:537*



Return response header, alias as response.header




___

<a id="req"></a>

###  req

**●  req**:  *`IncomingMessage`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:638*





___

<a id="request"></a>

###  request

**●  request**:  *`Request`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:641*





___

<a id="res"></a>

###  res

**●  res**:  *`ServerResponse`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:639*





___

<a id="socket"></a>

###  socket

**●  socket**:  *`Socket`* 

*Inherited from BaseResponse.socket*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:527*



Return the request socket.
*__returns__*: 

*__api__*: public





___


## Methods
<a id="get"></a>

###  get

► **get**(field: *`string`*): `string`



*Inherited from BaseResponse.get*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:562*



Return response header.

Examples:

    this.get('Content-Type');
    // => "text/plain"

    this.get('content-type');
    // => "text/plain"


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | `string`   |  - |





**Returns:** `string`





___

<a id="inspect"></a>

###  inspect

► **inspect**(): `any`



*Inherited from BaseResponse.inspect*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:567*



Inspect implementation.




**Returns:** `any`





___

<a id="is"></a>

###  is

► **is**(...types: *`string`[]*): `string`

► **is**(types: *`string`[]*): `string`



*Inherited from BaseResponse.is*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:548*



Check whether the response is one of the listed types. Pretty much the same as `this.request.is()`.
*__api__*: public



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| types | `string`[]   |  - |





**Returns:** `string`



*Inherited from BaseResponse.is*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:549*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| types | `string`[]   |  - |





**Returns:** `string`





___

<a id="tojson"></a>

###  toJSON

► **toJSON**(): `any`



*Inherited from BaseResponse.toJSON*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:572*



Return JSON representation.




**Returns:** `any`





___


