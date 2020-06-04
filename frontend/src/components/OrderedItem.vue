<template>
  <div>
      <div class="order" v-for="product in cartItems" :key="product.id">
        <img :src="require(`@/assets/images/${product.image}`)" alt="">
          <div class="order-description">
            <p>{{product.name}}</p>
            <span>{{product.qty}} x {{product.price}} $</span>
          </div>
          <div>
            <a href="#" @click.prevent="removeItem(product.id)">
              <i class="fas fa-trash-alt"></i>
            </a>
          </div>
      </div>
      <div class="total">
        <p>SUB-TOTAL:</p>
        <span class="calc">{{total}} $</span>
      </div>
      <div class="order-btn">
        <button :disabled="disabled"
          ><router-link to="/cart" class="view-btn">VIEW CART</router-link></button>
        <button href="#">CHECKOUT</button>
      </div>
  </div>
</template>

<script>
// import Eventbus from '@/eventBus.js';
import { mapGetters, mapActions } from 'vuex';
import data from '@/data.js';

export default {
  name: 'order-item',
  data() {
    return {
      disabled: false,
      products: data,
    };
  },
  computed: {
    ...mapGetters('cart', {
      cartItems: 'cartItems',
      total: 'totalPrice',
    }),
    // filteredProducts() {
    //   return
    // }
  },
  methods: {
    ...mapActions('cart', ['removeItem']),
    // removeItem(id) {
    //   Eventbus.$emit('remove-product', id);
    // },
    // viewCart(obj, sum) {
    //   Eventbus.$emit('view-cart', obj, sum);
    //   this.disabled = true;
    // },
  },
};
</script>

<style>
.order {
  display: flex;
  align-items: center;
}

.order div {
  margin-left: 30px;
}

.total {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.order-btn {
  background-color: black;
  text-decoration: none;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 400px;
}

.order-btn button {
  padding: 10px;
  text-decoration: none;
  border: 1px solid #fff;
  color: #fff;
  background-color: black;
}

.view-btn {
  color: #fff;
  text-decoration: none;
}

p {
  margin: 20px;
  font-weight: bold;
}

.order a {
  margin: 40px 0;
}
</style>
