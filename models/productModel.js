import mongoose from "mongoose";

// Define the schema for a product variant
const variantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Variant must have a name
  },
  sku: {
    type: String,
    required: true,
    unique: true, // SKU must be unique across variants
  },
  additionalCost: {
    type: Number,
    default: 0, // Default additional cost is 0
  },
  stockCount: {
    type: Number,
    default: 0, // Default stock count is 0
  },
});

// Define the schema for a product
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Product must have a name
  },
  description: {
    type: String,
    required: true, // Product must have a description
  },
  price: {
    type: Number,
    required: true, // Product must have a price
  },
  variants: [variantSchema], // Embedding variants in the product schema
});

// Create a Mongoose model for the product schema
export default mongoose.model("product", productSchema);
