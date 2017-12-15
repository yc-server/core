[@ycs/core](../README.md) > ["routers"](../modules/_routers_.md) > [Router](../classes/_routers_.router.md)



# Class: Router


Ycs Router

## Index

### Constructors

* [constructor](_routers_.router.md#constructor)


### Properties

* [___prefix](_routers_.router.md#___prefix)
* [___router](_routers_.router.md#___router)
* [docs](_routers_.router.md#docs)
* [model](_routers_.router.md#model)


### Methods

* [paths](_routers_.router.md#paths)
* [routes](_routers_.router.md#routes)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Router**(path: *`string`*): [Router](_routers_.router.md)


*Defined in [routers.ts:124](https://github.com/yc-server/core/blob/408b191/src/routers.ts#L124)*



Creating a router


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `string`   |  The router path |





**Returns:** [Router](_routers_.router.md)

---


## Properties
<a id="___prefix"></a>

### «Private» ___prefix

**●  ___prefix**:  *`string`* 

*Defined in [routers.ts:124](https://github.com/yc-server/core/blob/408b191/src/routers.ts#L124)*





___

<a id="___router"></a>

### «Private» ___router

**●  ___router**:  *`KRouter`* 

*Defined in [routers.ts:123](https://github.com/yc-server/core/blob/408b191/src/routers.ts#L123)*





___

<a id="docs"></a>

###  docs

**●  docs**:  *`any`* 

*Defined in [routers.ts:117](https://github.com/yc-server/core/blob/408b191/src/routers.ts#L117)*





___

<a id="model"></a>

###  model

**●  model**:  *[IModel](../interfaces/_db_.imodel.md)* 

*Defined in [routers.ts:122](https://github.com/yc-server/core/blob/408b191/src/routers.ts#L122)*



Ycs model




___


## Methods
<a id="paths"></a>

###  paths

► **paths**(...docs: *[IDocs](../interfaces/_docs_.idocs.md)[]*): [Router](_routers_.router.md)



*Defined in [routers.ts:141](https://github.com/yc-server/core/blob/408b191/src/routers.ts#L141)*



Generating routers and docs


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| docs | [IDocs](../interfaces/_docs_.idocs.md)[]   |  documents |





**Returns:** [Router](_routers_.router.md)





___

<a id="routes"></a>

###  routes

► **routes**(): `IMiddleware`



*Defined in [routers.ts:194](https://github.com/yc-server/core/blob/408b191/src/routers.ts#L194)*



The koa routes




**Returns:** `IMiddleware`





___


