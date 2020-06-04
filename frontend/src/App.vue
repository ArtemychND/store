<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/LayoutPartions/Header.vue';
import Footer from '@/components/LayoutPartions/Footer.vue';

export default {
  name: 'Content',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.conteiner{
  max-width: 1024px;
  margin: 0 auto;
}
</style>
