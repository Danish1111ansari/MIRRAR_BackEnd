import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDb = async () => {
  try {
    // Use the mongoose.connect() method to establish a connection
    const conn = await mongoose.connect(process.env.MONGO_URL);

    // Log a successful connection message with the host information
    console.log(
      `Connected to the MongoDB database at ${conn.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    // Log an error message if the connection fails
    console.log(
      `Error occurred while connecting to the database: ${error}`.magenta
        .bgWhite
    );
  }
};

// Export the connectDb function to be used in other parts of the application
export default connectDb;
