<template>
  <div :class="[$style.conteiner, getIsBurgerOpen ? $style.vOpen : '']">
    <header :class="$style.header">
      <div :class="$style.title">
        LAST BOOK
      </div>
    </header>
    <div
      :class="[$style.openBurger, getIsBurgerOpen ? $style.isOpen : '']"
      @click="onOpen"
    >
      <span></span>
    </div>
    <div :class="$style.content">
      <ul :class="$style.authorList" v-if="getIsBurgerOpen">
        <li
          :class="$style.author"
          @click="onOpenBooks(), $router.push('/Bookstore')"
          v-for="author in getAuthors"
          :key="author.id"
          :id="author.id"
        >
          {{ author.name }}
        </li>
      </ul>
      <ul :class="$style.authorList2" v-else>
       <li
          :class="$style.author"
          @click="onOpenBooks(), $router.push('/Bookstore')"
          v-for="author in getAuthors"
          :id="author.id"
          :key="author.id"
        >
          {{ author.name }}
        </li>
      </ul>
      <div :class="$style.topImages">
        <img
          :class="$style.image"
          src="../assets/images/3tovTemnyFon.jpg"
          alt=""
        />
        <img
          :class="$style.image"
          src="../assets/images/triumfalnay arka2.jpg"
          alt=""
        />
        <img
          :class="$style.image"
          src="../assets/images/teni v rajy2.jpg"
          alt=""
        />
      </div>
      <div :class="$style.block1">
        <div :class="$style.block1Text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui earum
          officia error non reprehenderit, dolores porro minima aliquam, illum,
          optio pariatur dolore et doloremque accusantium magnam voluptate modi
          molestias? Molestias? Necessitatibus, omnis suscipit esse iusto totam
          eaque debitis quasi veniam vel quidem aliquam tempore sed soluta
          facere explicabo? Excepturi quibusdam eligendi voluptatem cupiditate
          consequuntur itaque facere nulla maxime illum eum? Est, tenetur? Neque
          corporis repudiandae harum magnam architecto quisquam itaque,
          perspiciatis quidem eligendi omnis fuga quam ab possimus enim cumque!
          Nobis necessitatibus maiores, fugiat excepturi voluptatibus a corporis
          sed sit! Nulla placeat vel velit nisi, non quibusdam tenetur explicabo
          ipsa deserunt perspiciatis sint, quae laborum. Voluptatibus impedit
          corporis facilis, nisi obcaecati consequatur atque magnam ea
          repellendus reiciendis perferendis iste ipsum. Voluptates, mollitia.
          Cumque nulla ullam, ducimus molestias iure velit, accusamus error,
          nesciunt alias quas obcaecati repudiandae delectus minus asperiores
          inventore itaque ipsam voluptas officia beatae tenetur modi a rem
          impedit!
        </div>
      </div>
      <div :class="$style.block2">
        <img
          :class="$style.block2Image"
          src="../assets/images/block3.jpg"
          alt=""
        />
        <img
          :class="$style.block2Image"
          src="../assets/images/block2.jpg"
          alt=""
        />
      </div>
      <Slider :text="getSlides[getThisSlide].text" :class="$style.slider" />
    </div>
  </div>
