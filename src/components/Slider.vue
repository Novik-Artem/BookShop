<template>
   <div :class="$style.slides">
      <img :class="[$style.previosSlide, getIsBurgerOpen ? $style.dNone : '']" src="../assets/images/arrow.svg" alt="" @click="goToPreviosSlide">
      <div :class="$style.slide">{{ text }}</div>
      <img :class="$style.nextSlide" src="../assets/images/arrow.svg" alt="" @click="goToNextSlide">
   </div>   
</template>
<script>
   import { mapMutations, mapGetters } from "vuex";
   export default {
      computed: mapGetters(["getIsBurgerOpen"]),
      props: {
         text: String
      },
      components: {
      },
      methods: {
         ...mapMutations(["nextSlide", "previosSlide"]),
         goToNextSlide() {
            this.nextSlide()
         },
         goToPreviosSlide() {
            this.previosSlide()
         }
      },
   }
</script>
<style lang="scss" module>
   .slides {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 10px;
   }
   .slide {
      font-size: 20px;
      margin: 0 40px;
      order: 2;
      max-width: 900px;
      font-style: italic;
   }
   .previosSlide {
      order: 1;
      width: 40px;
      height: 40px;
      rotate: 180deg;
   }
   .previosSlide.dNone {
      display: none;
   }
   .nextSlide {
      order: 3;
      width: 40px;
      height: 40px;
   }
   @media (max-width: 840px) {
      .slide {
         margin: 0 20px;
      }
   }
</style>