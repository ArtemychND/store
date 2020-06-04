<template>
  <div class="single-product conteiner">
    <div class="single-product-wrap" v-for="i in product" :key="i.id">
      <img :src="require(`@/assets/images/${i.image}300x300.png`)" alt="">
      <div class="single-product-description">
        <h3>{{i.name}}</h3>
        <p><em>Condition:</em>New product</p>
        <h3>{{i.newPrice}}</h3>
        <p class="single-product__about">{{i.about}}</p>
        <div class="order-wrap">
          <input
            type="text"
            placeholder="1"
            class="single-product__qty"
            v-model="product[0].qty">
          <button
            class="single-product__btn"
            :disabled="isProductInCart"
            @click.prevent="addProductToCart(product[0])">
              {{cartBtnText}}
          </button>
        </div>
        <!-- <p class="message-window" v-html="message"></p> -->
        <p style="font-size: 15px">Categories: {{i.category}}</p>
      </div>
    </div>
    <div class="goods-like-this">
      <div
        class="goods-like-this-img"
        v-for="el in similarProduct"
        :key="el.id">
        <img
          :src="require(`@/assets/images/${el.image}150x150.png`)" alt="">
        </div>
      </div>
      <div class="footer-banner">
        <h3>Related Products</h3>
        <p>Shop Laptop feature only the best laptop deals on the market.</p>
        <FeaturedProducts />
      </div>
  </div>
</template>

<script>
// import Eventbus from '@/eventBus.js';
import { mapActions, mapGetters } from 'vuex';
import data from '@/data.js';
import FeaturedProducts from '@/components/HomePage/FeaturedProducts.vue';

export default {
  data() {
    return {
      products: data,
      message: '',
      disabled: false,
      cart: [],
    };
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters('cart', { // this getters use for function `isProductInCart`
      cartItems: 'cartItems',
    }),
    product() {
      return this.products.filter((item) => item.id.toString() === this.id);
    },
    similarProduct() {
      const productCategory = this.product[0].category;
      return this.products.filter(
        (e) => e.category === productCategory && e.id.toString() !== this.id,
      );
    },
    isProductInCart() { // Why this function doesn`t work?
      const isExistId = this.cartItems.filter((i) => i.id === this.product[0].id);
      if (isExistId.length >= 1) {
        return true;
      }
      return false;
    },
    cartBtnText() {
      return this.isProductInCart ? 'Product in cart' : 'Add to cart';
    },
  },
  components: {
    FeaturedProducts,
  },
  methods: {
    ...mapActions('cart', ['addProductToCart']),
    // addCart(obj) {
    //   Eventbus.$emit('addCart', obj); // this condition doesn't work
    //   if (this.qty >= 1) {
    //     this.disabled = true;
    //     this.message = '<b>This product already added to the basket!</b>';
    //   } else if (Eventbus.$on('remove-product') && this.qty > 0) {
    //     this.qty -= 1;
    //     console.log(this.qty);
    //   } else {
    //     this.disabled = false;
    //   }
    // },
  },
};
</script>

<style scoped>
.single-product-wrap {
  display: flex;
}

.single-product-description {
  display: flex;
  flex-direction: column;
  text-align: start;
  line-height: 0.5rem;;
  margin-left: 20px;
}

.single-product__about {
  padding: 20px 0;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
}

.order-wrap {
  margin: 10px 0;
}

.single-product__qty {
  width: 50px;
  padding: 5px;
  text-align: center;
}

.single-product__btn {
  width: 100px;
  padding: 8px;
  margin-left: 10px;
  background-color: #fff;
  border: 1.5px solid #000;
  font-weight: bold;
  font-size: 10px;
}

.message-window {
  font-size: 15px;
  color: red;
  margin: 0;
  padding: 5px;
}

.goods-like-this {
  display: flex;
  width: 300px;
  overflow: hidden;
}

.goods-like-this img {
  width: 65px;
  padding: 5px;
}

.footer-banner {
  margin: 0 auto;
}
</style>
