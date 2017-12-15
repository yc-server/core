[@ycs/core](../README.md) > ["app"](../modules/_app_.md) > [Ycs](../classes/_app_.ycs.md) > [Application](../modules/_app_.ycs.application.md) > [BaseResponse](../interfaces/_app_.ycs.application.baseresponse.md)



# Interface: BaseResponse


## Properties
<a id="body"></a>

###  body

**●  body**:  *`any`* 

*Inherited from ContextDelegatedResponse.body*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:297*



Get/Set response body.




___

<a id="etag"></a>

###  etag

**●  etag**:  *`string`* 

*Inherited from ContextDelegatedResponse.etag*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:373*



Get/Set the ETag of a response. This will normalize the quotes if necessary.

    this.response.etag = 'md5hashsum';
    this.response.etag = '"md5hashsum"';
    this.response.etag = 'W/"123456789"';
*__param__*: 

*__api__*: public





___

<a id="header"></a>

###  header

**●  header**:  *`any`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:532*



Return response header.




___

<a id="headersent"></a>

###  headerSent

**●  headerSent**:  *`boolean`* 

*Inherited from ContextDelegatedResponse.headerSent*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:308*



Check if a header has been written to the socket.




___

<a id="headers"></a>

###  headers

**●  headers**:  *`any`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:537*



Return response header, alias as response.header




___

<a id="lastmodified"></a>

###  lastModified

**●  lastModified**:  *`Date`* 

*Inherited from ContextDelegatedResponse.lastModified*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:360*



Get the Last-Modified date in Date form, if it exists. Set the Last-Modified date using a string or a Date.

    this.response.lastModified = new Date();
    this.response.lastModified = '2013-09-13';




___

<a id="length"></a>

###  length

**●  length**:  *`number`* 

*Inherited from ContextDelegatedResponse.length*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:303*



Return parsed response Content-Length when present. Set Content-Length field to `n`.




___

<a id="message"></a>

###  message

**●  message**:  *`string`* 

*Inherited from ContextDelegatedResponse.message*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:292*



Get response status message




___

<a id="socket"></a>

###  socket

**●  socket**:  *`Socket`* 

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:527*



Return the request socket.
*__returns__*: 

*__api__*: public





___

<a id="status"></a>

###  status

**●  status**:  *`number`* 

*Inherited from ContextDelegatedResponse.status*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:287*



Get/Set response status code.




___

<a id="type"></a>

###  type

**●  type**:  *`string`* 

*Inherited from ContextDelegatedResponse.type*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:351*



Return the response mime type void of parameters such as "charset".

Set Content-Type response header with `type` through `mime.lookup()` when it does not contain a charset.

Examples:

    this.type = '.html';
    this.type = 'html';
    this.type = 'json';
    this.type = 'application/json';
    this.type = 'png';




___

<a id="writable"></a>

###  writable

**●  writable**:  *`boolean`* 

*Inherited from ContextDelegatedResponse.writable*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:411*



Checks if the request is writable. Tests for the existence of the socket as node sometimes does not set it.




___


## Methods
<a id="append"></a>

###  append

► **append**(field: *`string`*, val: *`string`⎮`string`[]*): `void`



*Inherited from ContextDelegatedResponse.append*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:399*



Append additional header `field` with value `val`.

Examples:

    this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
    this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    this.append('Warning', '199 Miscellaneous warning');


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | `string`   |  - |
| val | `string`⎮`string`[]   |  - |





**Returns:** `void`





___

<a id="attachment"></a>

###  attachment

► **attachment**(filename: *`string`*): `void`



*Inherited from ContextDelegatedResponse.attachment*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:334*



Set Content-Disposition header to "attachment" with optional `filename`.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| filename | `string`   |  - |





**Returns:** `void`





___

<a id="flushheaders"></a>

###  flushHeaders

► **flushHeaders**(): `void`



*Inherited from ContextDelegatedResponse.flushHeaders*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:416*



Flush any set headers, and begin the body




**Returns:** `void`





___

<a id="get"></a>

###  get

► **get**(field: *`string`*): `string`



*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:562*



Return response header.

Examples:

    this.get('Content-Type');
    // => "text/plain"

    this.get('content-type');
    // => "text/plain"


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | `string`   |  - |





**Returns:** `string`





___

<a id="inspect"></a>

###  inspect

► **inspect**(): `any`



*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:567*



Inspect implementation.




**Returns:** `any`





___

<a id="is"></a>

###  is

► **is**(...types: *`string`[]*): `string`

► **is**(types: *`string`[]*): `string`



*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:548*



Check whether the response is one of the listed types. Pretty much the same as `this.request.is()`.
*__api__*: public



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| types | `string`[]   |  - |





**Returns:** `string`



*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:549*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| types | `string`[]   |  - |





**Returns:** `string`





___

<a id="redirect"></a>

###  redirect

► **redirect**(url: *`string`*, alt?: *`string`*): `void`



*Inherited from ContextDelegatedResponse.redirect*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:329*



Perform a 302 redirect to `url`.

The string "back" is special-cased to provide Referrer support, when Referrer is not present `alt` or "/" is used.

Examples:

this.redirect('back'); this.redirect('back', '/index.html'); this.redirect('/login'); this.redirect('[http://google.com](http://google.com)');


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |
| alt | `string`   |  - |





**Returns:** `void`





___

<a id="remove"></a>

###  remove

► **remove**(field: *`string`*): `void`



*Inherited from ContextDelegatedResponse.remove*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:404*



Remove header `field`.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | `string`   |  - |





**Returns:** `void`





___

<a id="set"></a>

###  set

► **set**(field: *`object`*): `void`

► **set**(field: *`string`*, val: *`string`⎮`string`[]*): `void`



*Inherited from ContextDelegatedResponse.set*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:385*



Set header `field` to `val`, or pass an object of header fields.

Examples:

this.set('Foo', ['bar', 'baz']); this.set('Accept', 'application/json'); this.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | `object`   |  - |





**Returns:** `void`



*Inherited from ContextDelegatedResponse.set*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:386*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | `string`   |  - |
| val | `string`⎮`string`[]   |  - |





**Returns:** `void`





___

<a id="tojson"></a>

###  toJSON

► **toJSON**(): `any`



*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:572*



Return JSON representation.




**Returns:** `any`





___

<a id="vary"></a>

###  vary

► **vary**(field: *`string`*): `void`



*Inherited from ContextDelegatedResponse.vary*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:313*



Vary on `field`.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | `string`   |  - |





**Returns:** `void`





___


