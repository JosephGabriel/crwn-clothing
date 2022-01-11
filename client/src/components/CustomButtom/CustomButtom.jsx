import React from "react";

import { CustomButtomContainer } from "./CustomButtomStyles";

const CustomButtom = ({ children, ...props }) => {
  return <CustomButtomContainer {...props}>{children}</CustomButtomContainer>;
};

export default CustomButtom;
