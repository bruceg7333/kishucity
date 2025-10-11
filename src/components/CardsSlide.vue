<template>
  <div :class="['slide3', { entered: isEntered, leaving: isLeaving }]">
    <div class="bg"></div>
    <div class="content">
      <div class="title">
        <span>每一个加入纪州的人，都是叙事者、治理者、创造者。</span>
        <br />
        <span>选择你的归属藩......</span>
      </div>
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
              <div class="ft">
                <div class="tags">{{ card.tags }}</div>
                <button class="btn">加入部藩</button>
              </div>
            </div>
          </div>
          <div class="group clone">
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
              <div class="ft">
                <div class="tags">{{ card.tags }}</div>
                <button class="btn">加入部藩</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue';

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
    img: new URL('../../assets/a17.bf29b7f8.png', import.meta.url).href,
  },
  {
    num: '02',
    name: 'KAGE CLAN',
    sub: '影 藩',
    tags: '影视 / 剧场 / 表演 / 角色叙事',
    img: new URL('../../assets/a18.d4524d08.png', import.meta.url).href,
  },
  {
    num: '03',
    name: 'MONO CLAN',
    sub: '造 藩',
    tags: '建筑 / 手工艺 / 空间美学',
    img: new URL('../../assets/a19.adbcfe31.png', import.meta.url).href,
  },
  {
    num: '04',
    name: 'MONO CLAN',
    sub: '文 藩',
    tags: '写作 / 策展 / 编辑出版',
    img: new URL('../../assets/a20.69f5db4a.png', import.meta.url).href,
  },
  {
    num: '05',
    name: 'SAGE CLAN',
    sub: '機 藩',
    tags: 'AI艺术 / 算法美学 / 技术创作',
    img: new URL('../../assets/a21.bac865f5.png', import.meta.url).href,
  },
  {
    num: '06',
    name: 'NEON CLAN',
    sub: '霓 藩',
    tags: '虚拟角色 / ACGN / 插画 / Vtuber文化',
    img: new URL('../../assets/a22.34fbe812.png', import.meta.url).href,
  },
  {
    num: '07',
    name: 'YORU CLAN',
    sub: '夜 藩',
    tags: '派对文化 / 品牌运营 / 社交实验',
    img: new URL('../../assets/a23.6f6cb13b.png', import.meta.url).href,
  },
  {
    num: '08',
    name: 'GENKA CLAN',
    sub: '幻 藩',
    tags: '沉浸式Play空间 / Metaverse入口站',
    img: new URL('../../assets/a24.13103615.png', import.meta.url).href,
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
  background: url(../../assets/banner3.32d11929.png) center/cover no-repeat;
  filter: brightness(0.9);
}
.content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 60px;
  gap: 0;
  width: 100%;
  box-sizing: border-box;
}
.title {
  color: #fff;
  font-weight: 700;
  font-size: 0.32rem;
  text-align: left;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 40px;
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
  margin-left: 0.175rem;
  margin-right: 0.175rem;
}
.oval {
  background: url(../../assets/bgs.654635ba.png) center/cover no-repeat;
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
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAzCAYAAACe50q8AAAJV0lEQVR4nO2dCUxU3RHX/28GZhi2AZSKS+pONO4K0oiipi5xQVlaPxVtodFWmlQClmATTzZpqRI+v25pFJWkBuISKRHGDYG0wCchGmIEg9qyVBT1o8omw8wwzG0OeWOmzHszFLAKc38JUWbuezPvvj/3nnfuOecK+Dj4AZgNYAoAL/HH4yN9Fmfo9AB4L/78CgAjAONI+o8x5vea2yjdkIkAtgKIABAC4FujdF7Ox8UCoBVAJYAyAKUATCP9xJGMVAoAGwDsA7AWgDsXwJinC0AhgL8AeDyUA6RGquGKaguANADBwzye8/lzF8BvADxz9E1HQ1TTAfwawHe5KFwCM4BsAKcB6KUu+H8S1eDGgiDEADglGt0OcXNzw4oVK9zDw8Pdh4eH3WbMmOGm1WoFT09PQaPRfKyHA44MPT09TK/Xs/b2dktjY2N/kydPzJWVlaba2lqzlCgk+CeAHzPGntjoYeDfYYlKEAQlgF8B+JGzTw4LC3Pfs2bNntm3btqj9/f2KpqYmc319vZmupKOjw0IXxv/p/3X4+voKAgICFjNnzlTuWLFiv6CgoGTV1tb+wsLChtOnTxsOHz5sduLl6CkxjjFGKxVAQxQBuBPAJseftmrVqu5paWneYWFhqpqamvLz588NX716ZfnednJmzZ6v3LFjhzo6Olozd+5c5e3bt40nT57scSIuup8nGGM5wxIVABqhLgDYJNeAprSMjAyf2NhYj7KyMlNWVlZPTU1Nn6vfsLHGxo0bVUeOHPFeuHChW3Z2tv7UqVM9RqPR0aySDuAchiGq3wL4odybISEh7mfOnNGSYtPS0rpKSkpG7N/gfDroPsbFxXkcO3bM58WLF/0HDx7sbGpq6pf5QqSkRHI/SIlKIXPQbkeCIpspPz/fv66urm/9+vVvuaDGPiSO3Nxcw6ZNm96ZzWbodDr/5cuXy/keTTDKEldN7JASVbDon5CEBHXu3Dltbm6uPiEhobOrq4sb3+OI58+f90dFRbWTGXPlyhW/0NBQOWF5k7tBtLv/i8HTH4nsOoAVUmeJiIhQ5eXl+eXk5OjT09Pfu/oNGM8olUrk5OSoQ0NDVZGRke8aGhrkpsJTjLHf274wWFRfAPhK6sjJkycrSktLJ5SXlxsTExO7huj34IxhVCoVCgoK/Mk9tHnz5ne9vb1SN70XwDrGWIv1Bdvpj4a5n8t1wenTp33fvn1rSUlJ6eaCcg1MJhPIYA8MDFQcP37cW+ai1QB+ZvtCraiiAUyVOioyMlK9du1aVVJSUhd3YLoWra2tlvT09O74+HjN4sWL5aJavhAEYbL1F9vpr0jKllIoFLh3796EqqoqU3Jycrerd7JrUlRU5E/T365duzpkuuBLxtiXsBmpZskZ59HR0R7Tpk1TkmPT1TvWlcnMzHwfERGhXrp0qdxo9T1BdLNbRRUp11/79+/X6HQ6w8uXL/mSiwtTUVHRV1tb2xcfH+8p0wsUwbIENqJaLdVq6tSpClokvnz5ssHVO5UDXLt2zbB161Y1PRXKEA5RVCoxBNiODRs2qDs7O1l5eTn3mHNw/fp1g6+vr8KBp/2DqMieUku2CA9XVVdXmywWPvNxgNevX1saGhrMa9askRuqFkEUleT6DTFv3jy3R48eOYuz4bgQDx8+7Js/f75csT5BEARfEtU0uS6ZPn26kpTJRcOxQss1FIvloEOmKMSFQTsoUlCtVgttbW187uN8gPSg1WrloluIgZFKI/WOl5fXgM+BRyFwbKEVFas2ZPAmUUmuPluNc/KoczhWKHrBydqviRQjufTS3d09cKSPjw/PfuF8gLKhKDvHQY/0kKjapd6hYa67u9tCSzS8SzlWyCH+5s0bR3Z2m0Is0iAJxSg7sfQ5LsacOXPcGhsb5TwCtPLS6lBU... [truncated]  center/cover no-repeat;
  background-size: 100% 100%;
}
.btn:hover {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAzCAYAAACe50q8AAAJpUlEQVR4nO2de4xUVx3Hv/c5dx47j32yQDuwLC8LK1AoVRr7T4s4FFONRAVLJ1pba320iY8YjdZEo41oqjX9A6qOMbbRWIuQDjFWUsRSpIAUloKsLMzSZdnd2XnszuPeO/feMWe9u447996FXShl53ySm8zj3Ne535zzO7/zO7/LXHj5QVwHggAWAJgNwGtu0nU4EeWqyAPImVsCQDcAZTpVGI7Eqn7jr9GzaQQQAfABAKsBNF+j41KuLwYACwBeB7APwF8BqNM943RExQK4B8CnANwNQKACuOkgz7DN3LYCGAawG8CvAZyazkGnwodMZcdMYVFBzQz8ZiPxF1NYi2ZyV1crqjCA3wD4xVRPSLlpuBfAKwC+BcBzNRdt2/1NNMAS8ehHATSjGt0OMAwLIdgmSMFFguBt4TlPI8/xbgacwDCci6G6eofR5LJhlMpGKW9o+UG9lO/TlHSXqg73aEDZ6VqIPj4PYD2Ah8OR2JmxPxLxqONOjiTiUQ7AdwF8erKyYqhd8Lbe6fY0d7hYXmK1QlIr5fo0JXVWNUoFo2yojndAuX6wvIdhBA8ruJs43613e4ILP1ynqTm92H9czvcekMlzcjh5O4C9iXj0y+FIbPdkF+koqkQ8KgL4OYD7nMpJoUVC3YKITwq2iUq2R82ei+eKg8cVXQ4YVCfvTnhvC+dpXuXyzFrl9s1d55EHTynZ7j15B3G5ADybiEcbw5HYL51uyslPxZm203rbnXkPE1q8uc7berskJ8+o2fN782r2fOmmru0aRGpcLvrbNvhE32w+d/Fvhey5PfmyoTn1Kt8BsBNT8FN9z0lQrmCbEFr2YIBY+oPHd2TkZOe0/RjUG4OcPKnKyc5Ub856yd++qc5Vv0gcOvmrrFYY0G0u6EkA/ab7oQp70d8nANg2Ye7mla6mVV8IacO9pb5DPxyigpoJlJHr/bvcf/hHqXLZQPPqJ0JiYL6dq4gMtrabsyZVWImKuAq+b1dLRFANy6OBXO+hQvLEzmxZK1LjewahF5P64JGfptVsotS08tGgK7jATlg+ADtMu/v/mCgq8v3HRDtWR3E1LBUblm0L5Hr2FzL/+n1ukuEo5SaFjNKTJ3ZkldQ5taHjoSAx6m3uZCmARycT1WYAt1vtzUlBtuG2bYHiwAk50/VSjgpmhlM2MNT5XFYrDmqNHQ8FwYl2/sUvJeLRWyl/qBQVaea+YldT9Uu2+I1Szhg6/fwGbaFqg7KhgxjsrFjHBtvv99ncNOnVvlj5Q6WoPgJgjuVeLatcrobFYuqt54ehK1RRNYQup43s2V0jvrnr3KI/bOcN+HgiHm0d+1IpqgcsizMMggvu8+UvHS5SH1Rtku87JKvDF0r+9k32rRXp5baMfRkTVZudLeVpWSNxUogbvrA3X+uVW8tkz+3NnueXucTAPLvW6mOJeHTU7hoT1Sa3+vLOfZ+bGOd6MUWnXGoYJXWmpI70lrxz7rKLWCARLO9FhajusirFuetZV6BNyPf9Q671SqWQbvAN2d3c4WJYOw8D1sEUlWiGAFchNSxzGZpcllOnqcecguLAMZnjJVaw97SPi6rNnIGuQgq2i2q6W0WZDvgoZCSYMUqFQU0KLa7yopsshykqy/kbglDXyqsjF53ibCg1hprtKZFoBpu7bkjEo34iqrl21cK7GzinOEBFRRlHKwzqvKfJ1qgiy/JYc2KwCoZ3MwzLM7o6Qkd9lHEMdcRgBLfT2obRlspy8pjl/xtLTqMQKJUYulJmndcZ+IioLAOxyuPGOV2nQPkfZFHLJK2MSkQ1YvUPcSXA7AZpnVLGIdEKpjZsyBNRpS3/05WyockGL4WcjDJKjcG7gqzmbGcPsmaSBku0YlLnPc1UVJRxyDpOLW/rESAzL5ccRaUO95bEQJguaaeMIwRu... [truncated]  center/cover no-repeat;
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
