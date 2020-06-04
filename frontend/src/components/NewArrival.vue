<template>
  <div class="new-arrivals">
    <img :src="require(`@/assets/images/${product.imageUrl}`)" alt="">
    <div class="title">
      {{product.name}}
    </div>
    <span class="Price">{{product.price}}$</span>
  </div>
</template>

<script>

export default {
  props: {
    product: {},
  },
};
</script>

<style scoped>
.new-arrivals img {
  width: 150px;
  height: 150px;
}

.single-product span {
  padding: 5px;
}

</style>
