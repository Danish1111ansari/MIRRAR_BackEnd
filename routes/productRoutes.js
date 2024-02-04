// Import necessary modules and controllers
import express from "express"; // Express framework for building routes
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductController,
  searchProductController,
  updateProductController,
} from "./../controllers/productControllers.js"; // Import controllers for product-related operations

// Create an instance of the Express Router
const router = express.Router();

// Define routes for product-related operations

// Route to get all products
router.get("/all-products", getAllProductsController);

// Route to get a specific product by ID
router.get("/get-product/:id", getProductController);

// Route to create a new product
router.post("/create-product", createProductController);

// Route to update a product by ID
router.put("/update-product/:id", updateProductController);

// Route to delete a product by ID
router.delete("/delete-product/:id", deleteProductController);

// Route to search for products by name, description, or variant name
router.get("/search-product/:slug", searchProductController);

// Export the router to be used in the main application
export default router;
