[@ycs/core](../README.md) > ["docs"](../modules/_docs_.md) > [DocSchema](../classes/_docs_.docschema.md)



# Class: DocSchema


DocSchema class

## Index

### Constructors

* [constructor](_docs_.docschema.md#constructor)


### Accessors

* [body](_docs_.docschema.md#body)
* [filters](_docs_.docschema.md#filters)
* [paginateOptions](_docs_.docschema.md#paginateoptions)
* [paginateResult](_docs_.docschema.md#paginateresult)
* [paramId](_docs_.docschema.md#paramid)
* [response4xx](_docs_.docschema.md#response4xx)
* [response5xx](_docs_.docschema.md#response5xx)
* [result](_docs_.docschema.md#result)
* [schema](_docs_.docschema.md#schema)
* [showOptions](_docs_.docschema.md#showoptions)


### Methods

* [paginateResultWithOptions](_docs_.docschema.md#paginateresultwithoptions)
* [resultWithOptions](_docs_.docschema.md#resultwithoptions)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new DocSchema**(model: *`mongoose.PaginateModel`.<`Document`>*): [DocSchema](_docs_.docschema.md)


*Defined in [docs.ts:39](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L39)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| model | `mongoose.PaginateModel`.<`Document`>   |  - |





**Returns:** [DocSchema](_docs_.docschema.md)

---



## Accessors
<a id="body"></a>

###  body


getbody(): [IDocsParameter](../interfaces/_docs_.idocsparameter.md)

*Defined in [docs.ts:166](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L166)*



Body in body




**Returns:** [IDocsParameter](../interfaces/_docs_.idocsparameter.md)



___

<a id="filters"></a>

###  filters


getfilters(): [IDocsParameter](../interfaces/_docs_.idocsparameter.md)

*Defined in [docs.ts:54](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L54)*



Filters in query




**Returns:** [IDocsParameter](../interfaces/_docs_.idocsparameter.md)



___

<a id="paginateoptions"></a>

###  paginateOptions


getpaginateOptions(): [IDocsParameter](../interfaces/_docs_.idocsparameter.md)

*Defined in [docs.ts:145](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L145)*



Paginate options in query




**Returns:** [IDocsParameter](../interfaces/_docs_.idocsparameter.md)



___

<a id="paginateresult"></a>

###  paginateResult


getpaginateResult(): [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)

*Defined in [docs.ts:91](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L91)*



The default paginated result




**Returns:** [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)



___

<a id="paramid"></a>

###  paramId


getparamId(): [IDocsParameter](../interfaces/_docs_.idocsparameter.md)

*Defined in [docs.ts:159](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L159)*



Id in path




**Returns:** [IDocsParameter](../interfaces/_docs_.idocsparameter.md)



___

<a id="response4xx"></a>

###  response4xx


getresponse4xx(): `object`

*Defined in [docs.ts:179](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L179)*



4xx results




**Returns:** `object`



___

<a id="response5xx"></a>

###  response5xx


getresponse5xx(): `object`

*Defined in [docs.ts:186](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L186)*



5xx results




**Returns:** `object`



___

<a id="result"></a>

###  result


getresult(): [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)

*Defined in [docs.ts:74](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L74)*



The default result




**Returns:** [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)



___

<a id="schema"></a>

###  schema


getschema(): [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)

*Defined in [docs.ts:46](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L46)*



The swagger ui schema




**Returns:** [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)



___

<a id="showoptions"></a>

###  showOptions


getshowOptions(): [IDocsParameter](../interfaces/_docs_.idocsparameter.md)

*Defined in [docs.ts:152](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L152)*



Show options in query




**Returns:** [IDocsParameter](../interfaces/_docs_.idocsparameter.md)



___


## Methods
<a id="paginateresultwithoptions"></a>

###  paginateResultWithOptions

► **paginateResultWithOptions**(options: *[IResultOptions](../interfaces/_docs_.iresultoptions.md)*): [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)



*Defined in [docs.ts:127](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L127)*



Paginated result with options


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | [IResultOptions](../interfaces/_docs_.iresultoptions.md)   |  - |





**Returns:** [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)





___

<a id="resultwithoptions"></a>

###  resultWithOptions

► **resultWithOptions**(options: *[IResultOptions](../interfaces/_docs_.iresultoptions.md)*): [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)



*Defined in [docs.ts:107](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L107)*



Result with options


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | [IResultOptions](../interfaces/_docs_.iresultoptions.md)   |  - |





**Returns:** [IDocsDataTypeItem](../interfaces/_docs_.idocsdatatypeitem.md)





___


