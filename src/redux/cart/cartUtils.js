export const addItemToCart = (cartItems, itemToAdd) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (cartItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quatity: cartItem.quatity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
