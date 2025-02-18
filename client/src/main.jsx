// import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./contexts/CartContext"; // Import CartProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <CartProvider>
      <App />
    </CartProvider>
  </div>
);
