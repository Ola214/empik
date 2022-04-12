import { createRouter, createWebHashHistory } from 'vue-router';
import Books from '../components/books/Books.vue';
import Main from '../components/Main.vue';

const routes = [
  {
    path: '/', redirect: '/main'
  },
  {
    path: '/books',
    components: {default: Books},
  },
  {
    path: '/main',
    components: {default: Main},
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