</template>
<script>
import Slider from "./Slider";
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: mapGetters([
    "getSlides",
    "getThisSlide",
    "getIsBurgerOpen",
    "getAuthors",
  ]),
  components: {
    Slider,
  },
  props: {
    
  },
  methods: {
    ...mapMutations(["openBurger", "changeAuthor"]),
    onOpen() {
      this.openBurger();
    },
    onOpenBooks() {
       console.log(this.id);
       this.changeAuthor(this.id)
    }
  },
};
</script>
<style lang="scss" module>
.conteiner {
  margin: 0;
  overflow: auto;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  background-color: #666;
  width: 100vw;
  height: 100vh;
  position: relative;
}
.conteiner.vOpen {
  overflow: hidden;
}
.title {
  padding: 20px;
  
  font-size: 30px;
 letter-spacing: 2px;
  background-color: #000;
  color: #fff;
}
.openBurger {
  display: none;
  position: fixed;
  top: 26px;
  right: 10px;
  width: 30px;
  height: 19px;
  cursor: pointer;
  z-index: 2;
}
.openBurger:before,
.openBurger:after {
  content: "";
  background-color: #f9f9f9;
  position: absolute;
  width: 100%;
  height: 2px;
  right: 0;
  transition: all 0.3s ease 0s;
}
.openBurger:before {
  top: 0;
}
.openBurger:after {
  bottom: 0;
}
.openBurger span {
  background-color: #f9f9f9;
  position: absolute;
  width: 100%;
  height: 2px;
  right: 0;
  top: 9px;
  transition: all 0.3s ease 0s;
}
.isOpen:before {
  transform: rotate(45deg);
  top: 9px;
}
.isOpen:after {
  transform: rotate(-45deg);
  top: 9px;
}
.openBurger.isOpen span {
  transform: scale(0);
}
.authorList,
.authorList2 {
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #fff;
  display: flex;
  justify-content: space-between;
}
.author,
.author2 {
  color: #fff;
  list-style-type: none;
  cursor: pointer;
  font-size: 25px;
  margin: 20px 50px 20px 50px;
  position: relative;
  transition: all 0.3s ease 0s;
}
.author2::after {
  content: "";
  position: absolute;
  left: 50%;
  width: 0;
  height: 1.5px;
  background-color: #63bd9b;
  bottom: 0;
  transition: all 0.3s ease 0s;
}
.author2:hover::after {
  left: 0;
  width: 100%;
  color: #63bd9b;
}
.author2:hover {
  color: #63bd9b;
}
.topImages {
  margin: 40px 0 40px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 0 40px 0;
  border-bottom: 2px solid #fff;
}
.image {
  width: 230px;
  height: 350px;
  margin: 0 40px 0 40px;
}
.block1 {
  border-bottom: 2px solid #fff;
  padding: 0 0 40px 0;
  margin: 40px 0 0 0;
}
.block1Text {
  color: #fff;
  max-width: 1000px;
  margin: 0 auto;
}
.block2 {
  display: flex;
  border-bottom: 2px solid #fff;
}
.block2Image {
  flex: 1 1 50%;
  height: 200px;
}
.slider {
  margin: 40px 0;
}
@media (max-width: 1450px) {
  .author,
  .author2 {
    margin: 40px 30px 40px 30px;
  }
}
@media (max-width: 1250px) {
  .authorList {
    display: block;
    border-bottom: none;
    background-color: #666;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding: 70px 0 0 0;
  }
  .author {
    margin: 20px 10px 20px 10px;
  }
  .author:hover {
    color: #63bd9b;
    letter-spacing: 4px;
    transition: all 0.3s ease 0s;
  }
  .openBurger {
    display: block;
  }
  .title {
    position: fixed;
    width: 100%;
    z-index: 2;
  }
  .authorList2 {
    display: none;
  }
  .content {
    padding: 70px 0 0 0;
  }
}
@media (max-width: 1020px) {
  .block1Text {
    max-width: 800px;
  }
}
@media (max-width: 930px) {
  .topImages {
    margin: 40px 0 40px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 0 40px 0;
  }
  .image {
    width: 200px;
    height: 320px;
    margin: 0 40px 0 40px;
  }
}
@media (max-width: 840px) {
  .image {
    width: 180px;
    height: 300px;
    margin: 0 20px 20px 20px;
  }
  .block1Text {
    max-width: 600px;
  }
  .block1 {
    padding: 0 0 20px 0;
    margin: 20px 0 0 0;
  }
  .slider {
    margin: 20px 0;
  }
}
@media (max-width: 780px) {
  .topImages {
    margin: 20px 0 20px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 0 10px 0;
  }
  .block1Text {
    max-width: 400px;
  }
  .title {
    font-size: 25px;
  }
}
@media (max-width: 666px) {
  .image {
    width: 70%;
    height: 70%;
  }
  .block1Text {
    max-width: 300px;
  }
  .title {
    font-size: 15px;
    line-height: 30px;
    text-align: left;
    padding: 20px 5px;
  }
}
@media (max-width: 580px) {
  .block2 {
    display: flex;
    flex-wrap: wrap;
  }
  .block2Image {
    flex: 1 1 100%;
    height: 200px;
  }
  .title {
    font-size: 13px;
    line-height: 20px;
  }
  .openBurger {
    top: 22px;
    right: 10px;
  }
}
@media (max-width: 350px) {
  .image {
    width: 100%;
    height: 100%;
  }
  .title {
    font-size: 12px;
  }
}
</style>
