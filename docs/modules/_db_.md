[@ycs/core](../README.md) > ["db"](../modules/_db_.md)



# External module: "db"

## Index

### Interfaces

* [IModel](../interfaces/_db_.imodel.md)
* [IModelOptions](../interfaces/_db_.imodeloptions.md)


### Variables

* [Mongoose](_db_.md#mongoose)
* [Schema](_db_.md#schema)


### Functions

* [Model](_db_.md#model)
* [paginate](_db_.md#paginate)
* [patchUpdates](_db_.md#patchupdates)
* [show](_db_.md#show)



---
## Variables
<a id="mongoose"></a>

###  Mongoose

**●  Mongoose**:  *`&quot;mongoose&quot;`*  =  mongoose

*Defined in [db.ts:84](https://github.com/yc-server/core/blob/408b191/src/db.ts#L84)*



Ref to mongoose




___

<a id="schema"></a>

###  Schema

**●  Schema**:  *`Schema`*  =  mongoose.Schema

*Defined in [db.ts:79](https://github.com/yc-server/core/blob/408b191/src/db.ts#L79)*



Ref to mongoose.Schema




___


## Functions
<a id="model"></a>

###  Model

► **Model**(options: *[IModelOptions](../interfaces/_db_.imodeloptions.md)*): [IModel](../interfaces/_db_.imodel.md)



*Defined in [db.ts:51](https://github.com/yc-server/core/blob/408b191/src/db.ts#L51)*



Creating a Ycs model


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | [IModelOptions](../interfaces/_db_.imodeloptions.md)   |  Model options |





**Returns:** [IModel](../interfaces/_db_.imodel.md)





___

<a id="paginate"></a>

###  paginate

► **paginate**(model: *`mongoose.PaginateModel`.<`Document`>*, ctx: *[IContext](../interfaces/_context_.icontext.md)*, filters?: *`object`*, options?: *`mongoose.PaginateOptions`*): `Promise`.<`mongoose.PaginateResult`.<`Document`>>



*Defined in [db.ts:93](https://github.com/yc-server/core/blob/408b191/src/db.ts#L93)*



Paginating docs


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| model | `mongoose.PaginateModel`.<`Document`>   |  Ysc model or mongoose PaginateModel |
| ctx | [IContext](../interfaces/_context_.icontext.md)   |  Ycs context |
| filters | `object`   |  Custom filters |
| options | `mongoose.PaginateOptions`   |  Custom options. See [https://github.com/edwardhotchkiss/mongoose-paginate](https://github.com/edwardhotchkiss/mongoose-paginate) |





**Returns:** `Promise`.<`mongoose.PaginateResult`.<`Document`>>





___

<a id="patchupdates"></a>

###  patchUpdates

► **patchUpdates**(entity: *`Document`*, updates: *`any`*): `Document`



*Defined in [db.ts:169](https://github.com/yc-server/core/blob/408b191/src/db.ts#L169)*



Modifying an entity


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| entity | `Document`   |  The old entity |
| updates | `any`   |  Fields to change |





**Returns:** `Document`





___

<a id="show"></a>

###  show

► **show**(model: *`mongoose.PaginateModel`.<`Document`>*, ctx: *[IContext](../interfaces/_context_.icontext.md)*, options?: *`mongoose.PaginateOptions`*): `Promise`.<`Document`>



*Defined in [db.ts:137](https://github.com/yc-server/core/blob/408b191/src/db.ts#L137)*



Showing a doc with an id form ctx.params.id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| model | `mongoose.PaginateModel`.<`Document`>   |  Ysc model or mongoose PaginateModel |
| ctx | [IContext](../interfaces/_context_.icontext.md)   |  Ycs context |
| options | `mongoose.PaginateOptions`   |  Custom options. Only select and populate making effects. |





**Returns:** `Promise`.<`Document`>





___


