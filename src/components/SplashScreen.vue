<template>
  <div :class="['splash', { entered: isEntered, leaving: isLeaving }]">
    <div class="mask"></div>
    <div class="logod">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAB1CAYAAAACy8wKAAAFO0lEQVR4nO2cjVHjMBCFlcw14CshV4KvhFwJXAlQApQAJSQlkBKSEkgJoYRQgm/EaW82y6705NhXE/ab8QC2LMvP+yPJMrOu6wLCbDaLpbDC0+bvjYD3HZlfwU2PzrfKC8w+4T2ejVsSAByTvjJuSQAuEoCLBOAiAbhIAC4SgIsE4CIBuEgALhKAiwTgIgG4SAAuEoCLBOAiAbhIAHG90TKE0KaibyGEtXIaLxPZhxB27O979nswhPBqXHoRQrhJdTVp3y6V36Xr565ttY/XTTxVHufI+3nf0aVtq5wQG3hkZV7YDRId25aZC3eZLV7jtnCe1j5iKequPW7eT8ndohgrJkp8knfGE88Rb/RRHN8Li6NraUJdlJJIsdHcze7SzdXCzTee/yOE8JP9JNfdZNzpYuTWTN4LH34g/6xkKdzzSVhQFO1XKtfnAYyOJdKNcI9NIdDVIOMZsetd48ho7tYmNyP2yc36Iq3jMRPcJ4m0JBmoI+segZpDaZsCcpOy1D7tr4lBTUbg1tg/CKXU/AJcpNQFaFI9Wv3H1AbLDUvtszbJaF2ASCuyUx/eUhZ7UKyySS54EIliMlgi7UQGyj3pGmLw/55inOyVx/qfC25DmVDbHsYUVZrzgfk+37/K1IH0uDWWihs+Z9o3iR53dIXf6edOpOXbEYLjLlkEt6qxMp9084VRTu5/kyLtRcqWqV8OLYZADlqHcGsN2RWxHoLcvy8F7viEeSdy2WNsRZntJWOJvGHWDMIQSM/Q2sr3v5dHstuTMNXHyqdNwbhNQvHOZJuOc5HGHLvxYVWbYhw9uBvx90l5JDDeimAmuwS5wF3Tz9GmYYYK3MQWbMvJtdBGyCzEFS9ltyXQONnTH0sk6pfl2nISe2cpmlNEf8uMxBci8r+y+MGF2WeGMQ1zPV4+dw7avkbUWxowUzeH35PaFv8oEMBfBAC4SAAuEoCLBFD6zl/LRqHwnuyqyCU26gmXOlyrzECR0PpHkj6TalYHsDWOldqpnXe0RCp1tLQtNyn3v0UKxgMuTRyutHM0kbSC5wp1CZFk77tL08QWC6N8E0XiLwLujZExTWVQD7ZN5WTv+5yBaa53LIc5uV437ae5MH4ujfC1dmrTxnJgryrZpfGa5ssNs7pjYTIOsaQclrWU0KzJeqlx1KwoHuDuprmZNiKXtAMF7jFEsq4tLVPOcJyEDhLJsqKhpmovKZJmTXIO/2BZUWAiaUrmJv1ruaRIwbg+Wb8m4sk0SRRpbljMZN/L9yAXqLWArSYgTekhJ+MvbUlBcamDEWY+eBC5G5oB+jIFkbSQor12/5CEyN0k1zgeWytvYWSY0cq885VmAUrrq8zjX0kk01IKx96RQa02ZpSYQkwitNikxqJ/F08xSVOw1Iv+rGjpXa6g+cDcGCxOcp3QpbBEmtxa6ksyT++7tWUpyOq23BrGq4Gym5b+7guDXFoguh1pSc3kaJQ5lS6z6PNWKW+56JSyW3V9cvpWGxHLyraGmF1mevSqRAqGhSBbbnby04ske9zrtIaxZqpkkz6kmeR3IUOgfVvCP4ihD/ikldBHgRtAnM2Z81Ny6fG5A/Dq+nzpDYCvBQBwkQBcJAAXCcBFAnCRAFwkABcJwEUCcJEAXCQAFwnARQJwkQBcJAAXCcBFAnCRAFwkABcJwEUCcJEAXCQAFwnARQJwkQBcJAAXCcBFAsj979sTZrPSvxD4XNSspoFFSlzDOp3qp+3uViKE8AesRRCczV+InAAAAABJRU5ErkJggg==" alt="" draggable="false" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

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
      }, 800);
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
.splash {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mask {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.85);
}
.logod {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.logod img {
  width: 2.4rem;
  height: 2.4rem;
  object-fit: cover;
  -webkit-user-drag: none;
  user-select: none;
  opacity: 0;
}
.splash.entered .logod img {
  animation: fadeIn 0.8s ease both;
}
.splash.leaving .logod img {
  animation: fadeOut 0.6s ease both;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -54%) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -46%) scale(0.99);
  }
}
</style>
