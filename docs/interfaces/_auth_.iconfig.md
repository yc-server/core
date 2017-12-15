[@ycs/core](../README.md) > ["auth"](../modules/_auth_.md) > [IConfig](../interfaces/_auth_.iconfig.md)



# Interface: IConfig


## Properties
<a id="defaultroles"></a>

###  defaultRoles

**●  defaultRoles**:  *`string`[]* 

*Defined in [auth.ts:379](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L379)*



Default roles to sign to new user.




___

<a id="enablesimpleauth"></a>

###  enableSimpleAuth

**●  enableSimpleAuth**:  *`boolean`* 

*Defined in [auth.ts:374](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L374)*



Use build-in auth router




___

<a id="messages"></a>

###  messages

**●  messages**:  *`object`* 

*Defined in [auth.ts:350](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L350)*



Messages

#### Type declaration




 errors: `object`


Error messages








 empty_password: `string`






 empty_username: `string`






 invalid_password: `string`






 invalid_token: `string`






 no_permission: `string`






 unauthorized: `string`






 username_already_in_use: `string`






 username_not_registered: `string`








___

<a id="secret"></a>

###  secret

**●  secret**:  *`string`* 

*Defined in [auth.ts:369](https://github.com/yc-server/core/blob/408b191/src/auth.ts#L369)*



JWT secret




___


