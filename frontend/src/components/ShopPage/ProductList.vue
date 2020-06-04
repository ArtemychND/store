<template>
  <div class="product-list">
    <FilterHeader />
    <div class="shop-product-wrap" :class="{'grid' : pager.style === 'grid'}">
      <BaseProduct v-for="item in products" :key="item.id" :product="item" :type="type"/>
    </div>
    <Pagination :pager="pager"/>
  </div>
</template>

<script>
import FilterHeader from '@/components/ShopPage/FilterHeader.vue';
import BaseProduct from '@/components/ShopPage/BaseProduct.vue';
import Pagination from '@/components/ShopPage/Pagination.vue';
// import data from '@/data.js';
import { mapGetters } from 'vuex';
// import EventBus from '@/eventBus.js';

export default {
  components: {
    FilterHeader,
    BaseProduct,
    Pagination,
  },
  data() {
    return {
      // products: data,
    };
  },
  computed: {
    ...mapGetters('products', {
      products: 'getProducts',
      pager: 'getPager',
    }),
  },
};
</script>

<style>
.product-list {
  margin: 0 auto;
  max-width: 800px;
}
.shop-product-wrap {
  display: flex;
  flex-wrap: wrap;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  margin-left: 70px;
}
</style>
