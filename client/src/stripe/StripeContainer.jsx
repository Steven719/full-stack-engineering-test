// import React from 'react';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const StripeContainer = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
    } else {
      handlePayment(token);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <CardElement />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="bg-green-500 text-white py-2 px-4 rounded-lg"
      >
        Pay Now
      </button>
    </form>
  );
};

export default StripeContainer;
