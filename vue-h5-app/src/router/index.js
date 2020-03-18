import Vue from 'vue';
import VueRouter from 'vue-router';
import Novel from '../views/novel/novel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Novel',
    component: Novel,
  },

];

const router = new VueRouter({
  routes,
});

export default router;
