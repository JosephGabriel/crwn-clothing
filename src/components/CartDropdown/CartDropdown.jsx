import React from "react";
import { connect } from "react-redux";

import "./CartDropdown.scss";

import { selectCartItems } from "../../redux/cart/cartSelectors";

import CustomButtom from "../CustomButtom/CustomButtom";
import CartItem from "../CartItem/CartItem";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
