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

open .env and write your url for the database.

# Install dependencies:
npm i  colors cors dotenv express mongoose morgan nodemon

# Run the apllication:
npm run server / npm run start 

# Test the API:
opne the postman and hit the api:

1. API to get all products

select the #get request and hit.
http://localhost:8080/api/v1/product/all-products/

2. API to get a specific product by ID

select the #get requests and hit.
http://localhost:8080/api/v1/product/get-product/_id
you can get the id from the mongodb database of existing product.

3. API to create a new product

select the #post requests and hit.
http://localhost:8080/api/v1/product/create-product
navigate to body->json 
and in the json 

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


4. API to update a product by ID


select the #put requests and hit.
http://localhost:8080/api/v1/product/update-product/_id
you can get the id from the mongodb database of existing product.
navigate to body->json 
and in the json 

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

5. API to delete a product by ID
   
select the #delete request and hit.
http://localhost:8080/api/v1/product/delete-product/_id
you can get the id from the mongodb database of existing product.

6. API to to search for products by name, description, or variant name


select the #get request and hit.
http://localhost:8080/api/v1/product/search-product/slug
slug can be any keyword based on you find the product .


    
