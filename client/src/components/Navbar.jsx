// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          E-Commerce PWA
        </Link>
        <div>
          <Link to="/products" className="text-gray-300 hover:text-white mx-2">
            Shop
          </Link>
          <Link to="/cart" className="text-gray-300 hover:text-white mx-2">
            Cart
          </Link>
          <Link
            to="/merchant/dashboard"
            className="text-gray-300 hover:text-white mx-2"
          >
            Merchant
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
