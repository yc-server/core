[@ycs/core](../README.md) > ["docs"](../modules/_docs_.md) > [IDocs](../interfaces/_docs_.idocs.md)



# Interface: IDocs


Ycs docs


## Properties
<a id="auth"></a>

### «Optional» auth

**●  auth**:  *`object`* 

*Defined in [docs.ts:300](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L300)*



Authentication

#### Type declaration




«Optional»  roles: `string`[]


Required when type is hasRoles or ownsOrHasRoles






 type: "isAuthenticated"⎮"owns"⎮"hasRoles"⎮"ownsOrHasRoles"


Auth type







___

<a id="consumes"></a>

### «Optional» consumes

**●  consumes**:  *[IDocsAccept](../modules/_docs_.md#idocsaccept)[]* 

*Defined in [docs.ts:330](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L330)*



Swagger ui consumes




___

<a id="controller"></a>

###  controller

**●  controller**:  *`function`* 

*Defined in [docs.ts:295](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L295)*



Controller function

#### Type declaration
►(ctx: *`any`*): `Promise`.<`any`>



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  - |





**Returns:** `Promise`.<`any`>






___

<a id="description"></a>

### «Optional» description

**●  description**:  *`string`* 

*Defined in [docs.ts:325](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L325)*



Swagger ui description




___

<a id="methods"></a>

###  methods

**●  methods**:  *["post"⎮"get"⎮"put"⎮"patch"⎮"delete"]* 

*Defined in [docs.ts:290](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L290)*



HTTP methods




___

<a id="parameters"></a>

### «Optional» parameters

**●  parameters**:  *[IDocsParameter](_docs_.idocsparameter.md)[]* 

*Defined in [docs.ts:340](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L340)*



Swagger ui parameters




___

<a id="path"></a>

###  path

**●  path**:  *`string`* 

*Defined in [docs.ts:285](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L285)*



Path to append to router




___

<a id="produces"></a>

### «Optional» produces

**●  produces**:  *[IDocsAccept](../modules/_docs_.md#idocsaccept)[]* 

*Defined in [docs.ts:335](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L335)*



Swagger ui consumes




___

<a id="responses"></a>

###  responses

**●  responses**:  *`object`* 

*Defined in [docs.ts:345](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L345)*



Swagger ui responses

#### Type declaration


[index: `string`]: `object`







 description: `string`






«Optional»  schema: `any`








___

<a id="summary"></a>

### «Optional» summary

**●  summary**:  *`string`* 

*Defined in [docs.ts:320](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L320)*



Swagger ui summary




___

<a id="tags"></a>

###  tags

**●  tags**:  *`string`[]* 

*Defined in [docs.ts:315](https://github.com/yc-server/core/blob/408b191/src/docs.ts#L315)*



Swagger ui tags




___


