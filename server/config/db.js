const mongoose = require("mongoose");
mongoose
  .connect("e-commerce")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB:", err));
