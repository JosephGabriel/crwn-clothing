import { TOGGLE_CART_HIDDEN } from "./cartTypes";

export const toggleCartHidden = (payload) => ({
  type: TOGGLE_CART_HIDDEN,
  payload,
});
