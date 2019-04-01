Authentification Endpoints:
======
|Route    |HTTP  |Header(s)  |Body  | Description |
|:--------: |:----:|:---------:|:----:|:----:|
|`https://lychee-sundae-65236.herokuapp.com/api/signup`|POST   | `none`    |`email:String` (**REQUIRED**), `password:String` (**REQUIRED**), `role:String` (**REQUIRED**)|Register as a new user|
|`https://lychee-sundae-65236.herokuapp.com/api/signin`|POST   | `none`    |`email:String` (**REQUIRED**), `password:String` (**REQUIRED**)|Login as a user

User Endpoints:
======
|Route    |HTTP  |Header(s)  |Body  | Description |
|:--------: |:----:|:---------:|:----:|:----:|
|`https://lychee-sundae-65236.herokuapp.com/api/users`|GET   | `token`    |`none`|Get all the users info (Admin only)|
|`https://lychee-sundae-65236.herokuapp.com/api/users/:id`|GET   | `token`    |`none`|Get a single user info (Admin and Authenticated user)|
|`https://lychee-sundae-65236.herokuapp.com/api/users`|POST   | `token`    |`email:String` (**REQUIRED**), `password:String` (**REQUIRED**), `role:String` (**REQUIRED**)|Create a user (Admin only)|
|`https://lychee-sundae-65236.herokuapp.com/api/users/:id`|PUT   | `token`    |`email:String` (**REQUIRED**), `password:String` (**REQUIRED**), `role:String` (**REQUIRED**)|Update a user with new info (Admin and Authenticated user)|

Usage:
===
```
Access via https://lychee-sundae-65236.herokuapp.com !
```