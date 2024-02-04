// Importing the Product model from the specified file
import productModel from "../models/productModel.js";

// Controller function to get all products
export const getAllProductsController = async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await productModel.find({});

    // Sending a response with the product count, message, success status, and product data
    return res.status(200).send({
      productCount: products.length,
      message: "All products",
      success: true,
      products,
    });
  } catch (error) {
    // Handling errors and sending an error response
    return res.status(400).send({
      success: false,
      message: "Error in getting all products",
      error,
    });
  }
};

// Controller function to get a specific product by ID
export const getProductController = async (req, res) => {
  try {
    const { id } = req.params;

    // Retrieve a specific product by ID from the database
    const product = await productModel.findById(id);

    // Checking if the product exists and sending a response accordingly
    if (!product) {
      return res.status(404).send({
        message: "Product not found",
        success: false,
      });
    }

    // Sending a response with the success status and product data
    return res.status(200).send({
      message: "Getting a particular product",
      success: true,
      product,
    });
  } catch (error) {
    // Handling errors and sending an error response
    return res.status(400).send({
      message: "Something went wrong while retrieving the product",
      success: false,
      error,
    });
  }
};

// Controller function to create a new product
export const createProductController = async (req, res) => {
  try {
    const { name, description, price, variants } = req.body;

    // Check if required properties are present
    if (!name || !description || !price || !variants) {
      return res.status(400).send({
        message: "Something went wrong while creating the product",
        success: false,
        error: "Missing required fields",
      });
    }

    // Create a new product
    const newProduct = new productModel({ name, description, price, variants });

    // Save the new product to the database
    await newProduct.save();

    // Sending a response with the success status and the newly created product
    return res.status(201).send({
      message: "Product created successfully",
      success: true,
      newProduct,
    });
  } catch (error) {
    // Handling errors and sending an error response
    console.error("Error creating product:", error);
    return res.status(500).send({
      message: "Something went wrong while creating the product",
      success: false,
      error: error.message,
    });
  }
};

// Controller function to update a product
export const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, variants } = req.body;

    // Find the existing product by ID
    const existingProduct = await productModel.findById(id);

    // If the product doesn't exist, send a 404 response
    if (!existingProduct) {
      return res.status(404).send({
        message: "Product not found",
        success: false,
      });
    }

    // Update product details
    existingProduct.name = name || existingProduct.name;
    existingProduct.description = description || existingProduct.description;
    existingProduct.price = price || existingProduct.price;
    existingProduct.variants = variants || existingProduct.variants;

    // Save the updated product to the database
    const updatedProduct = await existingProduct.save();

    // Sending a response with the success status and the updated product
    res.status(200).send({
      message: "Product updated successfully",
      success: true,
      updatedProduct,
    });
  } catch (error) {
    // Handling errors and sending an error response
    console.error("Error updating product:", error);
    return res.status(500).send({
      message: "Error while updating the product",
      success: false,
      error: error.message,
    });
  }
};

// Controller function to delete a product by ID
export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the product by ID
    const deletedProduct = await productModel.findByIdAndDelete(id);

    // If the product doesn't exist, send a 404 response
    if (!deletedProduct) {
      return res.status(404).send({
        message: "Product not found",
        success: false,
      });
    }

    // Sending a response with the success status and the deleted product
    return res.status(200).send({
      message: "Product deleted successfully",
      success: true,
      deletedProduct,
    });
  } catch (error) {
    // Handling errors and sending an error response
    return res.status(500).send({
      message: "Error while deleting the product",
      success: false,
      error,
    });
  }
};

// Controller function to search for products by name, description, or variant name
export const searchProductController = async (req, res) => {
  try {
    const { slug } = req.params;

    // Define a query based on the search slug
    const query = slug
      ? {
          $or: [
            { name: { $regex: slug, $options: "i" } },
            { description: { $regex: slug, $options: "i" } },
            { "variants.name": { $regex: slug, $options: "i" } },
          ],
        }
      : {};

    // Search for products based on the query
    const products = await productModel.find(query);

    // Sending a response with the success status and the search results
    return res.status(200).send({
      productCount: products.length,
      message: "Search products are returned",
      success: true,
      products,
    });
  } catch (error) {
    // Handling errors and sending an error response
    return res.status(400).send({
      message: "Error while searching for products",
      success: false,
      error,
    });
  }
};
