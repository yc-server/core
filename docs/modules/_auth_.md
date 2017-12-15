[@ycs/core](../README.md) > ["auth"](../modules/_auth_.md)



# External module: "auth"

## Index

### Interfaces

* [IConfig](../interfaces/_auth_.iconfig.md)


### Variables

* [AuthModel](_auth_.md#authmodel)
* [AuthSchema](_auth_.md#authschema)
* [hasRoles](_auth_.md#hasroles)
* [isAuthenticated](_auth_.md#isauthenticated)
* [owns](_auth_.md#owns)
* [ownsOrHasRoles](_auth_.md#ownsorhasroles)
* [signToken](_auth_.md#signtoken)
* [verifyToken](_auth_.md#verifytoken)


### Functions

* [getHeaderToken](_auth_.md#getheadertoken)
* [setup](_auth_.md#setup)



---
## Variables
<a id="authmodel"></a>

###  AuthModel

**●  AuthModel**:  *`Model`.<`Document`>* 

*Defined in [auth.ts:288](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L288)*



A mongoose model with name `__auth`




___

<a id="authschema"></a>

###  AuthSchema

**●  AuthSchema**:  *`Schema`* 

*Defined in [auth.ts:283](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L283)*



A mongoose schema




___

<a id="hasroles"></a>

###  hasRoles

**●  hasRoles**:  *`function`* 

*Defined in [auth.ts:330](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L330)*



Middleware to check if the authenticated user has specified roles.
*__param__*: specified roles


#### Type declaration
►(...roles: *`string`[]*): `any`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| roles | `string`[]   |  - |





**Returns:** `any`






___

<a id="isauthenticated"></a>

###  isAuthenticated

**●  isAuthenticated**:  *`function`* 

*Defined in [auth.ts:324](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L324)*



Middleware to check if it is authenticated.

#### Type declaration
►(): `any`





**Returns:** `any`






___

<a id="owns"></a>

###  owns

**●  owns**:  *`function`* 

*Defined in [auth.ts:335](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L335)*



Middleware to check if the authenticated user owns the document by checking the field __auth.

#### Type declaration
►(model: *`mongoose.PaginateModel`.<`Document`>*): `any`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| model | `mongoose.PaginateModel`.<`Document`>   |  - |





**Returns:** `any`






___

<a id="ownsorhasroles"></a>

###  ownsOrHasRoles

**●  ownsOrHasRoles**:  *`function`* 

*Defined in [auth.ts:341](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L341)*



Middleware to check if the authenticated user has specified roles, or the authenticated user owns the document by checking the field __auth.

#### Type declaration
►(model: *`mongoose.PaginateModel`.<`Document`>*, ...roles: *`string`[]*): `any`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| model | `mongoose.PaginateModel`.<`Document`>   |  - |
| roles | `string`[]   |  - |





**Returns:** `any`






___

<a id="signtoken"></a>

###  signToken

**●  signToken**:  *`function`* 

*Defined in [auth.ts:293](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L293)*



Signing JWT token

#### Type declaration
►(doc: *`Document`*, options: *`SignOptions`*): `string`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| doc | `Document`   |  - |
| options | `SignOptions`   |  - |





**Returns:** `string`






___

<a id="verifytoken"></a>

###  verifyToken

**●  verifyToken**:  *`function`* 

*Defined in [auth.ts:301](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L301)*



Verifying JWT token

#### Type declaration
►(token: *`string`*): `Promise`.<`any`>



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token | `string`   |  - |





**Returns:** `Promise`.<`any`>






___


## Functions
<a id="getheadertoken"></a>

###  getHeaderToken

► **getHeaderToken**(ctx: *[IContext](../interfaces/_context_.icontext.md)*): `string`



*Defined in [auth.ts:312](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L312)*



Getting token from headers

    Authorization: Bearer xxx


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | [IContext](../interfaces/_context_.icontext.md)   |  Koa context |





**Returns:** `string`





___

<a id="setup"></a>

###  setup

► **setup**(app: *[Ycs](../classes/_app_.ycs.md)*): `Promise`.<`void`>



*Defined in [auth.ts:12](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L12)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| app | [Ycs](../classes/_app_.ycs.md)   |  - |





**Returns:** `Promise`.<`void`>





___


