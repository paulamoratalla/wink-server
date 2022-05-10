## Server routes


### Auth routes
| Method      | URL         | Description |
| ----------- | ----------- | ----------- |
| POST        | /signup     | Create user |
| POST        | /login     | Create user session|
| DELETE      | /logout    | Delete user session|
| GET         | /verify   | Verify user session|
		
## API routes


### Experience routes

| Method      | URL         | Description |
| ----------- | ----------- | ----------- |
| POST         | /api/experience/create | Create one experience documents |
| GET     | /api/experience/all | Reads all experience documents |
| GET | /api/experience/:experienceId | Read a specific experience |
| DELETE | /api/experience/:experienceId/delete | Deletes a specific experience |
| PUT  | /api/experience/:experienceId/edit | Edit a specific experience |

### User routes

| Method      | URL         | Description |
| ----------- | ----------- | ----------- |
| POST         | /api/user/create | Create one experience documents |
| GET     | /api/user/all | Reads all experience documents |
| GET | /api/user/:userId | Read a specific experience |
| DELETE | /api/user/:userId/delete | Deletes a specific experience |
| PUT  | /user/:userId/edit | Edit a specific experience |

### Test routes

| Method      | URL         | Description |
| ----------- | ----------- | ----------- |
| POST         | /test/create | Create one experience documents |
| GET     | /test/all | Reads all experience documents |
| GET | /test/:testId | Read a specific experience |
| DELETE | /test/:testId/delete | Deletes a specific experience |
| PUT  | /test/:testId/edit | Edit a specific experience |