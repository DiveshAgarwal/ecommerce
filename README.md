## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Folder structure](#folder-structure)

## General info
This project contains REST APIs for an ecommerce project. 

## Technologies
Project is created with:
* Node.js: v16.13.0
* PostgreSQL: 14.2
Major packages used:
* sequelize
* json-web-token
* pg
* joi
* nodemon
	
## Setup
To run this project, kindly make sure that:
* You have compatible Postgres and Node versions.
* Please create .env file from .env.sample and fill values as per system config.
* Please check that the database named in the .env is created (structure will be created automatically).

To run it in development mode install it locally using npm:

```
$ cd ecommerce
$ npm install
$ npm run dev 
```

To run it in production mode install it locally using npm:

```
$ cd ecommerce
$ npm install --production
$ npm start 
```

## Folder Structure
* app.js - entry point in the project
* .env - enviroment file
* config - configuration related files
* routes - all the routes in the application
* docs - swagger documentation will be here in .yaml format
* src - actual source code
  * controllers - controller of the route
  * helpers - common functions used in the application
  * middlewares - middleware functions like auth, validation etc.
  * models - DB tables / entities
  * repositories - DB queries. To communicate to models.
  * services - service layer for the controllers (business logic)
  * validationSchema - schema used for validation by Joi validation middleware
