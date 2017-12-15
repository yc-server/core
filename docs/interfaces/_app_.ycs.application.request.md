[@ycs/core](../README.md) > ["app"](../modules/_app_.md) > [Ycs](../classes/_app_.ycs.md) > [Application](../modules/_app_.ycs.application.md) > [Request](../interfaces/_app_.ycs.application.request.md)



# Interface: Request


## Properties
<a id="accept"></a>

###  accept

**●  accept**:  *`Accepts`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:633*





___

<a id="app"></a>

###  app

**●  app**:  *`Application`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:626*





___

<a id="charset"></a>

###  charset

**●  charset**:  *`string`* 

*Inherited from BaseRequest.charset*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:496*



Get the charset when present or undefined.




___

<a id="ctx"></a>

###  ctx

**●  ctx**:  *`Context`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:629*





___

<a id="ip"></a>

###  ip

**●  ip**:  *`string`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:632*





___

<a id="length"></a>

###  length

**●  length**:  *`number`* 

*Inherited from BaseRequest.length*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:501*



Return parsed Content-Length when present.




___

<a id="originalurl"></a>

###  originalUrl

**●  originalUrl**:  *`string`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:631*





___

<a id="req"></a>

###  req

**●  req**:  *`IncomingMessage`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:627*





___

<a id="res"></a>

###  res

**●  res**:  *`ServerResponse`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:628*





___

<a id="response"></a>

###  response

**●  response**:  *`Response`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:630*





___

<a id="type"></a>

###  type

**●  type**:  *`string`* 

*Inherited from BaseRequest.type*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:507*



Return the request mime type void of parameters such as "charset".




___


## Methods
<a id="inspect"></a>

###  inspect

► **inspect**(): `any`



*Inherited from BaseRequest.inspect*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:512*



Inspect implementation.




**Returns:** `any`





___

<a id="tojson"></a>

###  toJSON

► **toJSON**(): `any`



*Inherited from BaseRequest.toJSON*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:517*



Return JSON representation.




**Returns:** `any`





___


