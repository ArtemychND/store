<template>
  <div class="filter-header">
    <div class="tab-bar__icons">
        <button @click="addStyle('grid')">
          <i class="fas fa-th"></i>
        </button>
        <button @click="addStyle('list')">
          <i class="fas fa-list"></i>
        </button>
        <label for="sort-page"><b>Show per page</b></label>
        <select name="sort-page" class="sort-page" @change="applyLimit($event)">
          <option value="24">24</option>
          <option value="48">48</option>
          <option value="96">96</option>
        </select>
      </div>
      <div class="tab-bar__sorting">
        <label for="sorting-variant"><b>Sort by</b></label>
        <select name="sorting-variant" class="sorting-variant" @change="applySortMethod($event)">
          <option value="">Default Sorting</option>
          <option value="name_desc">Alphabet Sorting A - Z</option>
          <option value="name_asc">Alphabet Sorting Z - A</option>
          <option value="price_desc">Price Sorting from lowest</option>
          <option value="price_asc">Price Sorting from higher</option>
        </select>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import EventBus from '@/eventBus.js';

export default {
  computed: {
    ...mapGetters('products', {
      pager: 'getPager',
    }),
  },
  methods: {
    ...mapActions('products', ['addProducts']),
    applyLimit(event) {
      const { page, sort } = this.$route.query;
      this.$router.push({ query: { page, limit: event.target.value, sort } });
      // console.log(this.$route);
      // console.log(this.$router);
      this.addProducts({
        page: this.pager.currentPage,
        limit: event.target.value,
        sort: this.pager.sort,
        style: this.pager.style,
        sortBrand: this.pager.sortBrand,
      });
    },
    addStyle(str) {
      // EventBus.$emit('add-style', str);
      // const { page, limit, sort } = this.$route.query;
      // this.$router.push({
      //   query: {
      //     page, limit, sort, style: str,
      //   },
      // });
      this.addProducts({
        page: this.pager.currentPage,
        limit: this.pager.pageSize,
        sort: this.pager.sort,
        style: str,
        sortBrand: this.pager.sortBrand,
      });
    },
    applySortMethod(event) {
      const sort = event.target.value;
      const { page, limit } = this.$route.query;
      this.$router.push({ query: { page, limit, sort } });
      this.addProducts({
        page: this.pager.currentPage,
        limit: this.pager.pageSize,
        sort,
        style: this.pager.style,
        sortBrand: this.pager.sortBrand,
      });
    },
  },
};
</script>

<style scoped>
  .filter-header {
    display: flex;
    justify-content: space-between;
    border: 1px solid green;
    padding: 10px;
  }

  .sorting-variant,
  .style-page,
  .sort-page,
  button {
    margin: 5px;
    padding: 5px;
  }
</style>
