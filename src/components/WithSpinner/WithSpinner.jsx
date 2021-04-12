import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./WithSpinnerStyles";

const WithSpinner = (Component) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <Component {...otherProps}/>
  );
};

export default WithSpinner;
