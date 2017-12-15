[@ycs/core](../README.md) > ["db"](../modules/_db_.md) > [IModel](../interfaces/_db_.imodel.md)



# Interface: IModel


Ycs model

## Hierarchy


 `PaginateModel`.<`Document`>

**↳ IModel**








## Properties
<a id="model"></a>

###  Model

**●  Model**:  *`Model`.<`any`>* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/mongoose/index.d.ts:2313*





___

<a id="docschema"></a>

###  docSchema

**●  docSchema**:  *[DocSchema](../classes/_docs_.docschema.md)* 

*Defined in [db.ts:43](https://github.com/yc-server/core/blob/408b191/src/db.ts#L43)*





___

<a id="routes"></a>

###  routes

**●  routes**:  *`function`* 

*Defined in [db.ts:44](https://github.com/yc-server/core/blob/408b191/src/db.ts#L44)*


#### Type declaration
►(prefix: *`string`*, ...paths: *[IDocs](_docs_.idocs.md)[]*): [Router](../classes/_routers_.router.md)



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| prefix | `string`   |  - |
| paths | [IDocs](_docs_.idocs.md)[]   |  - |





**Returns:** [Router](../classes/_routers_.router.md)






___


## Methods
<a id="paginate"></a>

###  paginate

► **paginate**(query?: *`Object`*, options?: *`PaginateOptions`*, callback?: *`function`*): `Promise`.<`PaginateResult`.<`Document`>>



*Inherited from PaginateModel.paginate*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/mongoose-paginate/index.d.ts:31*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | `Object`   |  - |
| options | `PaginateOptions`   |  - |
| callback | `function`   |  - |





**Returns:** `Promise`.<`PaginateResult`.<`Document`>>





___


