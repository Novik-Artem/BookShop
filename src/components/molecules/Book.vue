<template>
  <div :class="$style.bookContent">
    <div :class="$style.image">
      <img
        :src="bookImage"
        alt=""
        @click="onGiveInfo(), $router.push('/book')"
      />
    </div>
    <div
      v-if="!read"
      :class="$style.read"
      @click="onGiveInfo(), $router.push('/book')"
    >
      читать описание
    </div>
    <div  v-if="!price" :class="$style.price">{{ bookPrice }} $</div>
    <div v-if="!isAddToBasket" :class="$style.add" @click="add">добавить в корзину</div>
		<div v-else :class="$style.adding">добавлено</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    bookName: String,
    bookId: String,
    bookImage: String,
    bookPrice: Number,
    read: Boolean,
		price: Boolean,
		isAddToBasket: Boolean
  },
  methods: {
    ...mapMutations(["setChosenBook", "addToBasket"]),
    onGiveInfo() {
      this.setChosenBook(this.bookName);
    },
		add() {
			this.addToBasket(this.bookName);
		}
  },
};
</script>


<style lang="scss" module>
.bookContent {
  background-color: #ffffff;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 20px;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  .image {
    max-width: 170px;
		min-width: 128px;
    margin: 0 0 10px 0;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    flex: 1 1 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .read {
    margin: 0 0 10px 0;
    font-size: 17px;
    cursor: pointer;
  }
  .price {
    margin: 0 0 7px 0;
    font-size: 16px;
    color: #439a86;
  }
	.add{
		cursor: pointer;
		font-size: 16px;
	}
	.adding{
		cursor: pointer;
		font-size: 16px;
		color: #d3d3d3;
	}
}
</style>