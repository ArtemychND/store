<template>
<!-- class = "conteiner" exist in App.vue and use for all components -->
    <div class="slider-promotion conteiner">
        <template>
          <hooper class="hooper" :progress="true" :autoPlay="true" :playSpeed="3000">
            <slide
              class="slider"
              v-for="i in images"
              :key="i.img">
                <img :src="require(`@/assets/images/${i.img}`)" alt="">
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
          </hooper>
        </template>
    </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
} from 'hooper';

import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      images: [
        { img: 'furni-slider-001-1024x373.png' },
        { img: 'blog-05-570x365.png' },
        { img: 'blog-07-570x365.png' },
        { img: 'blog-08-570x365.png' },
        { img: 'blog-10-570x365.png' },
      ],
    };
  },
};
</script>

<style>
.hooper {
  height: 370px;
}

.slider-btn {
  display: flex;
}

.slider {
  background-size: cover;
}
/* Slider */
.slider-wrapper {
    background-image: url('../../assets/images/furni-slider-001.png');
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: start;
    align-items: center;
    padding: 120px 10px;
}
/* Question: why I can't size text on vertical-center */
.slider-text {
    text-transform: uppercase;
    text-align: start;
}

.slider-image {
    position: relative;
    max-width: 75%;
}

.slider-text button {
    background-color: #fff;
    color: black;
    padding: 10px;
}
</style>
