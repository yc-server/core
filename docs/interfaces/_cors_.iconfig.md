[@ycs/core](../README.md) > ["cors"](../modules/_cors_.md) > [IConfig](../interfaces/_cors_.iconfig.md)



# Interface: IConfig


## Properties
<a id="allowheaders"></a>

### «Optional» allowHeaders

**●  allowHeaders**:  *`string`⎮`string`[]* 

*Defined in cors.ts:22*



`Access-Control-Allow-Headers`




___

<a id="allowmethods"></a>

### «Optional» allowMethods

**●  allowMethods**:  *`string`⎮`string`[]* 

*Defined in cors.ts:12*



`Access-Control-Allow-Methods`, default is 'GET,HEAD,PUT,POST,DELETE,PATCH'




___

<a id="credentials"></a>

### «Optional» credentials

**●  credentials**:  *`boolean`* 

*Defined in cors.ts:32*



`Access-Control-Allow-Credentials`




___

<a id="exposeheaders"></a>

### «Optional» exposeHeaders

**●  exposeHeaders**:  *`string`⎮`string`[]* 

*Defined in cors.ts:17*



`Access-Control-Expose-Headers`




___

<a id="keepheadersonerror"></a>

### «Optional» keepHeadersOnError

**●  keepHeadersOnError**:  *`boolean`* 

*Defined in cors.ts:37*



Add set headers to `err.header` if an error is thrown




___

<a id="maxage"></a>

### «Optional» maxAge

**●  maxAge**:  *`string`⎮`number`* 

*Defined in cors.ts:27*



`Access-Control-Max-Age` in seconds




___

<a id="origin"></a>

### «Optional» origin

**●  origin**:  *`string`⎮`function`* 

*Defined in cors.ts:7*



`Access-Control-Allow-Origin`, default is request Origin header




___


