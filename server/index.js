import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
// import productRoutes from "./routes/productRoutes.js";

dotenv.config(); // Load environment variables

const app = express();
const port = 5000;

// Body parser middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes); // Example route for users
app.use("api/orders", orderRoutes);
// app.use("/api/products", productRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017//e-commerce")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
