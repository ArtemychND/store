<template>
  <div class="cart conteiner">
    <h2>Cart</h2>
    <table class="cart-table">
      <tr v-show="render">
        <td>
          THUMBNAIL
        </td>
        <td>
          PRODUCT
        </td>
        <td>
          PRICE
        </td>
        <td>
          QUANTITY
        </td>
        <td>
          TOTAL
        </td>
        <td>
          REMOVE
        </td>
      </tr>
      <tr v-for="item in cartItems" :key="item.id">
        <td>
          <img :src="require(`@/assets/images/${item.image}`)" alt="">
        </td>
        <td>
          {{item.name}}
        </td>
        <td>
          {{item.price}} $
        </td>
        <td>
          <div class="qty-change">
            <button
              class="btn-change"
              :disabled="item.qty <= 1"
              @click="decrementItemQuantity({id: item.id})">-</button>
              {{item.qty}}
            <button class="btn-change" @click="incrementItemQuantity({id: item.id})">+</button>
          </div>
        </td>
        <td>
          {{item.qty * item.price}} $
        </td>
        <td @click="removeItem(item.id)" class="remove-btn">
          &times;
        </td>
      </tr>
    </table>
    <div class="nav-cart">
      <div class="btn-cart">
        <button>Update Cart</button>
        <button style="margin-left: 10px">
          <router-link to="/shop" class="shop-btn">Continue Shopping</router-link>
        </button>
      </div>
      <div class="cart-coupon">
        <h5>COUPON</h5>
        <p>Enter your coupon code if you have one.</p>
      </div>
      <div class="cart-coupon__input">
        <input type="text">
        <button>Apply coupon</button>
      </div>
    </div>
    <div class="cart-total">
      <h4>CART TOTALS</h4>
      <table>
        <tr>
          <td class="col1">Subtotal</td>
          <td class="position col2">{{total}} $</td>
        </tr>
        <tr>
          <td class="col1">Shipping</td>
          <td class="col2">
            <p class="position">Free shiping</p>
            <p style="text-align: start; margin: 0 10px">Shiping to <b>United States (US)</b></p>
            <p class="position">Change address</p>
          </td>
        </tr>
        <tr>
          <td class="col1">TOTAL</td>
          <td class="position col2">{{total}} $ + Shipping</td>
        </tr>
      </table>
      <button class="checkout-btn">Proceed to checkout</button>
    </div>
  </div>
</template>

<script>
// import Eventbus from '@/eventBus.js';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      render: true,
    };
  },
  computed: {
    ...mapGetters('cart', {
      cartItems: 'cartItems',
      total: 'totalPrice',
    }),
  },
  updated() {
    if (this.cartItems.length === 0) {
      this.render = false;
    }
  },
  // mounted() {
  //   Eventbus.$on('view-cart', (obj, sum) => {
  //     this.products = obj;
  //     this.total = sum;
  //   });
  // },
  methods: {
    ...mapActions('cart', ['removeItem']),
    ...mapMutations('cart', ['incrementItemQuantity', 'decrementItemQuantity']),
    // deleteFromCart(item, i) {
    //   const eachItem = this.products.find((e) => e.id === item.id);
    //   console.log(eachItem);
    //   if (eachItem.qty <= 1) {
    //     this.products.splice(i, 1);
    //   }
    //   eachItem.qty -= 1;
    //   this.total -= eachItem.price;
    // },
  },
};
</script>

<style scoped>
.cart-table,
td {
  border: 1px solid silver;
  margin: auto;
}

.qty-change {
  display: flex;
  justify-content: space-around;
}
.remove-btn {
  font-size: 20px;
  cursor: pointer;
}

.nav-cart {
  margin: 50px 0;
  text-align: start;
}

.nav-cart input {
  padding: 10px;
}

.nav-cart button {
    padding: 10px;
    color: #fff;
    background-color: #000;
    text-decoration: none;
}

.shop-btn {
  color: #fff;
  text-decoration: none;
}

.cart-total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 50px auto;
}

.col1 {
  width: 150px;
}

.col2 {
  width: 250px;
}

.cart-total h4 {
  font-size: 20px;
  font-weight: lighter;
  text-decoration: underline;
}

.position {
  text-align: end;
}

.checkout-btn {
  margin: 30px 0;
  padding: 10px;
  background-color: coral;
  border: currentColor;
}
</style>
