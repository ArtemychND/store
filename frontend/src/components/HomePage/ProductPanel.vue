<template>
  <div class="new-products conteiner">
    <NewProduct v-for="item in newProducts" :key="item.id" :product="item"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewProduct from '@/components/NewArrival.vue';

export default {
  computed: {
    ...mapGetters('products', {
      newProducts: 'getNewProducts',
    }),
  },
  components: {
    NewProduct,
  },
};
</script>

<style>
.new-products {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 50px;
  max-width: 700px;
  flex-wrap: wrap;
}
</style>
