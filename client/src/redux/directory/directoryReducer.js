import { SHOP_DATA } from "./directory";

const INITIAL_STATE = {
  sections: SHOP_DATA,
};

const directoryReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default directoryReducer;
