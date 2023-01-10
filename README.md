## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Folder structure](#folder-structure)

## General info
This project contains REST APIs for an ecommerce project. 

## Assignment
Build a REST API for an e-commerce marketplace.
You will be building a set of REST API endpoints that enable the following functionality
* Buyers and sellers can register and login to the system
* Sellers can build a catalog of items, with each item having a name and price
* Buyers can GET a list of sellers
* Buyers can GET a specific seller's catalog (list of items)
* Buyers can create an Order that contains a list of items from the seller's catalog
* Sellers can GET a list of all orders they've received

## Entities
Following are the different entities in the system:
* Users
  * buyers and sellers
  * A user can sign up as a buyer or as a seller
* Catalogs
  * A catalog belongs to a seller
  * One seller can have one catalog
  * A catalog consists of Products
* Products - A product has a name and a price
* Orders
  * An order can be created by a buyer to purchase items from a seller's catalog
  * An order consists of a list of products

## APIs
Following are a few examples of the API endpoints you should expose.

* Auth APIs
  * POST /api/auth/register
  - Register a user (accept username, password, type of user - buyer/seller)
  * POST /api/auth/login
  - Let a previously registered user log in (e.g. retrieve authentication token)

* APIs for buyers
  * GET /api/buyer/list-of-sellers
  - Get a list of all sellers
  * GET /api/buyer/seller-catalog/:seller_id
  - Get the catalog of a seller by seller_id
  * POST /api/buyer/create-order/:seller_id
  - Send a list of items to create an order for seller with id = seller_id

* APIs for sellers
  * POST /api/seller/create-catalog
  - Send a list of items to create a catalog for a seller
  * GET /api/seller/orders
  - Retrieve the list of orders received by a seller


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
