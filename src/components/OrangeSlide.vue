<template>
  <div :class="['slide2', { entered: isEntered, leaving: isLeaving }]">
    <div class="bg"></div>
    <slide-mask :title="$t('orange_slide.title')" subtitle="ICO COMING SOON" maskOpacity="0.7"></slide-mask>
    <div class="content" v-if="false">
      <div class="title">
        <span>{{ $t('orange_slide.join_kishu_city') }}</span>
        <br />
        <span>{{ $t('orange_slide.share_asset_appreciation') }}</span>
      </div>
      <div class="panel left">
        <div class="card line">
          <div class="tokenCol">
            <div class="icon usdc"></div>
            <div class="name">USDC</div>
          </div>
          <div class="vline"></div>
          <div class="infoCol">
            <div class="balance">{{ $t('orange_slide.balance') }}：102000.00</div>
            <div class="pill min">{{ $t('orange_slide.min_amount') }}100</div>
          </div>
        </div>
        <div class="divider">
          <div class="dot">
            <!-- <img 
              src="../../base64_images/base64_image_1.txt"
              alt=""
            /> -->
          </div>
        </div>
        <div class="rate">1USDC=10KSC</div>
      </div>
      <div class="card">
        <div class="tokenCol">
          <div class="icon ksc"></div>
          <div class="name">KSC</div>
        </div>
        <div class="vline"></div>
        <div class="infoCol">
          <div class="balance">{{ $t('orange_slide.balance') }}：102000.00</div>
          <div class="pill input">13000.00</div>
        </div>
      </div>
      <button class="buy">{{ $t('orange_slide.buy_now') }}</button>
    </div>
    <div class="panel right" v-if="false">
      <div class="circle">
        <div class="c c1"></div>
        <div class="c c2"></div>
        <span class="tick t1"></span>
        <span class="tick t2"></span>
        <div class="txt">300/1000000</div>
      </div>
      <div class="legend">
        <span class="dot"></span>
        <span>{{ $t('orange_slide.unlocked') }}</span>
        <span class="dot on" style="margin-left: .4rem"></span>
        <span>{{ $t('orange_slide.withdrawn') }}</span>
      </div>
      <div class="progress">{{ $t('orange_slide.sales_progress') }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import SlideMask from './SlideMaskAlways.vue';
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

onMounted(() => {
  if (props.active) {
    enterAnimation();
  }
});

onUnmounted(() => {
  if (leaveTimeout) clearTimeout(leaveTimeout);
});
</script>

<style scoped>
.slide2 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bg {
  position: absolute;
  inset: 0;
  background: url(/assets/banner2.95462274.png) center/cover no-repeat;
  filter: brightness(0.88);
}
.panel.left {
  width: 4.6rem;
  background: rgba(0, 0, 0, 1);
  border-radius: 0.4rem;
  padding: 0.3rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 5.6rem;
  margin-right: 0.6rem;
}
.card {
  background: #2a2a2a;
  border-radius: 0.18rem;
  padding: 0.5rem 0.28rem 0.22rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.24rem;
  box-sizing: border-box;
}
.card.line {
  padding-top: 0.22rem;
  padding-bottom: 0.5rem;
}
.tokenCol {
  width: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.08rem;
}
.icon {
  width: 0.58rem;
  height: 0.58rem;
  border-radius: 50%;
  background: #fff;
}
.icon.usdc {
  background: url(/assets/a13.05e53c72.png) center/cover no-repeat;
}
.icon.ksc {
  background: url(/assets/c11.0ddec226.png) center/cover no-repeat;
}
.name {
  font-weight: 600;
  font-size: 0.22rem;
}
.vline {
  width: 2px;
  height: 0.9rem;
  background: rgba(255, 255, 255, 0.6);
  position: relative;
  z-index: 11;
}
.infoCol {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.16rem;
}
.balance {
  font-size: 0.22rem;
  opacity: 0.8;
  text-align: center;
}
.pill {
  background: #fff;
  color: #111;
  border-radius: 0.22rem;
  padding: 0.06rem 0.2rem;
  min-width: 1.6rem;
  text-align: center;
  font-size: 0.22rem;
}
.panel.right {
  width: 4.7rem;
  background: #000;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #d5a85b;
  padding: 0.3rem;
  box-sizing: border-box;
  min-height: 5.6rem;
}
.divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.16rem 0;
  color: #fff;
  opacity: 0.9;
  position: relative;
}
.divider .dot {
  width: 0.46rem;
  height: 0.46rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.22rem;
  position: absolute;
  top: -0.28rem;
  left: 50%;
  transform: translate(-50%);
}
.divider .rate {
  margin-top: 0.12rem;
  letter-spacing: 0.02rem;
  font-size: 0.22rem;
}
.buy {
  margin-top: 0.24rem;
  width: 100%;
  height: 0.6rem;
  border: none;
  border-radius: 0.18rem;
  background: #cfa155;
  color: #111;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.24rem;
}
.circle {
  position: relative;
  width: 3.8rem;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.c {
  position: absolute;
  border: 0.12rem solid #3b3b3b;
  border-radius: 50%;
}
.c1 {
  inset: 0.18rem;
}
.c2 {
  inset: 0.48rem;
}
.txt {
  position: relative;
  font-size: 0.32rem;
  font-weight: 700;
  letter-spacing: 0.02rem;
  color: #f0c15e;
}
.circle .tick {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 0.12rem;
  height: 0.12rem;
  border-radius: 50%;
  background: #cfa155;
}
.circle .t1 {
  top: 0.18rem;
}
.circle .t2 {
  top: 0.48rem;
  background-color: #926120;
}
.legend {
  margin-top: 0.36rem;
  display: flex;
  align-items: center;
  color: #fff;
  gap: 0.12rem;
  font-size: 0.24rem;
  line-height: 1;
}
.legend .dot {
  display: inline-block;
  width: 0.17rem;
  height: 0.17rem;
  border-radius: 50%;
  background: #f0c15e;
  margin-right: 0.06rem;
}
.legend .dot.on {
  background-color: #926120;
}
.progress {
  margin-top: 0.2rem;
  color: #f0c15e;
  letter-spacing: 0.06rem;
  font-size: 0.24rem;
  position: relative;
}
.progress:before,
.progress:after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 0.5rem;
  height: 2px;
  background: #cfa155;
  opacity: 0.85;
  margin: 0 0.22rem;
}
.slide2 .content > * {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}
.slide2.entered .content > * {
  animation: enterUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.slide2.entered .content > *:nth-child(2) {
  animation-delay: 0.05s;
}
.slide2.entered .content > *:nth-child(3) {
  animation-delay: 0.1s;
}
.slide2.leaving .content > * {
  animation: leaveUp 0.5s ease both;
}
@keyframes enterUp {
  0% {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes leaveUp {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.995);
  }
}
</style>