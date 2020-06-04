<template>
  <div class="slider">
    <div class="slider-home">
        <div class="slider-home__text">
            <h6>chair <br> new collection</h6>
            <h2>new arrivals</h2>
            <h1>comfort chair</h1>
            <p>Furniture can be made using a variety of woodworking
            joints which often <br> reflect the local culture.</p>
            <a href="/shop" class="shop-btn">SHOP NOW</a>
        </div>
        <div class="slider-home__image">
          <img src="@/assets/images/product_19.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
    .slider {
      background-color: rgb(247, 247, 247);
    }

    .slider-home {
      height: 400px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 50px;
    }

    .slider-home__text  {
        text-transform: uppercase;
        text-align: start;
    }

    .slider-home__image img {
      max-width: 400px;
    }

    h2 {
      font-weight: lighter;
    }

    .slider-home__text p {
      margin-bottom: 20px;
    }

    .shop-btn {
      padding: 10px;
      color: #fff;
      background-color: #000;
      text-decoration: none;
    }
</style>
