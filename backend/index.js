import express from 'express';
import dotenv from "dotenv"; 
import mongoose from 'mongoose';
import cors from "cors";
import userRoute  from "./route/user.route.js"; // Use named import

// ... rest of your code

// Rest of the code remains the same


import bookRoute from "./route/book.route.js";


const app = express();
dotenv.config(); // Load environment variables from .env
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000; // Use a different port number;
const URI = process.env.MongoDB; // Access MongoDB connection string from .env

// Connect to MongoDB
try {
  mongoose.connect(URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}


//defines route
app.use("/book", bookRoute);
app.use("/user", userRoute);


// ... rest of your application code

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});