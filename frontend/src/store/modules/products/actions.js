import axios from 'axios';
// import Product from '@/objects/Product';

const ROOT_URL = 'http://localhost:4000/products';

function addProducts({ commit }, {
  page, limit, sort, style, sortBrand = [],
}) {
  return new Promise((resolve, reject) => {
    axios({
      url: `${ROOT_URL}?page=${page || 1}&limit=${limit || 24}&sort=${sort}&sortBrand=${sortBrand}`,
      method: 'GET',
    })
      .then((resp) => {
        const { pager, pageOfItems } = resp.data;
        // const Products = pageOfItems.map(productFromServer => {
        //   return new Product(
        //     productFromServer.id,
        //   );
        // });
        // commit('SET_PRODUCTS', { pager, pageOfItems });
        pager.pageSize = limit || 24;
        pager.sort = sort;
        pager.style = style;
        // if (sortBrand) pager.brand.push(sortBrand);
        commit('setProducts', pageOfItems);
        commit('setPager', pager);
        // console.log(page, limit, sort);
        console.log(pager);
      })
      .catch((err) => {
        reject(err);
        throw new Error(err);
      });
  });
}

// function getPromotionProducts({ commit }) {
//   return new Promise((_res, rej) => {
//     axios({
//       url: `${ROOT_URL}?type=promotion`,
//       method: 'GET',
//     })
//       .then((resp) => {
//         commit('updatePromotionProducts', resp.data);
//       })
//       .catch((err) => {
//         rej(err);
//         throw new Error(err);
//       });
//   });
// }

function getNewArrivalsProducts({ commit }) {
  return new Promise((_resolve, reject) => {
    axios({
      url: `${ROOT_URL}?type=new`,
      method: 'GET',
    })
      .then((resp) => {
        const data = resp.data.slice(0, 8); // I'm cut the array, for a home page.
        commit('updateNewArrivals', data);// product panel exist from 8 elements
      })
      .catch((err) => {
        reject(err);
        throw new Error(err);
      });
  });
}

function getFeaturedProducts({ commit }) {
  return new Promise((resolve, reject) => {
    axios({
      url: `${ROOT_URL}?type=featured`,
      method: 'GET',
    })
      .then((resp) => {
        commit('updateFeaturedProducts', resp.data);
      })
      .catch((err) => {
        reject(err);
        throw new Error(err);
      });
  });
}

export default {
  addProducts,
  // getPromotionProducts,
  getNewArrivalsProducts,
  getFeaturedProducts,
};
