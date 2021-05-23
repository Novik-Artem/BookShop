//import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/pages/HomePage";
import BooksPage from "../components/pages/BooksPage";
import BookDescriptionPage from "../components/pages/BookDescriptionPage"
import UserPage from "../components/pages/UserPage"
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/books",
      component: BooksPage,
		},
		{
      path: "/book",
      component: BookDescriptionPage,
		},
		{
      path: "/user",
      component: UserPage,
    },
  ],
});
