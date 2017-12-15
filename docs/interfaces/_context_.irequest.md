[@ycs/core](../README.md) > ["context"](../modules/_context_.md) > [IRequest](../interfaces/_context_.irequest.md)



# Interface: IRequest


Request object

## Hierarchy


 `Request`

**↳ IRequest**








## Properties
<a id="accept"></a>

###  accept

**●  accept**:  *`Accepts`* 

*Inherited from Request.accept*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:633*





___

<a id="app"></a>

###  app

**●  app**:  *`Application`* 

*Inherited from Request.app*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:626*





___

<a id="auth"></a>

###  auth

**●  auth**:  *`object`* 

*Defined in [context.ts:21](https://github.com/yc-server/core/blob/408b191/src/context.ts#L21)*



Authentication object

#### Type declaration




 _id: `string`


Auth id






 owns: `boolean`


Wheather owns the document or not






 providers: `Array`.<`object`>


Thirdparty providers






 roles: `string`[]


Roles







___

<a id="body"></a>

###  body

**●  body**:  *`string`* 

*Defined in [context.ts:49](https://github.com/yc-server/core/blob/408b191/src/context.ts#L49)*



Raw body




___

<a id="charset"></a>

###  charset

**●  charset**:  *`string`* 

*Inherited from BaseRequest.charset*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:496*



Get the charset when present or undefined.




___

<a id="ctx"></a>

###  ctx

**●  ctx**:  *`Context`* 

*Inherited from Request.ctx*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:629*





___

<a id="fields"></a>

###  fields

**●  fields**:  *`any`* 

*Defined in [context.ts:16](https://github.com/yc-server/core/blob/408b191/src/context.ts#L16)*



Fields parsed from JSON, XML, or FormData




___

<a id="files"></a>

###  files

**●  files**:  *`any`* 

*Defined in [context.ts:11](https://github.com/yc-server/core/blob/408b191/src/context.ts#L11)*



Multi-media files




___

<a id="fresh"></a>

###  fresh

**●  fresh**:  *`boolean`* 

*Inherited from ContextDelegatedRequest.fresh*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:102*



Check if the request is fresh, aka Last-Modified and/or the ETag still match.




___

<a id="header"></a>

###  header

**●  header**:  *`any`* 

*Inherited from ContextDelegatedRequest.header*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:30*



Return request header.




___

<a id="headers"></a>

###  headers

**●  headers**:  *`any`* 

*Inherited from ContextDelegatedRequest.headers*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:34*



Return request header, alias as request.header




___

<a id="host"></a>

###  host

**●  host**:  *`string`* 

*Inherited from ContextDelegatedRequest.host*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:88*



Parse the "Host" header field host and support X-Forwarded-Host when a proxy is enabled.




___

<a id="hostname"></a>

###  hostname

**●  hostname**:  *`string`* 

*Inherited from ContextDelegatedRequest.hostname*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:95*



Parse the "Host" header field hostname and support X-Forwarded-Host when a proxy is enabled.




___

<a id="href"></a>

###  href

**●  href**:  *`string`* 

*Inherited from ContextDelegatedRequest.href*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:49*



Get full request URL.




___

<a id="idempotent"></a>

###  idempotent

**●  idempotent**:  *`boolean`* 

*Inherited from ContextDelegatedRequest.idempotent*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:114*



Check if the request is idempotent.




___

<a id="ip"></a>

###  ip

**●  ip**:  *`string`* 

*Inherited from Request.ip*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:632*





___

<a id="ips"></a>

###  ips

**●  ips**:  *`string`[]* 

*Inherited from ContextDelegatedRequest.ips*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:146*



When `app.proxy` is `true`, parse the "X-Forwarded-For" ip address list.

For example if the value were "client, proxy1, proxy2" you would receive the array `["client", "proxy1", "proxy2"]` where "proxy2" is the furthest down-stream.




___

<a id="length"></a>

###  length

**●  length**:  *`number`* 

*Inherited from BaseRequest.length*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:501*



Return parsed Content-Length when present.




___

<a id="method"></a>

###  method

**●  method**:  *`string`* 

*Inherited from ContextDelegatedRequest.method*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:54*



Get/Set request method.




___

<a id="origin"></a>

###  origin

**●  origin**:  *`string`* 

*Inherited from ContextDelegatedRequest.origin*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:44*



Get origin of URL.




___

<a id="originalurl"></a>

###  originalUrl

**●  originalUrl**:  *`string`* 

*Inherited from Request.originalUrl*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:631*





___

<a id="path"></a>

###  path

**●  path**:  *`string`* 

*Inherited from ContextDelegatedRequest.path*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:60*



Get request pathname. Set pathname, retaining the query-string when present.




___

<a id="protocol"></a>

###  protocol

**●  protocol**:  *`string`* 

*Inherited from ContextDelegatedRequest.protocol*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:129*



Return the protocol string "http" or "https" when requested with TLS. When the proxy setting is enabled the "X-Forwarded-Proto" header field will be trusted. If you're running behind a reverse proxy that supplies https for you this may be enabled.




___

<a id="query"></a>

###  query

**●  query**:  *`any`* 

*Inherited from ContextDelegatedRequest.query*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:66*



Get parsed query-string. Set query-string as an object.




___

<a id="querystring"></a>

###  querystring

**●  querystring**:  *`string`* 

*Inherited from ContextDelegatedRequest.querystring*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:71*



Get/Set query string.




___

<a id="req"></a>

###  req

**●  req**:  *`IncomingMessage`* 

*Inherited from Request.req*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:627*





___

<a id="res"></a>

###  res

**●  res**:  *`ServerResponse`* 

*Inherited from Request.res*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:628*





___

<a id="response"></a>

###  response

**●  response**:  *`Response`* 

*Inherited from Request.response*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:630*





___

<a id="search"></a>

###  search

**●  search**:  *`string`* 

*Inherited from ContextDelegatedRequest.search*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:80*



Get the search string. Same as the querystring except it includes the leading ?.

Set the search string. Same as response.querystring= but included for ubiquity.




___

<a id="secure"></a>

###  secure

**●  secure**:  *`boolean`* 

*Inherited from ContextDelegatedRequest.secure*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:136*



Short-hand for:

this.protocol == 'https'




___

<a id="socket"></a>

###  socket

**●  socket**:  *`Socket`* 

*Inherited from ContextDelegatedRequest.socket*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:119*



Return the request socket.




___

<a id="stale"></a>

###  stale

**●  stale**:  *`boolean`* 

*Inherited from ContextDelegatedRequest.stale*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:109*



Check if the request is stale, aka "Last-Modified" and / or the "ETag" for the resource has changed.




___

<a id="subdomains"></a>

###  subdomains

**●  subdomains**:  *`string`[]* 

*Inherited from ContextDelegatedRequest.subdomains*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:160*



Return subdomains as an array.

Subdomains are the dot-separated parts of the host before the main domain of the app. By default, the domain of the app is assumed to be the last two parts of the host. This can be changed by setting `app.subdomainOffset`.

For example, if the domain is "tobi.ferrets.example.com": If `app.subdomainOffset` is not set, this.subdomains is `["ferrets", "tobi"]`. If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.




___

<a id="type"></a>

###  type

**●  type**:  *`string`* 

*Inherited from BaseRequest.type*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:507*



Return the request mime type void of parameters such as "charset".




___

<a id="url"></a>

###  url

**●  url**:  *`string`* 

*Inherited from ContextDelegatedRequest.url*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:39*



Get/Set request URL.




___


## Methods
<a id="accepts"></a>

###  accepts

► **accepts**(): `string`[]⎮`boolean`

► **accepts**(...types: *`string`[]*): `string`⎮`boolean`

► **accepts**(types: *`string`[]*): `string`⎮`boolean`



*Inherited from ContextDelegatedRequest.accepts*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:198*



Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `undefined`, in which case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned.

Examples:

    // Accept: text/html
    this.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    this.accepts('html');
    // => "html"
    this.accepts('text/html');
    // => "text/html"
    this.accepts('json', 'text');
    // => "json"
    this.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    this.accepts('image/png');
    this.accepts('png');
    // => undefined

    // Accept: text/*;q=.5, application/json
    this.accepts(['html', 'json']);
    this.accepts('html', 'json');
    // => "json"




**Returns:** `string`[]⎮`boolean`



*Inherited from ContextDelegatedRequest.accepts*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:199*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| types | `string`[]   |  - |





**Returns:** `string`⎮`boolean`



*Inherited from ContextDelegatedRequest.accepts*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:200*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| types | `string`[]   |  - |





**Returns:** `string`⎮`boolean`





___

<a id="acceptscharsets"></a>

###  acceptsCharsets

► **acceptsCharsets**(): `string`[]⎮`boolean`

► **acceptsCharsets**(...charsets: *`string`[]*): `string`⎮`boolean`

► **acceptsCharsets**(charsets: *`string`[]*): `string`⎮`boolean`



*Inherited from ContextDelegatedRequest.acceptsCharsets*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:222*



Return accepted charsets or best fit based on `charsets`.

Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5` an array sorted by quality is returned:

    ['utf-8', 'utf-7', 'iso-8859-1']




**Returns:** `string`[]⎮`boolean`



*Inherited from ContextDelegatedRequest.acceptsCharsets*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:223*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| charsets | `string`[]   |  - |





**Returns:** `string`⎮`boolean`



*Inherited from ContextDelegatedRequest.acceptsCharsets*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:224*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| charsets | `string`[]   |  - |





**Returns:** `string`⎮`boolean`





___

<a id="acceptsencodings"></a>

###  acceptsEncodings

► **acceptsEncodings**(): `string`[]⎮`boolean`

► **acceptsEncodings**(...encodings: *`string`[]*): `string`⎮`boolean`

► **acceptsEncodings**(encodings: *`string`[]*): `string`⎮`boolean`



*Inherited from ContextDelegatedRequest.acceptsEncodings*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:210*



Return accepted encodings or best fit based on `encodings`.

Given `Accept-Encoding: gzip, deflate` an array sorted by quality is returned:

    ['gzip', 'deflate']




**Returns:** `string`[]⎮`boolean`



*Inherited from ContextDelegatedRequest.acceptsEncodings*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:211*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| encodings | `string`[]   |  - |





**Returns:** `string`⎮`boolean`



*Inherited from ContextDelegatedRequest.acceptsEncodings*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:212*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| encodings | `string`[]   |  - |





**Returns:** `string`⎮`boolean`





___

<a id="acceptslanguages"></a>

###  acceptsLanguages

► **acceptsLanguages**(): `string`[]⎮`boolean`

► **acceptsLanguages**(...langs: *`string`[]*): `string`⎮`boolean`

► **acceptsLanguages**(langs: *`string`[]*): `string`⎮`boolean`



*Inherited from ContextDelegatedRequest.acceptsLanguages*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:234*



Return accepted languages or best fit based on `langs`.

Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned:

    ['es', 'pt', 'en']




**Returns:** `string`[]⎮`boolean`



*Inherited from ContextDelegatedRequest.acceptsLanguages*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:235*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| langs | `string`[]   |  - |





**Returns:** `string`⎮`boolean`



*Inherited from ContextDelegatedRequest.acceptsLanguages*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:236*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| langs | `string`[]   |  - |





**Returns:** `string`⎮`boolean`





___

<a id="get"></a>

###  get

► **get**(field: *`string`*): `string`



*Inherited from ContextDelegatedRequest.get*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:280*



Return request header.

The `Referrer` header field is special-cased, both `Referrer` and `Referer` are interchangeable.

Examples:

    this.get('Content-Type');
    // => "text/plain"

    this.get('content-type');
    // => "text/plain"

    this.get('Something');
    // => undefined


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | `string`   |  - |





**Returns:** `string`





___

<a id="inspect"></a>

###  inspect

► **inspect**(): `any`



*Inherited from BaseRequest.inspect*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:512*



Inspect implementation.




**Returns:** `any`





___

<a id="is"></a>

###  is

► **is**(...types: *`string`[]*): `string`⎮`boolean`

► **is**(types: *`string`[]*): `string`⎮`boolean`



*Inherited from ContextDelegatedRequest.is*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:260*



Check if the incoming request contains the "Content-Type" header field, and it contains any of the give mime `type`s. If there is no request body, `null` is returned. If there is no content type, `false` is returned. Otherwise, it returns the first `type` that matches.

Examples:

    // With Content-Type: text/html; charset=utf-8
    this.is('html'); // => 'html'
    this.is('text/html'); // => 'text/html'
    this.is('text/*', 'application/json'); // => 'text/html'

    // When Content-Type is application/json
    this.is('json', 'urlencoded'); // => 'json'
    this.is('application/json'); // => 'application/json'
    this.is('html', 'application/*'); // => 'application/json'

    this.is('html'); // => false


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| types | `string`[]   |  - |





**Returns:** `string`⎮`boolean`



*Inherited from ContextDelegatedRequest.is*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:261*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| types | `string`[]   |  - |





**Returns:** `string`⎮`boolean`





___

<a id="tojson"></a>

###  toJSON

► **toJSON**(): `any`



*Inherited from BaseRequest.toJSON*

*Defined in /Users/yuchen/Projects/ycs/core/node_modules/@types/koa/index.d.ts:517*



Return JSON representation.




**Returns:** `any`





___


