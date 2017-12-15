[@ycs/core](../README.md) > ["docs"](../modules/_docs_.md)



# External module: "docs"

## Index

### Classes

* [DocSchema](../classes/_docs_.docschema.md)


### Interfaces

* [IConfig](../interfaces/_docs_.iconfig.md)
* [IDocs](../interfaces/_docs_.idocs.md)
* [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)
* [IDocsDataTypeProperties](../interfaces/_docs_.idocsdatatypeproperties.md)
* [IDocsParameter](../interfaces/_docs_.idocsparameter.md)
* [IResultOptions](../interfaces/_docs_.iresultoptions.md)


### Type aliases

* [IDocsAccept](_docs_.md#idocsaccept)
* [IDocsDataFormat](_docs_.md#idocsdataformat)
* [IDocsDataType](_docs_.md#idocsdatatype)


### Functions

* [model2Schema](_docs_.md#model2schema)


### Object literals

* [PAGINATE_OPTIONS](_docs_.md#paginate_options)
* [PAGINATE_RESULT](_docs_.md#paginate_result)
* [PARAM_ID](_docs_.md#param_id)
* [RESPONSE_4XX](_docs_.md#response_4xx)
* [RESPONSE_5XX](_docs_.md#response_5xx)
* [SHOW_OPTIONS](_docs_.md#show_options)



---
## Type aliases
<a id="idocsaccept"></a>

###  IDocsAccept

**Τ IDocsAccept**:  *"application/xml"⎮"application/json"⎮"text/plain"⎮"multipart/form-data"* 

*Defined in [docs.ts:194](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L194)*



Content-Types




___

<a id="idocsdataformat"></a>

###  IDocsDataFormat

**Τ IDocsDataFormat**:  *"int32"⎮"int64"⎮"float"⎮"double"⎮"binary"⎮"date"⎮"date-time"⎮"password"* 

*Defined in [docs.ts:217](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L217)*



Swagger ui data formats [https://swagger.io/specification/#dataTypes](https://swagger.io/specification/#dataTypes)




___

<a id="idocsdatatype"></a>

###  IDocsDataType

**Τ IDocsDataType**:  *"integer"⎮"number"⎮"string"⎮"boolean"⎮"file"⎮"array"⎮"object"* 

*Defined in [docs.ts:204](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L204)*



Swagger ui data types [https://swagger.io/specification/#dataTypes](https://swagger.io/specification/#dataTypes)




___


## Functions
<a id="model2schema"></a>

###  model2Schema

► **model2Schema**(model: *`mongoose.PaginateModel`.<`Document`>*): [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)



*Defined in [docs.ts:357](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L357)*



Convert mongoose paginate model to Swagger ui schema


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| model | `mongoose.PaginateModel`.<`Document`>   |  Ycs model |





**Returns:** [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)





___


<a id="paginate_options"></a>

## Object literal: PAGINATE_OPTIONS


<a id="paginate_options.description"></a>

###  description

**●  description**:  *`string`*  =  `More info at [https://www.npmjs.com/package/mongoose-paginate](https://www.npmjs.com/package/mongoose-paginate)
  <br />

    {
      "lean": Boolean,
      "leanWithId": Boolean,
      "limit": Number,
      "offset": Number,
      "page": Number,
      "populate": String,
      "select": String,
      "sort": String
    }
    `

*Defined in [docs.ts:364](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L364)*





___
<a id="paginate_options.in"></a>

###  in

**●  in**:  *`string`*  = "query"

*Defined in [docs.ts:378](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L378)*





___
<a id="paginate_options.name"></a>

###  name

**●  name**:  *`string`*  = "_options"

*Defined in [docs.ts:379](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L379)*





___

<a id="paginate_result"></a>

## Object literal: PAGINATE_RESULT


<a id="paginate_result.type"></a>

###  type

**●  type**:  *`string`*  = "object"

*Defined in [docs.ts:406](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L406)*





___
<a id="paginate_result.properties"></a>

###  properties

** properties**:  *`object`* 

*Defined in [docs.ts:383](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L383)*




<a id="paginate_result.properties.limit"></a>

###  limit

** limit**:  *`object`* 

*Defined in [docs.ts:384](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L384)*




<a id="paginate_result.properties.limit.type-1"></a>

###  type

**●  type**:  *`string`*  = "number"

*Defined in [docs.ts:385](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L385)*





___

___
<a id="paginate_result.properties.next"></a>

###  next

** next**:  *`object`* 

*Defined in [docs.ts:387](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L387)*




<a id="paginate_result.properties.next.type-2"></a>

###  type

**●  type**:  *`string`*  = "number"

*Defined in [docs.ts:388](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L388)*





___

___
<a id="paginate_result.properties.offset"></a>

###  offset

** offset**:  *`object`* 

*Defined in [docs.ts:390](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L390)*




<a id="paginate_result.properties.offset.type-3"></a>

###  type

**●  type**:  *`string`*  = "number"

*Defined in [docs.ts:391](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L391)*





___

___
<a id="paginate_result.properties.page"></a>

###  page

** page**:  *`object`* 

*Defined in [docs.ts:393](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L393)*




<a id="paginate_result.properties.page.type-4"></a>

###  type

**●  type**:  *`string`*  = "number"

*Defined in [docs.ts:394](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L394)*





___

___
<a id="paginate_result.properties.pages"></a>

###  pages

** pages**:  *`object`* 

*Defined in [docs.ts:396](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L396)*




<a id="paginate_result.properties.pages.type-5"></a>

###  type

**●  type**:  *`string`*  = "number"

*Defined in [docs.ts:397](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L397)*





___

___
<a id="paginate_result.properties.prev"></a>

###  prev

** prev**:  *`object`* 

*Defined in [docs.ts:399](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L399)*




<a id="paginate_result.properties.prev.type-6"></a>

###  type

**●  type**:  *`string`*  = "number"

*Defined in [docs.ts:400](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L400)*





___

___
<a id="paginate_result.properties.total"></a>

###  total

** total**:  *`object`* 

*Defined in [docs.ts:402](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L402)*




<a id="paginate_result.properties.total.type-7"></a>

###  type

**●  type**:  *`string`*  = "number"

*Defined in [docs.ts:403](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L403)*





___

___

___
<a id="paginate_result.xml"></a>

###  xml

** xml**:  *`object`* 

*Defined in [docs.ts:407](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L407)*




<a id="paginate_result.xml.name-1"></a>

###  name

**●  name**:  *`string`*  = "xml"

*Defined in [docs.ts:408](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L408)*





___

___

<a id="param_id"></a>

## Object literal: PARAM_ID


<a id="param_id.description-1"></a>

###  description

**●  description**:  *`string`*  = "Unique id"

*Defined in [docs.ts:424](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L424)*





___
<a id="param_id.in-1"></a>

###  in

**●  in**:  *`string`*  = "path"

*Defined in [docs.ts:425](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L425)*





___
<a id="param_id.name-2"></a>

###  name

**●  name**:  *`string`*  = "id"

*Defined in [docs.ts:426](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L426)*





___
<a id="param_id.required"></a>

###  required

**●  required**:  *`boolean`*  = true

*Defined in [docs.ts:427](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L427)*





___
<a id="param_id.type-8"></a>

###  type

**●  type**:  *`string`*  = "string"

*Defined in [docs.ts:428](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L428)*





___

<a id="response_4xx"></a>

## Object literal: RESPONSE_4XX


<a id="response_4xx.description-2"></a>

###  description

**●  description**:  *`string`*  = "Client side errors"

*Defined in [docs.ts:432](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L432)*





___

<a id="response_5xx"></a>

## Object literal: RESPONSE_5XX


<a id="response_5xx.description-3"></a>

###  description

**●  description**:  *`string`*  = "Server side errors"

*Defined in [docs.ts:436](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L436)*





___

<a id="show_options"></a>

## Object literal: SHOW_OPTIONS


<a id="show_options.description-4"></a>

###  description

**●  description**:  *`string`*  =  `
    {
      "select": String,
      "populate": String
    }
    `

*Defined in [docs.ts:413](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L413)*





___
<a id="show_options.in-2"></a>

###  in

**●  in**:  *`string`*  = "query"

*Defined in [docs.ts:419](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L419)*





___
<a id="show_options.name-3"></a>

###  name

**●  name**:  *`string`*  = "_options"

*Defined in [docs.ts:420](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L420)*





___


