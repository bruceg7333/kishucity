<template>
  <div :class="['slide3', { entered: isEntered, leaving: isLeaving }]">
    <div class="bg"></div>
    <slide-mask :title="t('cards_slide.mask_title')"
     maskOpacity="0.7">
      <a class="btn-join" href="/clans">{{ t('cards_slide.join_clan_button') }}</a>
      <div class="cards">
        <div
          class="track"
          :style="{ '--loop-w': loopWidth + 'px', '--duration': duration + 's' }"
        >
          <div class="group" ref="groupRef">
            <div class="oval" v-for="(card, index) in cardsData" :key="'g1-' + index">
              <div class="hd">
                <div class="num">{{ card.num }}</div>
                <div class="name">{{ card.name }}</div>
                <div class="line"></div>
                <div class="sub">{{ card.sub }}</div>
              </div>
              <div class="img">
                <img :src="card.img" alt="" />
              </div>
            </div>
          </div>
          <div class="group clone" style="margin-left: 20px;">
            <div class="oval" v-for="(card, index) in cardsData" :key="'g2-' + index">
              <div class="hd">
                <div class="num">{{ card.num }}</div>
                <div class="name">{{ card.name }}</div>
                <div class="line"></div>
                <div class="sub">{{ card.sub }}</div>
              </div>
              <div class="img">
                <img :src="card.img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </slide-mask>
  </div>
</template>

<script setup>
import SlideMask from './SlideMaskAlways.vue';
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps({
  active: { type: Boolean, default: false },
});

const emit = defineEmits(['leaveend']);

const isEntered = ref(false);
const isLeaving = ref(false);
let leaveTimeout = null;

function enterAnimation() {
  requestAnimationFrame(() => {
    isEntered.value = true;
  });
}

watch(
  () => props.active,
  (isActive) => {
    if (isActive) {
      if (leaveTimeout) clearTimeout(leaveTimeout);
      isLeaving.value = false;
      isEntered.value = false;
      enterAnimation();
    } else {
      isLeaving.value = true;
      if (leaveTimeout) clearTimeout(leaveTimeout);
      leaveTimeout = setTimeout(() => {
        isLeaving.value = false;
        isEntered.value = false;
        emit('leaveend');
      }, 500);
    }
  }
);

const groupRef = ref(null);
const loopWidth = ref(0);
const duration = ref(30);

function calculateLoopWidth() {
  const groupElement = groupRef.value;
  if (!groupElement) return;
  const scrollWidth = groupElement.scrollWidth;
  loopWidth.value = scrollWidth;
  duration.value = Math.max(10, Math.round(scrollWidth / 60));
}

function handleResize() {
  calculateLoopWidth();
}

const cardsData = [
  {
    num: '01',
    name: 'SONIK CLAN',
    sub: '音 藩',
    tags: '音乐制作 / DJ / 声音艺术',
    img: '/assets/a17.bf29b7f8.png',
  },
  {
    num: '02',
    name: 'KAGE CLAN',
    sub: '影 藩',
    tags: '影视 / 剧场 / 表演 / 角色叙事',
    img: '/assets/a18.d4524d08.png',
  },
  {
    num: '03',
    name: 'MONO CLAN',
    sub: '造 藩',
    tags: '建筑 / 手工艺 / 空间美学',
    img: '/assets/a19.adbcfe31.png',
  },
  {
    num: '04',
    name: 'MONO CLAN',
    sub: '文 藩',
    tags: '写作 / 策展 / 编辑出版',
    img: '/assets/a20.69f5db4a.png',
  },
  {
    num: '05',
    name: 'SAGE CLAN',
    sub: '機 藩',
    tags: 'AI艺术 / 算法美学 / 技术创作',
    img: '/assets/a21.bac865f5.png',
  },
  {
    num: '06',
    name: 'NEON CLAN',
    sub: '霓 藩',
    tags: '虚拟角色 / ACGN / 插画 / Vtuber文化',
    img: '/assets/a22.34fbe812.png',
  },
  {
    num: '07',
    name: 'YORU CLAN',
    sub: '夜 藩',
    tags: '派对文化 / 品牌运营 / 社交实验',
    img: '/assets/a23.6f6cb13b.png',
  },
  {
    num: '08',
    name: 'GENKA CLAN',
    sub: '幻 藩',
    tags: '沉浸式Play空间 / Metaverse入口站',
    img: '/assets/a24.13103615.png',
  },
];

