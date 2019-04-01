Authentification Endpoints:
======
|Route    |HTTP  |Header(s)  |Body  | Description |
|:--------: |:----:|:---------:|:----:|:----:|
|`/api/signup`|POST   | `none`    |`email:String` (**REQUIRED**), `password:String` (**REQUIRED**), `role:String` (**REQUIRED**)|Register as a new user|
|`/api/signin`|POST   | `none`    |`email:String` (**REQUIRED**), `password:String` (**REQUIRED**)|Login as a user

User Endpoints:
======
|Route    |HTTP  |Header(s)  |Body  | Description |
|:--------: |:----:|:---------:|:----:|:----:|
|`/api/users`|GET   | `token`    |`none`|Get all the users info (Admin only)|
|`/api/users/:id`|GET   | `token`    |`none`|Get a single user info (Admin and Authenticated user)|
|`/api/users`|POST   | `token`    |`email:String` (**REQUIRED**), `password:String` (**REQUIRED**), `role:String` (**REQUIRED**)|Create a user (Admin only)|
|`/api/users/:id`|PUT   | `token`    |`email:String` (**REQUIRED**), `password:String` (**REQUIRED**), `role:String` (**REQUIRED**)|Update a user with new info (Admin and Authenticated user)||