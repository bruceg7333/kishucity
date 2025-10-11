import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
// import Assets from '../components/Assets.vue'; // Will be created later

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
    // component: Assets, // Will be uncommented once Assets.vue is created
    component: () => import('../components/Assets.vue'), // Dynamic import for code splitting
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
