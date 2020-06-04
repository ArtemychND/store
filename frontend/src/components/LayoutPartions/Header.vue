
<template>
  <div class="header-content">
      <div class="header-contact">
          <div class="header-contact__wrapper">
              <p>Call Us +0123456789</p>
              <a href="http://info@example.com">info@example.com</a>
            <div class="social facebook">
              <a href="https://facebook.com">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://pinterest.com">
                <i class="fab fa-pinterest"></i>
              </a>
              <a href="https://plus.google.com">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="https://linkedin.com">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
      </div>
    <div id="nav">
        <h1>Furnir</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/shop">Shop</router-link>
        <div class="user-bar">
          <transition name="find">
            <input type="search" class="search" v-show="show">
          </transition>
          <button class="fa fa-search" v-on:click="show = !show"></button>
          <a href="#" class="nav-btn">
            <i class="fas fa-cog"></i>
          </a>
          <a href="/cart" class="shop-bag nav-btn" @click.prevent="orderedItems = !orderedItems">
            <i class="fas fa-shopping-bag"></i>
          </a>
          <span class="shoping-count">{{cartLength}}</span>
              <OrderedItem
                class="ordered-items"
                v-show="orderedItems && cartLength !== 0"/>
        </div>
    </div>
  </div>
</template>

<script>
import OrderedItem from '@/components/OrderedItem.vue';
import Eventbus from '@/eventBus.js';
import { mapGetters } from 'vuex';

export default {
  name: 'header-content',
  data() {
    return {
      show: false,
      orderedItems: false,
    };
  },
  methods: {
    subscribeToCart() {
      Eventbus.$emit('cartSubscribe', this.cart);
    },
  },
  computed: {
    ...mapGetters('cart', {
      cartLength: 'cartProductsLength',
    }),
  },
  // created() {
  //   // addCart() {
  //   //   this.$root.$on('addcard', )
  //   // },
  //   Eventbus.$on('addCart', (obj) => {
  //     const cartItem = this.cart.find((item) => item.id === obj.id);
  //     if (cartItem) {
  //       cartItem.qty += 1;
  //     } else {
  //       this.cart.push({
  //         id: obj.id,
  //         name: obj.name,
  //         image: obj.image,
  //         price: parseInt(obj.newPrice, 10),
  //         qty: obj.qty,
  //       });
  //     }
  //     const productTotal = obj.qty * parseInt(obj.newPrice, 10);
  //     this.total += productTotal;
  //     this.subscribeToCart();
  //   });
  //   Eventbus.$on('remove-product', (id) => {
  //     const cartItem = this.cart.find((item) => item.id === id);
  //     if (cartItem.qty - 1 < 1) {
  //       this.cart = this.cart.filter((c) => c.id !== id);
  //       this.total -= cartItem.price;
  //     } else {
  //       cartItem.qty -= 1;
  //       this.total -= cartItem.price;
  //     }
  //   });
  // },
  components: {
    OrderedItem,
  },
};
</script>

<style>
.header-contact {
  font-size: 10px;
  background-color: rgb(247, 247, 247);
}

.header-contact__wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 50px;
}

.header-contact a {
  padding-left: 10px;
}

.social {
  margin-left: auto;
}

.social a {
    color: #000;
    font-size: 15px;
    text-decoration: none;
}

.facebook a:hover {color: #3b5998;}

#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-btn {
  padding-left: 15px;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fa-search {
  background: none;
  color: #000;
  border: none;
  outline: none;
}

.user-bar {
  position: relative;
}

.search {
  border-radius: 20px;
  outline: none;
  position: absolute;
  top: 0;
  right: 100px;
}

.shop-bag {
  position: relative;
}

.ordered-items {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  top: 20px;
  right: 10px;
  background-color: #fff;
}

p {
  font-size: 10px;
}

.find-enter-active, .find-leave-active {
  transition: opacity .8s;
}
.find-enter, .find-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
