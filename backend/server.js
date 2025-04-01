// Import necessary modules
import express from "express"; // Express framework for building web applications
import dotenv from "dotenv"; // For loading environment variables
import cors from "cors"; // Middleware for enabling CORS
import formRoutes from "./routes/formRoutes.js"; // Importing form-related routes
import connectToMongoDB from "./DB/ConnectToMongoDB.js"; // Function to connect to MongoDB

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Define a basic route for the root URL
app.get("", (req, res) => {
  res.send("Hello World!"); // Respond with a simple message
});

// Use form-related routes under the "/api/form" path
app.use("/api/form", formRoutes);

const PORT = process.env.PORT || 5000; // Define the port from environment variables or default to 5000

// Start the server and listen on the specified port
app.listen(PORT, () => {
  try {
    connectToMongoDB(); // Connect to MongoDB when the server starts
    console.log(`server is running on port ${PORT}`); // Log the server status
  } catch (error) {
    console.log("Error starting the server", error); // Log any errors during startup
  }
});
