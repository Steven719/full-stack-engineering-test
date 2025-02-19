// import React from 'react';
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleClear = () => {
    clearCart();
  };

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      <div>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>
                  ${item.price} x {item.quantity}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handleClear}
          className="bg-red-500 text-white py-2 px-4 rounded-lg"
        >
          Clear Cart
        </button>
        <Link
          to="/checkout"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
