<template>
      <div class="home">
            <Carousel
            :navigation="true"
            :pagination="true"
            :startAutoPlay="false"
            :timeout="5000"
            class="carousel"
            v-slot="{ currentSlide }"
            >
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info">
                <img :src="'/images/'+slide+'.jpeg'" alt="" />
                </div>
            </Slide>
            </Carousel>
        </div>
</template>
<script lang="ts">
import Carousel from "./slider/carousel-dash.vue";
import Slide from "./slider/slider-dash.vue";

export default {
  name: "Home",
  components: { Carousel, Slide },
  setup() {
    const carouselSlides = ["bg-1", "bg-2", "bg-3"];
    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 70vh;
  height: 70vh;
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
