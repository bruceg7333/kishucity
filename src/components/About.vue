<template>
  <div class="page about">
    <header class="page-header">
      <div class="logo" @click="goToHome"></div>
      <div class="title2">公司介绍</div>
    </header>
    <main class="content">
      <section class="text-col">
        <p>KISHU CITY（$KSC）是一个以现实资产与区块链融合为基础的链上文化共创项目。项目以真实不动产作为底层支撑，结合 Web3 技术构建了一个既去掉线下实体入驻，又实现线上协同治理的开放社区。通过引入人工智能、数字身份与去中心化自治（DAO）机制，KISHU CITY 致力于打造一个可持续进化、具有文化生命力的超级 IP 生态系统，让每一位参与者不仅能够以提案、投票等方式直接参与空间规划，内容创作与社区规则的制定，还能通过发行 IP、创建衍生品牌和文化内容来实现个人与群体的价值创新。</p>
        <p>在 KISHU CITY 中，现实世界的房地产通过 NFT 映射与资产代币化，被转化为可映射、可参与、可治理的“链上文化单元”，显著提升了资产的文化及金融流动性。同时，依托于 $KSC 代币的经济与治理模型，社区热度与项目发展将直接反馈参与者的数字身份与资产价值，形成不断自我增强的良性循环。</p>
        <p>该项目强调虚实联动与跨媒介叙事，提供包括 DApp 在内的链上工具，使用者能够完成空间预约、NFT 铸造、活动发布及社区投票等一系列操作，真正实现数字身份、实体空间与链上资产的三位一体。KISHU CITY 的终极目标不是构建一个去中心化的生活与创作网络，更是一个让艺术家、品牌、投资者与建造者都能共享流量、共识与增值收益的文化经济共同体；在技术重塑人与场域的时代，重新唤醒人们对自由、归属与创意的共同渴望。</p>
      </section>
      <section class="art-col">
        <img :src="a12Image" alt="draw" draggable="false" />
      </section>
    </main>
    <RightBar :fab-open="isFabOpen" @fab-click="toggleFab" />
    <Modal name="mm">
      <template #default>
        <RightBarModal v-if="isFabOpen" @close="closeFab" />
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Assuming vue-router is used
import RightBar from './RightBar.vue';
import RightBarModal from './RightBarModal.vue';
import Modal from './Modal.vue';

const isFabOpen = ref(false);
const router = useRouter();

const a12Image = new URL('../../assets/a12.1423f002.png', import.meta.url).href;

function toggleFab() {
  isFabOpen.value = !isFabOpen.value;
}

function closeFab() {
  isFabOpen.value = false;
}

function goToHome() {
  router.push('/');
}
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
}
.page.about {
  width: 100%;
  height: 100%;
  position: relative;
  background: #fff;
  overflow: hidden;
}
.page-header {
  height: calc(1.55rem + 2px);
  display: flex;
  align-items: center;
  border-bottom: 2px solid #000;
}
.logo {
  width: 1.62rem;
  height: 1rem;
  background: url(../../assets/logo.d7845fb0.png) no-repeat center/contain;
  border-right: 1px solid #3e3a3a;
  cursor: pointer;
}
.title2 {
  font-size: 0.28rem;
  padding-left: 0.3rem;
}
.content {
  height: calc(100% - 1.55rem - 2px);
  margin-right: calc(1.45rem + 2px);
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
}
.text-col {
  padding: 0 1rem 0 2rem;
  font-size: 0.2rem;
  line-height: 1.8;
  height: 75%;
  overflow-y: auto;
  margin-top: 1rem;
}
.text-col p {
  margin: 0 0 0.28rem;
}
.art-col {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 0.4rem;
}
.art-col img {
  width: 90%;
  height: auto;
  object-fit: contain;
}

/* Modal transition styles - ideally these would be global or with the Modal component */
.mm-enter-from {
  opacity: 0;
  transform: translate(20px) scale(0.98);
}
.mm-enter-active {
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.mm-enter-to {
  opacity: 1;
  transform: translate(0) scale(1);
}
.mm-leave-from {
  opacity: 1;
  transform: translate(0) scale(1);
}
.mm-leave-active {
  transition: all 0.25s ease;
}
.mm-leave-to {
  opacity: 0;
  transform: translate(10px) scale(0.99);
}
</style>
