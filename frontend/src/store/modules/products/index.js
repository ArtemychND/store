import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
  products: [],
  pager: {},
  newProducts: [],
  featuredProducts: [],
};

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};
