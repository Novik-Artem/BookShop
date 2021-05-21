//import Vue from "vue";
import VueRouter from "vue-router";
import Bookstore from "../components/Bookstore";
import Bookdescription from "../components/Bookdescription";
import ItemsInCart from "../components/ItemsInCart";
import Balans from "../components/Balans";
import User from "../components/User";
import Author from "../components/Author";
import HomePage from "../components/HomePage";
export default new VueRouter({
   routes: [
      {
         path:"/",
         component: HomePage
      },
      {
         path:"/Bookstore",
         component: Bookstore
      },
      {
         path:"/Bookdescription",
         component: Bookdescription
      },
      {
         path:"/ItemsInCart",
         component: ItemsInCart
      },
      {
         path:"/Balans",
         component: Balans
      },
      {
         path:"/User",
         component: User
      },
      {
         path:"/Author",
         component: Author
      }
   ]
})

/*const routes = [
{
   path: "/",
   component: Bookstore
}
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes
});

export default router;*/