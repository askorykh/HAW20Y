**API documentation**



 Auth controller
 ==

    1. POST:/api/auth/signin  
 _End point for login of users_

   
 Request:
```json
{
  "email": "xxx",
  "password": "xxx"
}
```    
Response:
```json
{
"accessToken": "xxxxxxxxxxxxxxx",
"tokenType": "Bearer"
}
```


    2. POST:/api/auth/signin
_End point for registration/creation of new users_

 Request:
```json
{
  "firstName": "yyy",
  "lastName": "ddd",
  "email": "xxx",
  "password": "xxx",
  "gradYear": "2019"
}
```    
Response:
```json
{
"success": "boolean",
"message": "xxxx"
}
```


User controller
==