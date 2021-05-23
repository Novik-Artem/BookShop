<template>
  <div :class="$style.page">
    <Header
      headerText="LAST BOOK"
      :isBurher="true"
      :getIsBurgerOpen="getIsBurgerOpen"
    />
    <nav :class="$style.authorMenu">
      <ul :class="$style.menu">
        <li
          v-for="author in getAuthors"
          :key="author.id"
          @click="$router.push('/books')"
        >
          <AuthorMenuItem :authorName="author.name" :authorId="author.id" />
        </li>
      </ul>
    </nav>
    <div :class="$style.content">
      <HomePageDescription />
    </div>
    <div :class="$style.line"></div>
    <div :class="$style.content">
      <PopularBooks :getPopularBooks="getPopularBooks" />
    </div>
    <div :class="$style.line"></div>
    <div :class="$style.content">
      <Quotes :quoteText="getQuotes[getThisQuote].text" />
    </div>
    <div :class="$style.pictures">
      <div :class="$style.picture">
        <img src="../../assets/images/homePage2.jpg" alt="" />
      </div>
      <div :class="$style.picture">
        <img src="../../assets/images/homePage1.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "../molecules/Header";
import AuthorMenuItem from "../atoms/AuthorMenuItem";
import PopularBooks from "../organisms/PopularBooks";
import HomePageDescription from "../molecules/HomePageDescription";
import Quotes from "../organisms/Quotes";
export default {
  computed: mapGetters([
    "getAuthors",
    "getChosenAuthor",
    "getIsBurgerOpen",
    "getPopularBooks",
    "getQuotes",
    "getThisQuote",
  ]),
  components: {
    Header,
    AuthorMenuItem,
    PopularBooks,
    HomePageDescription,
    Quotes,
  },
};
</script>

<style lang="scss" module>
.page {
  max-width: 1540px;
  margin: 0 auto;
  min-height: 100vh;
  background: #f1f1f1;
  .authorMenu {
    padding: 18px 0;
    border-bottom: 2px solid #000;
    .menu {
      padding: 0 15px;
      list-style-type: none;
      justify-content: space-between;
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
      li {
        margin: 0 15px 0 0;
        font-size: 20px;
        @media (max-width: 1100px) {
          font-size: 18px;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
  }
  .book {
    font-size: 20px;
  }
  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .line {
    border-bottom: 2px solid #000;
    margin: 25px 0;
  }
  .pictures {
    display: flex;
    .picture {
      flex: 1 1 50%;
      height: 200px;
      @media (max-width: 1100px) {
        height: 150px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>