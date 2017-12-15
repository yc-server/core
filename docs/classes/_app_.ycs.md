[@ycs/core](../README.md) > ["app"](../modules/_app_.md) > [Ycs](../classes/_app_.ycs.md)



# Class: Ycs


The application class

    const app = Ycs.create(dirname, config);
    app.start();

## Hierarchy


 `Application`

**↳ Ycs**







## Index

### Modules

* ["koa"](../modules/_app_.ycs._koa_.md)
* [Application](../modules/_app_.ycs.application.md)


### Properties

* [___config](_app_.ycs.md#___config)
* [___dirname](_app_.ycs.md#___dirname)
* [context](_app_.ycs.md#context)
* [env](_app_.ycs.md#env)
* [keys](_app_.ycs.md#keys)
* [middleware](_app_.ycs.md#middleware)
* [proxy](_app_.ycs.md#proxy)
* [request](_app_.ycs.md#request)
* [response](_app_.ycs.md#response)
* [silent](_app_.ycs.md#silent)
* [subdomainOffset](_app_.ycs.md#subdomainoffset)
* [___instance](_app_.ycs.md#___instance)
* [defaultMaxListeners](_app_.ycs.md#defaultmaxlisteners)


### Accessors

* [config](_app_.ycs.md#config)
* [dir](_app_.ycs.md#dir)
* [instance](_app_.ycs.md#instance)


### Methods

* [addListener](_app_.ycs.md#addlistener)
* [callback](_app_.ycs.md#callback)
* [createContext](_app_.ycs.md#createcontext)
* [emit](_app_.ycs.md#emit)
* [eventNames](_app_.ycs.md#eventnames)
* [getMaxListeners](_app_.ycs.md#getmaxlisteners)
* [inspect](_app_.ycs.md#inspect)
* [listen](_app_.ycs.md#listen)
* [listenerCount](_app_.ycs.md#listenercount)
* [listeners](_app_.ycs.md#listeners)
* [on](_app_.ycs.md#on)
* [once](_app_.ycs.md#once)
* [onerror](_app_.ycs.md#onerror)
* [prependListener](_app_.ycs.md#prependlistener)
* [prependOnceListener](_app_.ycs.md#prependoncelistener)
* [removeAllListeners](_app_.ycs.md#removealllisteners)
* [removeListener](_app_.ycs.md#removelistener)
* [setMaxListeners](_app_.ycs.md#setmaxlisteners)
* [start](_app_.ycs.md#start)
* [toJSON](_app_.ycs.md#tojson)
* [use](_app_.ycs.md#use)
* [create](_app_.ycs.md#create)
* [listenerCount](_app_.ycs.md#listenercount-1)



---

## Properties
<a id="___config"></a>

### «Private» ___config

**●  ___config**:  *`object`* 

*Defined in [app.ts:41](https://github.com/yc-server/core/blob/408b191/src/app.ts#L41)*


#### Type declaration


[x: `string`]: `any`






___

<a id="___dirname"></a>

### «Private» ___dirname

**●  ___dirname**:  *`string`* 

*Defined in [app.ts:42](https://github.com/yc-server/core/blob/408b191/src/app.ts#L42)*





___

<a id="context"></a>

###  context

**●  context**:  *`BaseContext`* 

*Inherited from Application.context*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:424*





___

<a id="env"></a>

###  env

**●  env**:  *`string`* 

*Inherited from Application.env*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:423*





___

<a id="keys"></a>

###  keys

**●  keys**:  *`Keygrip`⎮`string`[]* 

*Inherited from Application.keys*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:428*





___

<a id="middleware"></a>

###  middleware

**●  middleware**:  *[Middleware](../modules/_app_.ycs.application.md#middleware)[]* 

*Inherited from Application.middleware*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:421*





___

<a id="proxy"></a>

###  proxy

**●  proxy**:  *`boolean`* 

*Inherited from Application.proxy*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:420*





___

<a id="request"></a>

###  request

**●  request**:  *`BaseRequest`* 

*Inherited from Application.request*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:425*





___

<a id="response"></a>

###  response

**●  response**:  *`BaseResponse`* 

*Inherited from Application.response*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:426*





___

<a id="silent"></a>

###  silent

**●  silent**:  *`boolean`* 

*Inherited from Application.silent*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:427*





___

<a id="subdomainoffset"></a>

###  subdomainOffset

**●  subdomainOffset**:  *`number`* 

*Inherited from Application.subdomainOffset*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:422*





___

<a id="___instance"></a>

### «Static»«Private» ___instance

**●  ___instance**:  *[Ycs](_app_.ycs.md)* 

*Defined in [app.ts:39](https://github.com/yc-server/core/blob/408b191/src/app.ts#L39)*





___

<a id="defaultmaxlisteners"></a>

### «Static» defaultMaxListeners

**●  defaultMaxListeners**:  *`number`* 

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:752*





___


## Accessors
<a id="config"></a>

###  config


getconfig(): `object`

*Defined in [app.ts:60](https://github.com/yc-server/core/blob/408b191/src/app.ts#L60)*



The app configurations




**Returns:** `object`



___

<a id="dir"></a>

###  dir


getdir(): `string`

*Defined in [app.ts:67](https://github.com/yc-server/core/blob/408b191/src/app.ts#L67)*



Thie app base dir




**Returns:** `string`



___

<a id="instance"></a>

### «Static» instance


getinstance(): [Ycs](_app_.ycs.md)

*Defined in [app.ts:53](https://github.com/yc-server/core/blob/408b191/src/app.ts#L53)*



The singleton instance.




**Returns:** [Ycs](_app_.ycs.md)



___


## Methods
<a id="addlistener"></a>

###  addListener

► **addListener**(event: *`string`⎮`symbol`*, listener: *`function`*): `this`



*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:754*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`⎮`symbol`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___

<a id="callback"></a>

###  callback

► **callback**(): `function`



*Inherited from Application.callback*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:472*



Return a request handler callback for node's native http server.




**Returns:** `function`





___

<a id="createcontext"></a>

###  createContext

► **createContext**(req: *`IncomingMessage`*, res: *`ServerResponse`*): `Context`



*Inherited from Application.createContext*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:479*



Initialize a new context.
*__api__*: private



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| req | `IncomingMessage`   |  - |
| res | `ServerResponse`   |  - |





**Returns:** `Context`





___

<a id="emit"></a>

###  emit

► **emit**(event: *`string`⎮`symbol`*, ...args: *`any`[]*): `boolean`



*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:764*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`⎮`symbol`   |  - |
| args | `any`[]   |  - |





**Returns:** `boolean`





___

<a id="eventnames"></a>

###  eventNames

► **eventNames**(): `Array`.<`string`⎮`symbol`>



*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:765*





**Returns:** `Array`.<`string`⎮`symbol`>





___

<a id="getmaxlisteners"></a>

###  getMaxListeners

► **getMaxListeners**(): `number`



*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:762*





**Returns:** `number`





___

<a id="inspect"></a>

###  inspect

► **inspect**(): `any`



*Inherited from Application.inspect*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:453*



Return JSON representation. We only bother showing settings.




**Returns:** `any`





___

<a id="listen"></a>

###  listen

► **listen**(port?: *`number`*, hostname?: *`string`*, backlog?: *`number`*, listeningListener?: *`function`*): `Server`

► **listen**(port: *`number`*, hostname?: *`string`*, listeningListener?: *`function`*): `Server`

► **listen**(port: *`number`*, backlog?: *`number`*, listeningListener?: *`function`*): `Server`

► **listen**(port: *`number`*, listeningListener?: *`function`*): `Server`

► **listen**(path: *`string`*, backlog?: *`number`*, listeningListener?: *`function`*): `Server`

► **listen**(path: *`string`*, listeningListener?: *`function`*): `Server`

► **listen**(options: *`ListenOptions`*, listeningListener?: *`function`*): `Server`

► **listen**(handle: *`any`*, backlog?: *`number`*, listeningListener?: *`function`*): `Server`

► **listen**(handle: *`any`*, listeningListener?: *`function`*): `Server`



*Inherited from Application.listen*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:437*



Shorthand for:

http.createServer(app.callback()).listen(...)


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| port | `number`   |  - |
| hostname | `string`   |  - |
| backlog | `number`   |  - |
| listeningListener | `function`   |  - |





**Returns:** `Server`



*Inherited from Application.listen*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:438*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| port | `number`   |  - |
| hostname | `string`   |  - |
| listeningListener | `function`   |  - |





**Returns:** `Server`



*Inherited from Application.listen*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:440*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| port | `number`   |  - |
| backlog | `number`   |  - |
| listeningListener | `function`   |  - |





**Returns:** `Server`



*Inherited from Application.listen*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:441*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| port | `number`   |  - |
| listeningListener | `function`   |  - |





**Returns:** `Server`



*Inherited from Application.listen*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:442*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `string`   |  - |
| backlog | `number`   |  - |
| listeningListener | `function`   |  - |





**Returns:** `Server`



*Inherited from Application.listen*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:443*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `string`   |  - |
| listeningListener | `function`   |  - |





**Returns:** `Server`



*Inherited from Application.listen*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:444*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `ListenOptions`   |  - |
| listeningListener | `function`   |  - |





**Returns:** `Server`



*Inherited from Application.listen*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:445*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| handle | `any`   |  - |
| backlog | `number`   |  - |
| listeningListener | `function`   |  - |





**Returns:** `Server`



*Inherited from Application.listen*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:446*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| handle | `any`   |  - |
| listeningListener | `function`   |  - |





**Returns:** `Server`





___

<a id="listenercount"></a>

###  listenerCount

► **listenerCount**(type: *`string`⎮`symbol`*): `number`



*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:766*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `string`⎮`symbol`   |  - |





**Returns:** `number`





___

<a id="listeners"></a>

###  listeners

► **listeners**(event: *`string`⎮`symbol`*): `Function`[]



*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:763*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`⎮`symbol`   |  - |





**Returns:** `Function`[]





___

<a id="on"></a>

###  on

► **on**(event: *`string`⎮`symbol`*, listener: *`function`*): `this`



*Inherited from EventEmitter.on*

*Overrides EventEmitter.on*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:755*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`⎮`symbol`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___

<a id="once"></a>

###  once

► **once**(event: *`string`⎮`symbol`*, listener: *`function`*): `this`



*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:756*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`⎮`symbol`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___

<a id="onerror"></a>

###  onerror

► **onerror**(err: *`Error`*): `void`



*Inherited from Application.onerror*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:486*



Default error handler.
*__api__*: private



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| err | `Error`   |  - |





**Returns:** `void`





___

<a id="prependlistener"></a>

###  prependListener

► **prependListener**(event: *`string`⎮`symbol`*, listener: *`function`*): `this`



*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:757*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`⎮`symbol`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___

<a id="prependoncelistener"></a>

###  prependOnceListener

► **prependOnceListener**(event: *`string`⎮`symbol`*, listener: *`function`*): `this`



*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:758*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`⎮`symbol`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___

<a id="removealllisteners"></a>

###  removeAllListeners

► **removeAllListeners**(event?: *`string`⎮`symbol`*): `this`



*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:760*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`⎮`symbol`   |  - |





**Returns:** `this`





___

<a id="removelistener"></a>

###  removeListener

► **removeListener**(event: *`string`⎮`symbol`*, listener: *`function`*): `this`



*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:759*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`⎮`symbol`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___

<a id="setmaxlisteners"></a>

###  setMaxListeners

► **setMaxListeners**(n: *`number`*): `this`



*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:761*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| n | `number`   |  - |





**Returns:** `this`





___

<a id="start"></a>

###  start

► **start**(): `Promise`.<`void`>



*Defined in [app.ts:74](https://github.com/yc-server/core/blob/408b191/src/app.ts#L74)*



Starting webserver




**Returns:** `Promise`.<`void`>





___

<a id="tojson"></a>

###  toJSON

► **toJSON**(): `any`



*Inherited from Application.toJSON*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:459*



Return JSON representation. We only bother showing settings.




**Returns:** `any`





___

<a id="use"></a>

###  use

► **use**(middleware: *[Middleware](../modules/_app_.ycs.application.md#middleware)*): `this`



*Inherited from Application.use*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:466*



Use the given middleware `fn`.

Old-style middleware will be converted.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| middleware | [Middleware](../modules/_app_.ycs.application.md#middleware)   |  - |





**Returns:** `this`





___

<a id="create"></a>

### «Static» create

► **create**(dirname: *`string`*, config: *`object`*): [Ycs](_app_.ycs.md)



*Defined in [app.ts:34](https://github.com/yc-server/core/blob/408b191/src/app.ts#L34)*



Creating a Ycs application


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| dirname | `string`   |  App base dir |
| config | `object`   |  App configurations |





**Returns:** [Ycs](_app_.ycs.md)





___

<a id="listenercount-1"></a>

### «Static» listenerCount

► **listenerCount**(emitter: *`EventEmitter`*, event: *`string`⎮`symbol`*): `number`



*Inherited from EventEmitter.listenerCount*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/node/index.d.ts:751*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| emitter | `EventEmitter`   |  - |
| event | `string`⎮`symbol`   |  - |





**Returns:** `number`





___


