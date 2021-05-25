<template>
  <div :class="$style.popularBooks">
		<h2 :class="$style.title">Самые популярные книги</h2>
    <div :class="$style.content">
      <div :class="$style.book" v-for="book in getPopularBooks" :key="book.id">
        <Book :bookImage="book.image" :bookName="book.name" :bookPrice="book.price" :isAddToBasket="book.isAddToBasket"/>
      </div>
    </div>
  </div>
</template>

<script>
import Book from "../molecules/Book";
export default {
  props: {
    getPopularBooks: Array,
  },
  components: {
    Book,
  },
};
</script>

<style lang="scss" module>
.popularBooks {
	.title{
		margin: 0 0 20px 0;
		font-weight: 600;
		font-size: 25px;
	}
  .content {
    display: flex;
    margin: 0 -15px;
    .book {
      padding: 0 15px;
      flex: 0 1 20%;
      text-align: center;
    }
  }
}
</style>