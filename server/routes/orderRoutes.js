import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// 📍 Create Order
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📍 Get All Orders (Merchant)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("items.product");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📍 Get User Orders (Customer)
router.get("/user/:userId", async (req, res) => {
  try {
    const userOrders = await Order.find({ user: req.params.userId }).populate(
      "items.product"
    );
    res.json(userOrders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📍 Update Order Status (Merchant)
router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📍 Delete Order (if needed)
router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
