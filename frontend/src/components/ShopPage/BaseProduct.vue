<template>
  <div class="base-product">
    <router-link :to="`/product/${product.id}`" :class="{'list' : pager.style === 'list'}">
      <img :src="require(`@/assets/images/${product.imageUrl}`)" alt="">
      <p>{{product.name}}</p>
      <span>{{product.price}}$</span>
      <div class="icon-wrap">
        <a href="#" class="icon" @click.prevent="addProductToCart(item)">
          <i class="fas fa-shopping-cart"></i>
        </a>
        <a href="#" class="icon">
          <i class="fas fa-tags"></i>
        </a>
        <a href="#" class="icon">
          <i class="far fa-heart"></i>
        </a>
      </div>
      <p v-show="pager.style === 'list'">{{product.content}}</p>
    </router-link>
    <!-- <slot name="grid"></slot>
    <slot name="list"></slot> -->
  </div>
</template>

<script>
// import Eventbus from '@/eventBus.js';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      item: {
        id: this.product.id,
        name: this.product.name,
        about: this.product.content,
        category: this.product.categoryId,
        image: this.product.imageUrl,
        price: this.product.price,
        qty: 1,
      },
    };
  },
  computed: {
    ...mapGetters('products', {
      pager: 'getPager',
    }),
  },
  // created() {
  //   Eventbus.$on('add-style', (style) => {
  //     this.type = style;
  //   });
  // },
  props: {
    product: {},
  },
  methods: {
    ...mapActions('cart', ['addProductToCart']),
    // addCart(obj) {
    //   Eventbus.$emit('addCart', obj);
    // },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
}
img {
  padding: 5px;
  width: 200px;
}
.icon-wrap {
  margin: 10px;
}
.icon i{
  padding: 5px;
}

p, span {
  margin: 10px;
  font-size: 15px;
}
</style>
