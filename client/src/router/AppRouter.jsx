// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/customer/Home";
import ProductList from "../pages/customer/ProductList";
// import ProductDetails from "../pages/customer/ProductDetails";
// import Cart from "../pages/customer/Cart";
// import Checkout from "../pages/customer/Checkout";
// import Dashboard from "../pages/merchant/Dashboard";
// import ManageProducts from "../pages/merchant/ManageProducts";
// import ManageOrders from "../pages/merchant/ManageOrders";
// import AccountSettings from "../pages/merchant/AccountSettings";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/merchant/dashboard" element={<Dashboard />} />
        <Route path="/merchant/products" element={<ManageProducts />} />
        <Route path="/merchant/orders" element={<ManageOrders />} />
        <Route path="/merchant/account" element={<AccountSettings />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
