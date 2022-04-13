import { createRouter, createWebHashHistory } from "vue-router";
import Books from "../components/books/Books.vue";
import Main from "../components/Main.vue";
import Cart from "../components/cart/Cart.vue";

const routes = [
  {
    path: "/", redirect: "/main"
  },
  {
    path: "/books",
    components: {default: Books},
  },
  {
    path: "/main",
    components: {default: Main},
  },
  {
    path: "/cart",
    components: {default: Cart}
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
