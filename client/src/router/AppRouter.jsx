// import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/customer/Home";
import ProductDetails from "../pages/customer/ProductDetails";
import Cart from "../pages/customer/Cart";
import Checkout from "../pages/customer/Checkout";
import Dashboard from "../pages/merchant/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      {/* Customer Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

      {/* Merchant Routes */}
      <Route path="/merchant/dashboard" element={<Dashboard />} />
      {/* Add routes for managing products, orders, and settings */}
    </Routes>
  );
};

export default AppRouter;
