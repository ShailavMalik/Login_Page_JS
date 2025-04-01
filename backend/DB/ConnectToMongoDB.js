// Import the mongoose library for interacting with MongoDB
import mongoose from "mongoose";

// Function to establish a connection to the MongoDB database
const connectToMongoDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from environment variables
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB"); // Log success message
  } catch (error) {
    // Log an error message if the connection fails
    console.log("Error connecting to MongoDB: ", error.message);
  }
};

// Export the function for use in other parts of the application
export default connectToMongoDB;
