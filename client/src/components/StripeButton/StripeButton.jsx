import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const API_KEY =
    "pk_test_51I6L4NBp2IrUmTJGCwoq0zYziG1fBRhtLVifhu5wPzPFc64FEKUblD6HC67rCNjMMjgWx0lsa3RDASmWy0ekqSNS005qmpUVs1";

  const onToken = (token) => {
    console.log(token);
    axios({
      url: "http://localhost:5000/payment",
      method: "POST",
      data: {
        amount: stripePrice,
        token,
      },
    })
      .then((response) => {
        console.log(response);
        alert("Payment Successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={API_KEY}
    />
  );
};

export default StripeButton;
