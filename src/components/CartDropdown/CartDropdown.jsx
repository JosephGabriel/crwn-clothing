import React from "react";
import { connect } from "react-redux";

import "./CartDropdown.scss";

import CustomButtom from "../CustomButtom/CustomButtom";

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
