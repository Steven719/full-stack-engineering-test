import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import StripeContainer from "../../stripe/StripeContainer"; // Import the Stripe container

const Checkout = () => {
  const { cart } = useCart();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = async (token) => {
    try {
      // Send the token to your server to process payment (you'll need to set up the server to handle this)
      const response = await fetch("/api/charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, amount: total * 100 }), // Convert to cents
      });

      const result = await response.json();

      if (result.success) {
        setPaymentStatus("Payment successful!");
      } else {
        setPaymentStatus("Payment failed, please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentStatus("Payment error, please try again later.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
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
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-lg font-semibold">Total: ${total}</p>
      </div>

      {/* Display Stripe payment form */}
      <StripeContainer handlePayment={handlePayment} />

      {paymentStatus && (
        <div className="mt-4 text-lg font-semibold">{paymentStatus}</div>
      )}
    </div>
  );
};

export default Checkout;
