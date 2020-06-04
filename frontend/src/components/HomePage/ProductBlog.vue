<template>
  <div class="product-blog conteiner">
    <ProductBlogElement
      v-for="elem in BlogItems"
      :key="elem.img"
      :Item="elem"/>
  </div>
</template>

<script>
import ProductBlogElement from '@/components/ProductBlogElement.vue';

export default {
  components: {
    ProductBlogElement,
  },
  data() {
    return {
      BlogItems: [
        {
          img: 'blog-07-570x365.png',
          date: 'By Furnir - Apr 4, 2018',
          text: 'Furniture Complex construction',
        },
        {
          img: 'blog-10-570x365.png',
          date: 'By Furnir - Apr 4, 2018',
          text: 'It can be made from many materials',
        },
        {
          img: 'blog-08-570x365.png',
          date: 'By Furnir - Apr 4, 2018',
          text: 'Furniture can be a product of design',
        },
      ],
    };
  },
};
</script>

<style>
.product-blog {
  display: flex;
  justify-content: space-between;
}
</style>
