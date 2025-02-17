// import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to E-Commerce PWA</h1>
      <Link
        to="/products"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
