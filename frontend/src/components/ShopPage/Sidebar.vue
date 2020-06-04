<template>
  <div class="sidebar">
    <h3>Brand</h3>
      <ul v-for="i in SidebarBrands" :key="i.brand">
        <li>
          <span>
            <input type="checkbox" @change="addFilterBrand(i.typeVariant, i.checked = !i.checked)">
            {{i.brand}}
          </span>
        </li>
      </ul>
    <h3>Category</h3>
      <ul v-for="i in SidebarCategorys" :key="i.category">
        <li>
          <span>
            <input type="checkbox">
            {{i.category}}
          </span>
        </li>
      </ul>
    <h3>Filter</h3>
      <ul v-for="(i, index) in SidebarBrands" :key="index">
        <li>
          <span>
            <input type="checkbox">
            {{i.brand}}
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('products', {
      pager: 'getPager',
    }),
  },
  methods: {
    ...mapActions('products', ['addProducts']),
    addFilterBrand(brand, chk) {
      if (chk === true) {
        this.appliedFilters.push(brand);
        this.addProducts({
          page: this.pager.currentPage,
          limit: this.pager.pageSize,
          sort: this.pager.sort,
          style: this.pager.style,
          sortBrand: this.appliedFilters,
        });
      }
      if (chk === false) {
        this.appliedFilters.splice(this.appliedFilters.indexOf(brand), 1);
        this.addProducts({
          page: this.pager.currentPage,
          limit: this.pager.pageSize,
          sort: undefined,
          style: this.pager.style,
          sortBrand: this.appliedFilters,
        });
      }
    },
  },
  data() {
    return {
      appliedFilters: [],
      SidebarBrands: [
        {
          id: 1,
          brand: 'Aspen Home',
          typeVariant: 'A',
          checked: false,
        },
        {
          id: 2,
          brand: 'Baker',
          typeVariant: 'B',
          checked: false,
        },
        {
          id: 3,
          brand: 'Bernhardt',
          typeVariant: 'C',
          checked: false,
        },
        {
          id: 4,
          brand: 'Century',
          typeVariant: 'D',
          checked: false,
        },
        {
          id: 5,
          brand: 'Drexel',
          typeVariant: 'E',
          checked: false,
        },
        // {
        //   id: 11,
        //   brand: 'Ethan Allen',
        //   checked: false,
        // },
        // {
        //   id: 13,
        //   brand: 'Henredon',
        //   checked: false,
        // },
        // {
        //   id: 15,
        //   brand: 'Hooker Furniture',
        //   checked: false,
        // },
        // {
        //   id: 17,
        //   brand: 'Stickley',
        //   checked: false,
        // },
      ],
      SidebarCategorys: [
        {
          category: 'Chair',
          checked: false,
        },
        {
          category: 'Clutch',
          checked: false,
        },
        {
          category: 'Half-moon',
          checked: false,
        },
        {
          category: 'Sofa Sets',
          checked: false,
        },
        {
          category: 'Table',
          checked: false,
        },
        {
          category: 'Trending',
          checked: false,
        },
        {
          category: 'Wardrobe',
          checked: false,
        },
        {
          category: 'Wooden',
          checked: false,
        },
      ],
    };
  },
};
</script>

<style>
  .sidebar {
    text-align: start;
    flex-grow: 2;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 5px;
  }
</style>
