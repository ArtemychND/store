const pushProductToCart = (state, product) => {
  state.products.push({
    id: product.id,
    image: product.image,
    price: product.price,
    name: product.name,
    qty: product.qty || 1,
  });
  // const productTotal = product.qty * parseInt(product.newPrice, 10);
  // state.total += productTotal;
};

const incrementItemQuantity = (state, { id }) => {
  const cartItem = state.products.find((item) => item.id === id);
  cartItem.qty += 1;
  // const productTotal = cartItem.qty * cartItem.price;
  // state.total += productTotal;
};

const decrementItemQuantity = (state, { id }) => {
  const cartItem = state.products.find((item) => item.id === id);
  if (cartItem.qty - 1 < 1) {
    state.products = state.products.filter((c) => c.id !== id);
    // state.total -= cartItem.price;
  } else {
    cartItem.qty -= 1;
    // state.total -= cartItem.price;
  }
};

export default {
  pushProductToCart,
  incrementItemQuantity,
  decrementItemQuantity,
};
