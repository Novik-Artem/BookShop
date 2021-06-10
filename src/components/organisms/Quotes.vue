<template>
  <div :class="$style.quotes">
    <img
      :class="$style.left"
      src="../../assets/images/arrow.svg"
      alt=""
      @click="onPrev"
    />
    <div :class="$style.content">{{ quoteText }}</div>
    <img src="../../assets/images/arrow.svg" alt="" @click="onNext" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    quoteText: String,
  },
  methods: {
    ...mapMutations(["nextQuote", "previosQuote"]),
    onNext() {
      this.nextQuote();
    },
    onPrev() {
      this.previosQuote();
    },
  },
};
</script>

<style lang="scss" module>
.quotes {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  margin: 0 0 25px 0;
  font-size: 16px;

  img {
    width: 50px;
    height: 20px;
  }
  @media (max-width: 1100px) {
    padding: 5px 0;
    img {
      width: 40px;
      height: 17px;
    }
  }
  .left {
    transform: rotate(180deg);
  }
  .content {
    padding: 0 5px;
  }
}
</style>