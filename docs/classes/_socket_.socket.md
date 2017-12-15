[@ycs/core](../README.md) > ["socket"](../modules/_socket_.md) > [Socket](../classes/_socket_.socket.md)



# Class: Socket


Socket class

To use this, just create a file named socket.ts in your api directory. Paste following code to the file.

    import { Socket } from '@ycs/core/lib/socket';

    export default new Socket('room_name_here');

To emit a event

    import socket from './socket';

    socket.emit('event:name', 'some text');

## Index

### Constructors

* [constructor](_socket_.socket.md#constructor)


### Methods

* [emit](_socket_.socket.md#emit)
* [register](_socket_.socket.md#register)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Socket**(room: *`string`*): [Socket](_socket_.socket.md)


*Defined in [socket.ts:31](https://github.com/yc-server/core/blob/408b191/src/socket.ts#L31)*



Creating a socket object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| room | `string`   |  room name |





**Returns:** [Socket](_socket_.socket.md)

---



## Methods
<a id="emit"></a>

###  emit

► **emit**(event: *`string`*, ...args: *`any`[]*): `void`



*Defined in [socket.ts:54](https://github.com/yc-server/core/blob/408b191/src/socket.ts#L54)*



Emitting event to all members in the room


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`   |  event name |
| args | `any`[]   |  something |





**Returns:** `void`





___

<a id="register"></a>

###  register

► **register**(socket: *`Socket`*): `void`



*Defined in [socket.ts:45](https://github.com/yc-server/core/blob/408b191/src/socket.ts#L45)*



Adding socket to the room


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| socket | `Socket`   |  socket |





**Returns:** `void`





___


