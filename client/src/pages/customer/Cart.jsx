// import React from 'react';
import { useCart } from "../../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        ))
      )}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
