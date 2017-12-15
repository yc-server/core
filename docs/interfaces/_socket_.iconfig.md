[@ycs/core](../README.md) > ["socket"](../modules/_socket_.md) > [IConfig](../interfaces/_socket_.iconfig.md)



# Interface: IConfig


## Properties
<a id="onconnection"></a>

### «Optional» onConnection

**●  onConnection**:  *`function`* 

*Defined in [socket.ts:116](https://github.com/yc-server/core/blob/408b191/src/socket.ts#L116)*



Doing some stuff on connection

#### Type declaration
►(socket: *`Socket`*): `void`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| socket | `Socket`   |  - |





**Returns:** `void`






___

<a id="ondisconnect"></a>

### «Optional» onDisconnect

**●  onDisconnect**:  *`function`* 

*Defined in [socket.ts:121](https://github.com/yc-server/core/blob/408b191/src/socket.ts#L121)*



Doing some stuff on disconnect

#### Type declaration
►(socket: *`Socket`*): `void`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| socket | `Socket`   |  - |





**Returns:** `void`






___

<a id="redis"></a>

###  redis

**●  redis**:  *`SocketIORedisOptions`* 

*Defined in [socket.ts:111](https://github.com/yc-server/core/blob/408b191/src/socket.ts#L111)*



redis options




___

<a id="startport"></a>

###  startPort

**●  startPort**:  *`number`* 

*Defined in [socket.ts:106](https://github.com/yc-server/core/blob/408b191/src/socket.ts#L106)*



Socket first port. If you run app in pm2 with 4 cores, the actual ports will be startPort, startPort + 1, startPort + 2, startPort + 3




___