onMounted(async () => {
  if (props.active) {
    enterAnimation();
  }
  await nextTick(); // Ensure DOM is rendered before calculating width
  calculateLoopWidth();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  if (leaveTimeout) clearTimeout(leaveTimeout);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
@font-face {
  font-family: "HKGrotesk-Medium-7";
  src: url(../../assets/HKGrotesk-Medium-7.a4cde1fc.woff) format("woff");
  font-style: normal;
  font-display: swap;
}
.slide3 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bg {
  position: absolute;
  inset: 0;
  background: url(/assets/banner3.32d11929.png) center/cover no-repeat;
  filter: brightness(0.9);
}

.btn-join {
  font-size: .45rem;
  line-height: 1;
  font-weight: bold;
  color: #fff;
  background: #000; 
  border-radius: 0.24rem; 
  text-decoration: underline;
  z-index: 1111;
  transform: translateZ(1px);
}

.cards {
  position: relative;
  width: 100%;
}
.cards .track {
  display: flex;
  gap: 0;
  will-change: transform;
  animation: marquee var(--duration) linear infinite;
}
.cards:hover .track {
  animation-play-state: paused;
}
.cards .group {
  display: flex;
  gap: 0.35rem;
}
.oval {
  background: url(/assets/bgs.654635ba.png) center/cover no-repeat;
  border-radius: 0.5rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #111;
  backdrop-filter: blur(1px);
  box-sizing: border-box;
  width: 3.66rem;
  height: 6.11rem;
  min-width: 3.66rem;
}
.hd {
  width: 100%;
  padding: 0.18rem 0.12rem 0.22rem;
  text-align: center;
}
.num {
  font-size: 0.32rem;
  font-weight: 700;
}
.line {
  width: 0.6rem;
  height: 2px;
  background: #111;
  margin: 0.1rem auto 0.05rem;
}
.name {
  font-size: 0.22rem;
  font-family: "HKGrotesk-Medium-7";
  margin-top: 0.35rem;
  font-weight: bold;
}
.sub {
  font-size: 0.24rem;
  font-weight: bold;
}
.img {
  width: 100%;
  height: 2.05rem;
  overflow: hidden;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ft {
  border-radius: 0 0 0.46rem 0.46rem;
  width: 100%;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.tags {
  font-size: 0.16rem;
  color: #333;
  margin-bottom: 0.1rem;
}
.btn {
  width: 1.5rem;
  height: 0.5rem;
  margin: 0 auto;
  border-radius: 0.24rem;
  background-size: 100% 100%;
}
.btn:hover {
  background-size: 100% 100%;
}
.slide3 .title {
  opacity: 0;
  transform: translateY(10px) scale(0.99);
}
.slide3.entered .title {
  animation: upIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.slide3 .cards .oval {
  opacity: 0;
  transform: translateY(18px) scale(0.98);
}
.slide3.entered .cards .oval {
  animation: upIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.slide3.entered .cards .oval:nth-child(2) {
  animation-delay: 0.05s;
}
.slide3.entered .cards .oval:nth-child(3) {
  animation-delay: 0.1s;
}
.slide3.entered .cards .oval:nth-child(4) {
  animation-delay: 0.15s;
}
.slide3.leaving .title,
.slide3.leaving .cards .oval {
  animation: upOut 0.45s ease both;
}
@keyframes upIn {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes upOut {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.995);
  }
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-1 * var(--loop-w)));
  }
}
</style>
