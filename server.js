// Import necessary modules and libraries
import express from "express"; // Express framework for building the server
import colors from "colors"; // Colors for console logging
import cors from "cors"; // Cross-Origin Resource Sharing middleware
import morgan from "morgan"; // HTTP request logger middleware
import dotenv from "dotenv"; // Load environment variables
import connectDb from "./config/db.js"; // Database connection function
import productRoutes from "./routes/productRoutes.js"; // Routes for handling product-related requests

// Load environment variables from a .env file
dotenv.config();

// Connect to the database
connectDb();

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Middleware for handling Cross-Origin Resource Sharing
app.use(cors());

// Middleware for logging HTTP requests in development mode
app.use(morgan("dev"));

// Simple route to test if the server is running
app.get("/", (req, res) => {
  res.status(200).send({ message: "hello Danish" });
});

// Route middleware for handling product-related requests
app.use("/api/v1/product", productRoutes);

// Define the port for the server to listen on (default: 8080)
const PORT = process.env.PORT || 8080;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.DEV_MODE}`.bgCyan.white);
});
