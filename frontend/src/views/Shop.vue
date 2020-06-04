/* eslint-disable no-param-reassign */
<template>
  <div class="shop conteiner">
    <Sidebar />
    <ProductList />
  </div>
</template>

<script>
import Sidebar from '@/components/ShopPage/Sidebar.vue';
import ProductList from '@/components/ShopPage/ProductList.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    ProductList,
    Sidebar,
  },
  computed: {
    ...mapGetters('products', {
      pager: 'getPager',
    }),
  },
  methods: {
    ...mapActions('products', ['addProducts']),
  },
  mounted() {
    const { page, limit, sort } = this.$route.query;
    this.addProducts({ page: page || 1, limit: limit || 24 });
    this.$router.push({
      query: {
        page,
        limit: limit || 24,
        sort,
      },
    });
  },
  // watch: {
  //   '$route.query.page': {
  //     immediate: true,
  //     handler(p) {
  //       const { limit, sort, style } = this.$route.query;
  //       // console.log(limit, sort);
  //       const page = parseInt(p, 10);
  //       if (page !== this.pager.currentPage) {
  //         this.addProducts({
  //           page, limit: limit || 24, sort, style,
  //         });
  //       }
  //     },
  //   },
  //   '$route.query.limit': {
  //     immediate: true,
  //     handler(l) {
  //       // const { page, sort } = this.$router.query;
  //       const limit = parseInt(l, 10);
  //       this.addProducts({ limit });
  //     },
  //   },
  // },
};
</script>

<style scoped>
.shop {
  display: flex;
  margin-bottom: 50px;
}

</style>
