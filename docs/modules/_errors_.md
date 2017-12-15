[@ycs/core](../README.md) > ["errors"](../modules/_errors_.md)



# External module: "errors"

## Index

### Variables

* [BadDataErrors](_errors_.md#baddataerrors)
* [Boom](_errors_.md#boom)


### Functions

* [handleError](_errors_.md#handleerror)



---
## Variables
<a id="baddataerrors"></a>

###  BadDataErrors

**●  BadDataErrors**:  *`string`[]*  =  ['CastError', 'ValidationError', 'SyntaxError']

*Defined in [errors.ts:9](https://github.com/yc-server/core/blob/408b191/src/errors.ts#L9)*



422 bad data errors




___

<a id="boom"></a>

###  Boom

**●  Boom**:  *`Boom`*  =  boom

*Defined in [errors.ts:50](https://github.com/yc-server/core/blob/408b191/src/errors.ts#L50)*



ref to boom




___


## Functions
<a id="handleerror"></a>

###  handleError

► **handleError**(ctx: *[IContext](../interfaces/_context_.icontext.md)*, error: *`any`*, statusCode?: *`number`*): `void`



*Defined in [errors.ts:17](https://github.com/yc-server/core/blob/408b191/src/errors.ts#L17)*



Generating error output


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| ctx | [IContext](../interfaces/_context_.icontext.md)  | - |   Ycs context |
| error | `any`  | - |   Error object ob Boom object |
| statusCode | `number`  | 500 |   error status code |





**Returns:** `void`





___


