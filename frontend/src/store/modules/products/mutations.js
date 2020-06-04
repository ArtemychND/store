const updateNewArrivals = (state, products) => {
  state.newProducts = products;
};

const updateFeaturedProducts = (state, products) => {
  state.featuredProducts = products;
};

const setProducts = (state, products) => {
  state.products = products;
};

const setPager = (state, pager) => {
  state.pager = pager;
  // state.pager.currentPage = page;
  // state.pager.limit = limit;
  // state.pager.sort = sort;
};

export default {
  setProducts,
  setPager,
  updateNewArrivals,
  updateFeaturedProducts,
};
