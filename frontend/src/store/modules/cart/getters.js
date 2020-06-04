const cartItems = (state) => state.products;
const totalPrice = (state) => state.products.reduce((sum, i) => sum + (i.qty * i.price), 0);
const cartProductsLength = (state) => state.products.length;

export default {
  cartItems,
  totalPrice,
  cartProductsLength,
};
