import { createRouter, createWebHashHistory } from "vue-router";
import Books from "../components/books/Books.vue";
import Main from "../components/Main.vue";
import Cart from "../components/cart/Cart.vue";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";

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
    components: {default: Cart},
  }, 
  {
    path: "/login",
    components: {default: Login},
  },
  {
    path: "/register",
    components: {default: Register},
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
