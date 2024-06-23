<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [SMART-SHOP PRODUCTS](#smart-shop-products)
  - [Setting up the project](#setting-up-the-project)
  - [Set up PostgreSQL](#set-up-postgresql)
  - [Implement the endpoints](#implement-the-endpoints)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# SMART-SHOP PRODUCTS
This project entails a PostgreSQL table named products containing the following fields:

* __productThumbnail:__ URL of the product's thumbnail image.

* __productTitle:__ Title of the product.

* __productDescription:__ description of the product.

* __productCost:__ cost of the product.

* __onOffer:__ a boolean indicating whether the product is on offer or not, true means the products is on offer and false means the product is not on offer.  

## Setting up the project
Initialize a new Node.js project. Use __npm init__ to create a new project with your own settings or __npm init -y__ to set up a new project with the default instructions.

* Install the necessary dependencies (express, pg, dotenv).

* Install express: __npm install express__

* Install pg: __npm install pg__

* Install dotenv: __npm install dotenv__

* If you want, install nodemon: __npm install nodemon__

## Configure environment variables

   Create a __.env file__ in the root of the project and add the following environment variables. Replace the placeholders with your actual PostgreSQL configuration details:

   bash/terminal
   * PORT=your_port
   * DB_HOST=localhost
   * DB_USER=your_db_user
   * DB_PASSWORD=your_db_password
   * DB_NAME=your_db_name


## Set up PostgreSQL

-Ensure __PostgreSQL__ is installed and running on your machine.

-Create a new database for this project.

-A provided SQL was used to create the products table and insert the initial data.  
-Below is the link to download the sql used in this project.
https://drive.usercontent.google.com/download?id=1fhX2Zanflj5XA4-VWMsq_BrkzZKCAyiL&export=download

## Implement the endpoints
Implement endpoints used to perform various operations in this project:

* __Get All Products:__  retrieves a list of all products from the database.

* __Get a Single Product:__ retrieves a single product from the database based on its id.

* __Create a Product:__ creates a new product and write it to the PostgreSQL database.

* __Update a Products:__ updates a product based on it's id.

* __Delete a Product:__ delete a product based on it's id.
