<template>
  <div class="app-layout">
    <router-view />
    <RightBar v-if="!isMobile">
      <template #extra>
        <div class="logo2" style="padding-top: .6rem;">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAB1CAYAAAACy8wKAAAFO0lEQVR4nO2cjVHjMBCFlcw14CshV4KvhFwJXAlQApQAJSQlkBKSEkgJoYRQgm/EaW82y6705NgXE/ab8QC2LMvP+yPJMrOu6wLCbDaLpbDC0+bvjYD3HZlfwU2PzrfKC8w+4T2ejVsSAByTvjJuSQAuEoCLBOAiAbhIAC4SgIsE4CIBuEgALhKAiwTgIgG4SAAuEoCLBOAiAbhIAC4SgIsE4CIBuEgALhKAiwTgIgG4SAAuEoCLBOAiAbhIAHG90TKE0KaibyGEtXIaLxPZhxB27O979vsmhPBqXHoRQrhJdTVp3y6V36Xr565ttY/XTTxVHufI+3nf0aVtq5wQG3hkZV7YDRId25aZC3eZLV7jtnCe1j5iKequPW7eT8ndohgrJkp8knfGE88Rb/RRHN8Li6NraUJdlJJIsdHcze7SzdXCzTee/yOE8JP9JNfdZNzpYuTWTN4LH34g/6xkKdzzSVhQFO1XKtfnAYyOJdKNcI9NIdDVIOMZsetd48ho7tYmNyP2yc36Iq3jMRPcJ4m0JBmoI+segZpDaZsCcpOy1D7tr4lBTUbg1tg/CKXU/AJcpNQFaFI9Wv3H1AbLDUvtszbJaF2ASCuyUx/eUhZ7UKyySS54EIliMlgi7UQGyj3pGmLw/55inOyVx/qfC25DmVDbHsYUVZrzgfk+37/K1IH0uDWWihs+Z9o3iR53dIXf6edOpOXbEYLjLlkEt6qxMp9084VRTu5/kyLtRcqWqV8OLYZADlqHcGsN2RWxHobcvy8F7viEeSdy2WNsRZntJWOJvGHWDMIQSM/Q2sr3v5dHstuTMNXHyqdNwbhNQvHOZJuOc5HGHLvxYVWbYhw9uBvx90l5JDDeimAmuwS5wF3Tz9GmYYYK3MQWbMvJtdBGyCzEFS9ltyXQONnTH0sk6pfl2nISe2cpmlNEf8uMxBci8r+y+MGF2WeGMQ1zPV4+dw7avkbUWxowUzeH35PaFv8oEMBfBAC4SAAuEoCLBFD6zl/LRqHwnuyqyCU26gmXOlyrzECR0PpHkj6TalYHsDWOldqpnXe0RCp1tLQtNyn3v0UKxgMuTRyutHM0kbSC5wp1CZFk77tL08QWC6N8E0XiLwLujZExTWVQD7ZN5WTv+5yBaa53LIc5uV437ae5MH4ujfC1dmrTxnJgryrZpfGa5ssNs7pjYTIOsaQclrWU0KzJeqlx1KwoHuDuprmZNiKXtAMF7jFEsq4tLVPOcJyEDhLJsqKhpmovKZJmTXIO/WBZUWAiaUrmJv1ruaRIwbg+Wb8m4sk0SRRpbljMZN/L9yAXqLWArSYgTekhJ+MvbUlBcamDEWY+eBC5G5oB+jIFkbSQor12/5CEyN0k1zgeWytvYWSY0cq885VmAUrrq8zjX0kk01IKx96RQa02ZpSYQkwitNikxqJ/F08xSVOw1Iv+rGjpXa6g+cDcGCxOcp3QpbBEmtxa6ksyT++7tWUpyOq23BrGq4Gym5b+7guDXFoguh1pSc7kaJQ5lS6z6PNWKW+56JSyW3V9cvpWGxHLyraGmF1mevSqRAqGhSBbbnby04ske9zrtIaxZqpkkz6kmeR3IUOgfVvCP4ihD/ikldBHgRtAnM2Z81Ny6fG5A/Dq+nzpDYCvBQBwkQBcJAAXCcBFAnCRAFwkABcJwEUCcJEAXCQAFwnARQJwkQBcJAAXCcBFAnCRAFwkABcJwEUCcJEAXCQAFwnARQJwkQBcJAAXCcBFAsj979sTZrPSvxD4XNSspoFFSlzDOp3qp+3uViKE8AesRRCczV+InAAAAABJRU5ErkJggg==" alt="" draggable="false">
        </div>
      </template>
    </RightBar>
    <FabButton v-if="!isMobile" :class="{ open: isFabOpen }" class="fab-desktop" @click="toggleFab" />
    <Transition name="mm">
      <RightBarModal v-if="isFabOpen" @close="closeFab" />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import RightBar from './RightBar.vue';
import RightBarModal from './RightBarModal.vue';
import FabButton from './FabButton.vue';

const isFabOpen = ref(false);
const isMobile = ref(false);

function toggleFab() {
  isFabOpen.value = !isFabOpen.value;
}

function closeFab() {
  isFabOpen.value = false;
}

function checkScreenSize() {
  isMobile.value = window.innerWidth <= 768;
}

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
.app-layout {
  position: relative;
  width: 100%;
  height: 100%;
}

.fab-desktop {
  position: fixed;
  right: 0.3rem;
  bottom: 1.8rem;
  z-index: 100;
}

@media (max-width: 768px) {
  .app-layout > :deep(.right-bar) {
    display: none;
  }
}
</style>