import { CartActionsType } from "./cartTypes";

export const toggleCartHidden = () => ({
  type: CartActionsType.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionsType.ADD_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: CartActionsType.CLEAR_ITEM,
  payload: item,
});

export const clearCart = (item) => ({
  type: CartActionsType.CLEAR_CART,
});

export const removeItem = (item) => ({
  type: CartActionsType.REMOVE_ITEM,
  payload: item,
});
