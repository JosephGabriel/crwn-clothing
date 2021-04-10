import { SHOP_DATA } from "./shop";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
