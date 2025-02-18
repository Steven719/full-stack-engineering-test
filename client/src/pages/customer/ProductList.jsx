// import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext"; // Import the hook

const ProductList = (props) => {
  const { addToCart } = useCart(); // Get the addToCart function from context

  return (
    <div className="grid grid-cols-3 gap-4">
      {props.products.map((product) => (
        <div key={product.id} className="border p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <h3 className="text-xl font-bold mt-2">{product.title}</h3>
          <p className="text-lg">${product.price}</p>
          <Link to={`/product/${product.id}`} className="text-blue-500 mt-2">
            View Details
          </Link>
          <button
            className="bg-blue-500 text-white mt-2 p-2"
            onClick={() => addToCart(product)} // Add item to cart
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
