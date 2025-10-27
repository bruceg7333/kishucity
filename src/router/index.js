import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Assets from '../components/Assets.vue';
import InviteRank from '../components/InviteRank.vue';
import Properties from '../components/properties/Properties.vue';
import PropertyDetail from '../components/properties/PropertyDetail.vue';
import ClanList from '../components/clans/List.vue';
import ClanDetail from '../components/clans/Detail.vue';
import CreatorsEcosystem from '@pages/creators-ecosystem.vue';
import ObjectEcosystem from '@pages/object-ecosystem.vue';
import EconomicEcosystem from '@pages/economic-ecosystem.vue';
import Staking from '@pages/staking.vue';
import Mall from '@pages/mall.vue';
import CompanyIntroduction from '@pages/company-introduction.vue';
import ProjectIntroduction from '@pages/project-introduction.vue';
import Partners from '@pages/partners.vue';
import ClanHome from '@pages/clan-home.vue';
import FAQ from '@pages/faq.vue';
import BlogNews from '@pages/blog-news.vue';
import Whitepaper from '@pages/whitepaper.vue';
import PrivacyPolicy from '@pages/privacy-policy.vue';
import TermsOfUse from '@pages/terms-of-use.vue';
import CopyrightTerms from '@pages/copyright-terms.vue';
import EndUserTerms from '@pages/end-user-terms.vue';
import TeamIntroduction from '@pages/team-introduction.vue';

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
  },
  {
    path: '/creators-ecosystem',
    name: 'creators-ecosystem',
    component: CreatorsEcosystem,
  },
  {
    path: '/object-ecosystem',
    name: 'object-ecosystem',
    component: ObjectEcosystem,
  },
  {
    path: '/economic-ecosystem',
    name: 'economic-ecosystem',
    component: EconomicEcosystem,
  },
  {
    path: '/staking',
    name: 'staking',
    component: Staking,
  },
  {
    path: '/mall',
    name: 'mall',
    component: Mall,
  },
  {
    path: '/company-introduction',
    name: 'company-introduction',
    component: CompanyIntroduction,
  },
  {
    path: '/project-introduction',
    name: 'project-introduction',
    component: ProjectIntroduction,
  },
  {
    path: '/partners',
    name: 'partners',
    component: Partners,
  },
  {
    path: '/clan-home',
    name: 'clan-home',
    component: ClanHome,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ,
  },
  {
    path: '/blog-news',
    name: 'blog-news',
    component: BlogNews,
  },
  {
    path: '/whitepaper',
    name: 'whitepaper',
    component: Whitepaper,
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy,
  },
  {
    path: '/terms-of-use',
    name: 'terms-of-use',
    component: TermsOfUse,
  },
  {
    path: '/copyright-terms',
    name: 'copyright-terms',
    component: CopyrightTerms,
  },
  {
    path: '/end-user-terms',
    name: 'end-user-terms',
    component: EndUserTerms,
  },
  {
    path: '/team-introduction',
    name: 'team-introduction',
    component: TeamIntroduction,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
