import React from "react";

import "./CustomButtom.scss";

const CustomButtom = ({ children, inverted, isGoogle, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogle ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButtom;
