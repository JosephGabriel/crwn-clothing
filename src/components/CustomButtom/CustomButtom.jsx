import React from "react";

import "./CustomButtom.scss";

const CustomButtom = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button
      className={`${isGoogle ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButtom;
