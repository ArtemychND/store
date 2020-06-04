<template>
  <div class="pagination conteiner">
    <ul class="pagination-list" v-if="pager.pages && pager.pages.length">
      <li @click="addPageToProducts(pager.startPage)">
        <router-link
          v-if="pager.currentPage > 1"
          :disabled="pager.currentPage === 1"
          :to="{ query: {page: pager.startPage}}">
          &laquo;first
        </router-link>
      </li>
      <li @click.prevent="addPageToProducts(pager.currentPage - 1 || 1)">
          <router-link
          v-if="pager.currentPage > 1"
          :disabled="pager.currentPage <= 1"
          :to="{ query: {page: pager.currentPage - 1 || 1} }">
            &lt;prev
          </router-link>
      </li>
      <li
        v-show="pager.pages.length > 1"
        v-for="page in paginationCut"
        :key="page"
        :class="{'active': pager.currentPage === page}"
        @click="addPageToProducts(page)">
        <router-link :to="{query: {page: page}}">{{page}}</router-link>
      </li>
      <li @click="addPageToProducts(pager.currentPage + 1)">
        <router-link :disabled="pager.currentPage === pager.endPage"
        v-if="pager.currentPage < pager.endPage"
        :to="{query: {page: pager.currentPage + 1}}">
          next&gt;
        </router-link>
      </li>
      <li @click="addPageToProducts(pager.endPage)">
        <router-link
          v-if="pager.currentPage < pager.endPage"
          :disabled="pager.currentPage === pager.endPage"
          :to="{query: {page: pager.endPage}}">last&raquo;</router-link>
      </li>
    </ul>
    <div class="elements-on-page">Showing {{pager.startIndex}}-{{pager.endIndex + 1}}
    of {{pager.totalItems}}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    pager: {},
  },
  computed: {
    paginationCut() {
      const fr = (this.pager.currentPage - 2 > 0) ? this.pager.currentPage - 3 : 0;
      const to = (this.pager.currentPage + 3 < this.pager.endPage)
        ? this.pager.currentPage + 3 : this.pager.endPage;

      if (this.pager.totalPages > 5) {
        return this.pager.pages.slice(fr, to);
      }
      return this.pager.pages;
    },
  },
  mounted() {
    console.log(this.$route.query);
  },
  methods: {
    ...mapActions('products', ['addProducts']),
    addPageToProducts(page) {
      this.addProducts({
        page,
        limit: this.pager.pageSize,
        sort: this.pager.sort,
        style: this.pager.style,
        sortBrand: this.pager.sortBrand,
      });
    },
  },
};
</script>

<style scoped>
.pagination {
  margin: 30px auto;
}
.pagination-list {
  display: flex;
  justify-content: center;
}

.pagination a {
  color: black;
  float: left;
  padding: 0 10px;
  text-decoration: none;
  transition: background-color .3s;
}

.pagination li.active {
  background-color: #4CAF50;
}

.pagination li.active a {
  color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd};
</style>
