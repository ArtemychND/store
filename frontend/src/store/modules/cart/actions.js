function addProductToCart({ state, commit }, product) {
  const cartItem = state.products.find((item) => item.id === product.id);
  if (!cartItem) {
    commit('pushProductToCart', product);
  } else {
    commit('incrementItemQuantity', cartItem);
  }
}

function removeItem({ state, commit }, id) {
  const cartItem = state.products.find((i) => i.id === id);
  commit('decrementItemQuantity', cartItem);
}

export default {
  addProductToCart,
  removeItem,
};
