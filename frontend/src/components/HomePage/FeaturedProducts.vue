<template>
  <div class="featured-product conteiner">
    <FeaturedItem v-for="i in featuredProducts" :key="i.id" :product="i"/>
  </div>
</template>

<script>
import FeaturedItem from '@/components/FeaturedProductItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    FeaturedItem,
  },
  computed: {
    ...mapGetters('products', {
      featuredProducts: 'getFeaturedProducts',
    }),
  },
};
</script>

<style>
.featured-product {
  display:flex;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
