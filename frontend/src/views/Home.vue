<template>
  <div class="home">
    <Banner />
    <div class="sub-title">
      <h3>NEW ARRIVALS</h3>
      <p>When it comes to TVs, there are choices galore on Flipkart.</p>
    </div>
      <ProductPanel />
    <Promotion />
    <div class="sub-title">
      <h3>FEATURED PRODUCTS</h3>
      <p>Shop Laptop feature only the best laptop deals on the market.</p>
    </div>
    <FeaturedProducts />
    <div class="sub-title">
      <h3>FROM OUR BLOG</h3>
      <p>From envelope and slouchy totes to structured shoulder bags and stylish handbags</p>
    </div>
    <ProductBlog />
    <div class="home-footer conteiner">
      <div class="home-footer__wrapper"
            v-for="(i, index) in footerImage"
            :imgData="i"
            :key="index">
        <img :src="require(`../assets/images/${i.img}`)" alt="">
      </div>
    </div>
    <test>
      <!-- <template v-slot:header>
        <h1>Title header</h1>
        <p>Text header</p>
      </template>
      <template v-slot:footer>
        <h1>Title footer</h1>
        <p>text footer</p>
      </template> -->
    </test>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Test from '@/components/HomePage/Test.vue';
import Banner from '@/components/HomePage/Banner.vue';
import Promotion from '@/components/HomePage/PromotionPanel.vue';
import ProductPanel from '@/components/HomePage/ProductPanel.vue';
import FeaturedProducts from '@/components/HomePage/FeaturedProducts.vue';
import ProductBlog from '@/components/HomePage/ProductBlog.vue';

export default {
  name: 'home',
  components: {
    Test,
    Banner,
    Promotion,
    ProductPanel,
    FeaturedProducts,
    ProductBlog,
  },
  props: {
    imgData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      footerImage: [
        { name: 'image1', img: '3.png' },
        { name: 'image2', img: '4.png' },
        { name: 'image3', img: '5.png' },
        { name: 'image4', img: '2.png' },
        { name: 'image5', img: '1.png' },
      ],
    };
  },
  methods: {
    ...mapActions('products', ['getNewArrivalsProducts', 'getFeaturedProducts']), // getProducts
  },
  mounted() {
    this.getNewArrivalsProducts(8); // getProducts
    // this.getPromotionProducts();
    this.getFeaturedProducts();
  },
};
</script>

<style>
/* Home subtitle */
  .sub-title {
    margin: 40px auto;
  }

  p {
    text-transform: none;
  }

  /* Home footer mini-baners */

  .home-footer {
    display: flex;
    margin: 0 auto;
    border-top: 1px solid silver;
    padding: 20px;
  }

  .home-footer img {
    width: 200px;
  }

</style>
