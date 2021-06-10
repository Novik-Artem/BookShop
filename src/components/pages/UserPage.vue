<template>
  <div :class="$style.page">
    <Header headerText="Sasha" />
    <div :class="$style.content">
      <div :class="$style.userInfo">
        <h2 :class="$style.h">Пользователь</h2>
        <div :class="$style.user">
          <div :class="$style.ava">
            <img src="../../assets/images/ava.jpg" alt="" />
          </div>
          <div :class="$style.name">Sasha</div>
          <div :class="$style.booksNumber">Всего книг куплено: 14</div>
          <div :class="$style.booksNumber">
            Книг в корзине: {{ getBooksInBasketLength }}
          </div>
        </div>
      </div>
      <div :class="$style.basketBooks">
        <h2 :class="$style.h2">Корзина</h2>
        <div :class="$style.books">
          <div
            :class="$style.book"
            v-for="book in getBooksInBasket"
            :key="book.id"
          >
            <Book :bookImage="book.image" price="" isAddToBasket="" read="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "../molecules/Header";
import Book from "../molecules/Book";
export default {
  computed: mapGetters(["getBooksInBasket", "getBooksInBasketLength"]),
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
  .content {
    padding: 50px 15px 0 15px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    .h {
      font-size: 25px;
      font-weight: 700;
      margin: 0 0 25px 0;
    }
    .h2 {
      font-size: 25px;
      font-weight: 700;
			padding: 0 0 0 10px;
      margin: 0 0 25px 0;
    }
    .userInfo {
      flex: 0 1 40%;

      .user {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06),
          0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
        border-radius: 16px;
        padding: 15px;
        .ava {
          max-width: 150px;
          max-height: 150px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 0 15px 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .name {
          font-size: 20px;
          margin: 0 0 15px 42.5px;
        }
        .booksNumber {
          font-size: 18px;
          margin: 0 0 15px 0;
        }
      }
    }
    .basketBooks {
      margin: 0 -10px 0 10px;
      flex: 0 1 60%;
      .books {
        display: flex;
        flex-wrap: wrap;
        .book {
          padding: 0 10px;
          flex: 0 1 30%;
          margin: 0 0 20px;
        }
      }
    }
  }
}
</style>