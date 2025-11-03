<template>
  <div class="menu-mask" @click="handleMaskClick">
    <div class="menu-panel">
      <header class="menu-header">
        <div class="logoh">
          <img :src="logoImage" alt="" draggable="false" />
        </div>
        <span>{{ t('menu.catalog') }}</span>
        <button class="close-button" @click="closeModal">x</button>
      </header>
      <div class="grid">
        <div class="cell">
          <div class="cell-inner">
            <div class="icon">
              <img :src="a6Image" alt="" draggable="false" />
            </div>
            <div class="texts">
              <div class="title">{{ t('menu.ecology.title') }}</div>
              <div class="subs">
                <a href="/creators-ecosystem">{{ t('menu.ecology.creator') }}</a>
                <i class="sep"></i>
                <a href="/object-ecosystem">{{ t('menu.ecology.object') }}</a>
                <i class="sep"></i>
                <a href="/economic-ecosystem">{{ t('menu.ecology.economy') }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="cell-inner">
            <div class="icon">
              <img :src="a7Image" alt="" draggable="false" />
            </div>
            <div class="texts">
              <div class="title">{{ t('menu.clan.system') }}</div>
              <div class="subs">
                <a href="/clans">{{ t('menu.clan.title') }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="cell-inner">
            <div class="icon">
              <img :src="a8Image" alt="" draggable="false" />
            </div>
            <div class="texts">
              <div class="title">{{ t('menu.about_us.title') }}</div>
              <div class="subs">
                <a @click.stop="goToCompanyIntroduction">{{ t('menu.about_us.company_intro') }}</a>
                <i class="sep"></i>
                <a href="/project-introduction">{{ t('menu.about_us.project_intro') }}</a>
                <!-- <i class="sep"></i>
                <a href="/partners">{{ t('menu.about_us.partners') }}</a>
                <i class="sep"></i>
                <a href="/team-introduction">{{ t('menu.about_us.team_intro') }}</a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="cell-inner">
            <div class="icon">
              <img :src="a9Image" alt="" draggable="false" />
            </div>
            <div class="texts">
              <div class="title">{{ t('menu.treasury.title') }}</div>
              <div class="subs">
                <a href="/market">{{ t('menu.treasury.title') }}</a> 
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="cell-inner">
            <div class="icon">
              <img :src="a10Image" alt="" draggable="false" />
            </div>
            <div class="texts">
              <div class="title">{{ t('menu.faq.title') }}</div>
              <div class="subs">
                <a href="/faq">{{ t('menu.faq.faq') }}</a>
                <!-- <i class="sep"></i>
                <a href="/blog-news">{{ t('menu.faq.blog_news') }}</a>
                <i class="sep"></i>
                <a href="/whitepaper">{{ t('menu.faq.whitepaper') }}</a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="cell-inner">
            <div class="icon">
              <img :src="a11Image" alt="" draggable="false" />
            </div>
            <div class="texts">
              <div class="title">{{ t('menu.dao.title') }}</div>
              <div class="subs">
                <a href="/dao">{{ t('menu.dao.system') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter :alwaysShow="true" style="min-height: 1.2rem !important;"/>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; // Assuming vue-router is used
import { useI18n } from 'vue-i18n';
import AppFooter from './AppFooter.vue';

const { t } = useI18n();

const emit = defineEmits(['close']);
const router = useRouter();

// Image paths
const logoImage = '/assets/logo-banner.png';
const a6Image = '/assets/a6.097be1d1.png';
const a7Image = '/assets/a7.55faabb4.png';
const a8Image = '/assets/a8.1d9f5f76.png';
const a9Image = '/assets/a9.a071301b.png';
const a10Image = '/assets/a10.a9ec1a1f.png';
const a11Image = '/assets/a11.37aed859.png';

function handleMaskClick(event) {
  if (event.target === event.currentTarget) {
    emit('close');
  }
}

function goToCompanyIntroduction() {
  router.push('/company-introduction');
  emit('close');
}

function goToAbout() {
  router.push('/about');
  emit('close');
}

function closeModal() {
  emit('close');
}
</script>

<style scoped>
.menu-mask {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 113;
  /* background: rgba(0, 0, 0, 0.5); */
}

  @media (max-width: 768px) {
    .menu-mask {
      display: flex; /* Show on mobile */
    }
  }

.menu-panel {
  width: calc(100% - 1.45rem);
  height: 100vh;
  background: #fff;
  margin-right: 1.45rem;
  border-right: 2px solid #000;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.menu-header {
  height: 1.55rem;
  min-height: 1.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.48rem;
  letter-spacing: 0.06rem;
  border-bottom: 2px solid #000;
  position: relative;
  background: #fff;
}

.logoh {
  position: absolute;
  left: 0;
  top: 0;
  width: 1.62rem;
  height: 1.55rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #000;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logoh:hover {
  background: rgba(0, 0, 0, 0.05);
}

.logoh img {
  width: 1rem;
  height: 1rem;
  object-fit: contain;
  -webkit-user-drag: none;
  user-select: none;
}

.grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-auto-rows: auto;
  margin-left: 1.62rem;
  flex: 1;
  border-left: 2px solid #000;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.cell {
  border-bottom: 2px solid #000;
  background: #fff;
  transition: background-color 0.3s ease;
}

.cell:hover {
  background: rgba(0, 0, 0, 0.02);
}

.cell:last-child,
.cell:nth-child(5) {
  border-bottom: none;
}

.cell:nth-child(odd) {
  border-right: 2px solid #000;
}

.cell-inner {
  height: 100%;
  min-height: 2rem;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  box-sizing: border-box;
  gap: 0.5rem;
}

.icon {
  width: 1.2rem;
  min-width: 1.2rem;
  display: flex;
  justify-content: center;
}

.icon img {
  width: 1rem;
  height: 1rem;
  object-fit: contain;
  -webkit-user-drag: none;
  user-select: none;
}

.texts {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.title {
  font-size: 0.35rem;
  font-weight: 700;
  margin-bottom: 0.12rem;
}

.subs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.14rem;
  font-size: 0.27rem;
  color: #111;
  cursor: pointer;
  position: relative;
}

.subs a {
  position: relative;
  text-decoration: none;
  color: inherit;
  padding: 0.1rem 0;
}

.subs a:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  background: #000;
  width: 0;
  transition: width 0.3s ease;
}

.subs a:hover:after {
  width: 100%;
}

.subs .sep {
  display: inline-block;
  width: 1px;
  height: 0.2rem;
  background: #000;
  transform: translateY(1px);
}

.links {
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
  flex-wrap: wrap;
  padding: 0.2rem 0;
}

.links a {
  color: #9fa0a0;
  font-size: 0.19rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.1rem 0;
}

.links a:hover {
  color: #fff;
}
.close-button {
  display: none;
}

@media (max-width: 768px) {
  .menu-mask {
    background: rgba(0, 0, 0, 0.3);
  }

  .menu-panel {
    width: 100%;
    margin: 0;
    border-right: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    height: 100vh;
  }

  .close-button {
    display: block; /* Hidden by default */
    position: absolute;
    right: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 0.4rem;
    cursor: pointer;
    color: #333;
    padding: 0.2rem;
    z-index: 10;
  }

  .menu-header {
    height: 1.2rem;
    min-height: 1.2rem;
    font-size: 0.4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .logoh {
    width: 1.2rem;
    height: 1.2rem;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .logoh img {
    width: 0.8rem;
    height: 0.8rem;
  }

  .grid {
    margin-left: 0;
    grid-template-columns: 1fr;
    border-left: none;
    padding: 0.2rem;
    gap: 0.2rem;
  }

  .cell {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
  }

  .cell:last-child,
  .cell:nth-child(5) {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .cell:nth-child(odd) {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .cell-inner {
    padding: 0.3rem 0.5rem;
    min-height: 1.6rem;
  }

  .icon {
    width: 1rem;
    min-width: 1rem;
  }

  .icon img {
    width: 0.8rem;
    height: 0.8rem;
  }

  .title {
    font-size: 0.32rem;
    margin-bottom: 0.08rem;
  }

  .subs {
    font-size: 0.24rem;
    gap: 0.16rem;
  }

  .subs .sep {
    height: 0.16rem;
  }
}

@media (max-width: 375px) {
  .menu-header {
    height: 1rem;
    min-height: 1rem;
    font-size: 0.35rem;
  }

  .logoh {
    width: 1rem;
    height: 1rem;
  }

  .logoh img {
    width: 0.7rem;
    height: 0.7rem;
  }

  .cell-inner {
    padding: 0.25rem 0.4rem;
    min-height: 1.4rem;
    gap: 0.4rem;
  }

  .icon {
    width: 0.8rem;
    min-width: 0.8rem;
  }

  .icon img {
    width: 0.6rem;
    height: 0.6rem;
  }
}

/* Transitions */
.mm-enter-active,
.mm-leave-active {
  transition: opacity 0.3s ease;
}

.mm-enter-from,
.mm-leave-to {
  opacity: 0;
}

.mm-enter-active .menu-panel,
.mm-leave-active .menu-panel {
  transition: transform 0.3s ease;
}

.mm-enter-from .menu-panel,
.mm-leave-to .menu-panel {
  transform: translateX(100%);
}

@font-face {
  font-family: "Gen-Jyuu-Gothic-P-Bold-2";
  src: url(../../assets/Gen-Jyuu-Gothic-P-Bold-2.9c3d5b1f.woff) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

</style>