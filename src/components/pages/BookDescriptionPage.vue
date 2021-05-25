<template>
  <div :class="$style.page">
    <Header :headerText="getChosenBook.name" />
    <div :class="$style.book">
      <Book
        :bookImage="getChosenBook.image"
				:bookName="getChosenBook.name"
        :bookPrice="getChosenBook.price"
        :isAddToBasket="getChosenBook.isAddToBasket"
        read=""
      />
      <div :class="$style.description">
        {{ getChosenBook.bookDes }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "../molecules/Header";
import Book from "../molecules/Book";
export default {
  computed: mapGetters(["getChosenBook"]),
  components: {
    Header,
    Book,
  },
};
</script>

<style lang="scss" module>
.page {
  max-width: 1540px;
  margin: 0 auto;
  min-height: 100vh;
  background: #f1f1f1;
  .book {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 15px 0 15px;
    display: flex;
    .description {
			padding: 20px 0 0 0;
      margin: 0 0 0 15px;
      font-size: 16px;
      line-height: 20px;
			max-width: 600px;
    }
  }
}
</style>