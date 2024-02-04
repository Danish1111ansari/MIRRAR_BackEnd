# MIRRAR Backend

## Project Description

Created a REST API for an e-commerce system using Node.js. The API includes the following features:

1. **API to get all products**
   - Method: GET
   - URL: `http://localhost:8080/api/v1/product/all-products/`

2. **API to get a specific product by ID**
   - Method: GET
   - URL: `http://localhost:8080/api/v1/product/get-product/_id`
     (Get the ID from the MongoDB database of an existing product.)

3. **API to create a new product**
   - Method: POST
   - URL: `http://localhost:8080/api/v1/product/create-product`
   - Body (JSON):

     ```json
     {
       "name": "Adult Product",
       "description": "This is a sample product",
       "price": 29.99,
       "variants": [
         {
           "name": "Small",
           "sku": "LARG234",
           "additionalCost": 5.00,
           "stockCount": 100
         }
       ]
     }
     ```

4. **API to update a product by ID**
   - Method: PUT
   - URL: `http://localhost:8080/api/v1/product/update-product/_id`
     (Get the ID from the MongoDB database of an existing product.)
   - Body (JSON):

     ```json
     {
       "name": "Child Product",
       "description": "This is a sample product",
       "price": 29.99,
       "variants": [
         {
           "name": "Small",
           "sku": "LARG234",
           "additionalCost": 5.00,
           "stockCount": 100
         }
       ]
     }
     ```

5. **API to delete a product by ID**
   - Method: DELETE
   - URL: `http://localhost:8080/api/v1/product/delete-product/_id`
     (Get the ID from the MongoDB database of an existing product.)

6. **API to search for products by name, description, or variant name**
   - Method: GET
   - URL: `http://localhost:8080/api/v1/product/search-product/slug`
     (Slug can be any keyword based on which you want to find the product.)

## Prerequisites

1. Node.js
2. npm or yarn
3. MongoDB
4. Postman

## Installation

1. **Clone the repository to your local machine:**
   ```bash
   git clone https://github.com/Danish1111ansari/MIRRAR_BackEnd.git
   cd MIRRAR_BackEnd

## Setting up the Database

Open the `.env` file and replace `mongodb://your-mongodb-url` with the actual URL for your MongoDB database.

## Installation

Install the required dependencies by running the following command in your terminal:

      ```bash
      npm install colors cors dotenv express mongoose morgan nodemon


## Running the Application

To start the application, use either of the following commands:

      ```bash
      npm run server / npm run start


## Testing the API with Postman
-Open Postman.
-Use the provided API endpoints:

**This provides a step-by-step guide for running the application and testing the API using Postman. Adjustments can be made based on your specific needs.**



