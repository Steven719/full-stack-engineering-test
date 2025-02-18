// import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import { useCart } from "./contexts/CartContext";

const App = () => {
  const { cart } = useCart();
  return (
    <Router>
      <Navbar />
      <div>
        <p>Items in cart: {cart.length}</p>
      </div>
      <AppRouter />
      <Footer />
    </Router>
  );
};

export default App;
