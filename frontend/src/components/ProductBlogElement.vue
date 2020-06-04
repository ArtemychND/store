<template>
  <div class="blog-element">
    <img :src=" require(`@/assets/images/${Item.img}`) " alt="">
    <p>{{Item.date}}</p>
    <h5>{{Item.text}}</h5>
  </div>
</template>

<script>
export default {
  props: {
    Item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
.blog-element {
  margin-bottom: 50px;
}

.blog-element img {
  width: 300px;
}

.blog-element p {
  font-size: 10px;
}
</style>
