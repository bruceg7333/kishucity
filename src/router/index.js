import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Assets from '../components/Assets.vue';
import InviteRank from '../components/InviteRank.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/assets',
    name: 'assets',
    component: Assets,
  },
  {
    path: '/invite-rank',
    name: 'invite-rank',
    component: InviteRank,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
