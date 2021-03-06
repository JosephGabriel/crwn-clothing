import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const API_KEY =
    "pk_test_51I6L4NBp2IrUmTJGCwoq0zYziG1fBRhtLVifhu5wPzPFc64FEKUblD6HC67rCNjMMjgWx0lsa3RDASmWy0ekqSNS005qmpUVs1";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: stripePrice,
        token,
      },
    })
      .then((reponse) => {
        console.log(reponse);
        alert("Payment successfull");
      })
      .catch((error) => {
        alert("Error");
      });

    console.log(token);
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
