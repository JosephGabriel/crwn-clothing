export const addItemToCart = (cartItems, itemToAdd) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (cartItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (cartItemExists.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
