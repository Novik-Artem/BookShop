<template>
  <header :class="$style.header">
    <div :class="$style.profile" @click="$router.push('/user')">
      <img src="../../assets/images/ava.jpg" alt="" />
      <div>Sasha</div>
    </div>
    <div :class="$style.title">{{ headerText }}</div>
    <div :class="$style.nav">
      <img src="../../assets/images/logo.png" alt="" />
      <div :class="$style.main" @click="$router.push('/')">Главная</div>
      <div :class="$style.back" @click="$router.push('/books')">
        Страница автора
      </div>
    </div>
    <!--<div
      :class="[$style.burger, getIsBurgerOpen ? $style.burgerOpen : '']"
      v-if="isBurher"
      @click="onOpen"
    >
      <span></span>
    </div>-->
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    headerText: String,
    isBurher: Boolean,
    getIsBurgerOpen: Boolean,
    back: Boolean,
  },
  methods: {
    ...mapMutations(["openBurger"]),
    onOpen() {
      this.openBurger();
    },
  },
};
</script>

<style lang="scss" module>
.header {
  position: relative;
  background-color: #000;
  opacity: 0.6;
  padding: 20px 15px;
  text-align: center;
  width: 100%;
  .profile {
    display: flex;
    position: absolute;
    align-items: center;
    top: 18px;
    right: 20px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
    }
    div {
      font-size: 16px;
      color: #ffffff;
      margin: 0 0 0 10px;
    }
  }
  .nav {
    display: flex;
    position: absolute;
    align-items: center;
    top: 15px;
    left: 20px;
    @media (max-width: 1200px) {
      left: 15px;
    }
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    .main {
      color: #ffffff;
      font-size: 20px;
      margin: 0 0 0 25px;
      cursor: pointer;
      @media (max-width: 1200px) {
        margin: 0 0 0 15px;
				font-size: 18px;
      }
    }
    .back {
      position: relative;
      color: #ffffff;
      font-size: 20px;
      margin: 0 0 0 25px;
      cursor: pointer;
      @media (max-width: 1200px) {
        margin: 0 0 0 15px;
				font-size: 18px;
      }
    }
  }

  .title {
    color: #ffffff;
    font-size: 25px;
    letter-spacing: 1px;
  }
  //.burger {
  //  display: none;
  //  position: absolute;
  //  top: 24px;
  //  right: 20px;
  //  width: 30px;
  //  height: 19px;
  //  cursor: pointer;
  //  @media (max-width: 1250px) {
  //    display: block;
  //  }
  //  &::before,
  //  &:after {
  //    content: "";
  //    background-color: #ffffff;
  //    position: absolute;
  //    width: 100%;
  //    height: 2px;
  //    right: 0;
  //    transition: all 0.3s ease 0s;
  //  }
  //  &:before {
  //    top: 0;
  //  }
  //  &:after {
  //    bottom: 0;
  //  }
  //  span {
  //    background-color: #ffffff;
  //    color: #ffffff;
  //    position: absolute;
  //    width: 100%;
  //    height: 2px;
  //    right: 0;
  //    top: 9px;
  //    transition: all 0.3s ease 0s;
  //  }
  //}
  //.burgerOpen:before {
  //  transform: rotate(45deg);
  //  top: 9px;
  //}
  //.burgerOpen:after {
  //  transform: rotate(-45deg);
  //  top: 9px;
  //}
  //.burger.burgerOpen span {
  //  transform: scale(0);
  //}
}
</style>