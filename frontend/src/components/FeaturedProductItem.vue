<template>
  <div class="feature-item">
    <img :src=" require(`@/assets/images/${product.imageUrl}`) " alt="">
    <p>{{product.name}}</p>
    <span>{{product.price}}$</span>
  </div>
</template>

<script>
// import Product from '@/objects/Product';

export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  //   props: {
  //   product: {
  //     type: Product,
  //     default: () => {},
  //   },
  // },
};

</script>

<style>
.feature-item {
  padding: 10px;
}
</style>
