import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Assets from '../components/Assets.vue';
import InviteRank from '../components/InviteRank.vue';
import Properties from '../components/properties/Properties.vue';
import PropertyDetail from '../components/properties/PropertyDetail.vue';
import ClanList from '../components/clans/List.vue';
import ClanDetail from '../components/clans/Detail.vue';

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
  {
    path: '/properties',
    name: 'properties',
    component: Properties,
  },
  {
    path: '/properties/:id',
    name: 'property-detail',
    component: PropertyDetail,
  },
  {
    path: '/clans',
    name: 'clans',
    component: ClanList,
  },
  {
    path: '/clans/:id',
    name: 'clan-detail',
    component: ClanDetail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
