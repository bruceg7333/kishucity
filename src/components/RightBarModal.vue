<template>
  <div class="menu-mask" @click="handleMaskClick">
    <div class="menu-panel">
      <header class="menu-header">
        <div class="logoh" @click.stop="closeModal">
          <img :src="logoImage" alt="" draggable="false" />
        </div>
        <span>目 录</span>
      </header>
      <div class="grid">
        <div class="cell">
          <div class="cell-inner">
            <div class="icon">
              <img :src="a6Image" alt="" draggable="false" />
            </div>
            <div class="texts">
              <div class="title">生态</div>
              <div class="subs">
                <a>创作者生态</a>
                <i class="sep"></i>
                <a>物件生态</a>
                <i class="sep"></i>
                <a>经济生态</a>
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
              <div class="title">财务</div>
              <div class="subs">
                <a>质押</a>
                <i class="sep"></i>
                <a>NFT商城</a>
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
              <div class="title">关于我们</div>
              <div class="subs">
                <a @click.stop="goToAbout">公司介绍</a>
                <i class="sep"></i>
                <a>项目介绍</a>
                <i class="sep"></i>
                <a>合作伙伴</a>
                <i class="sep"></i>
                <a>团队介绍</a>
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
              <div class="title">市场</div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="cell-inner">
            <div class="icon">
              <img :src="a10Image" alt="" draggable="false" />
            </div>
            <div class="texts">
              <div class="title">常见问题</div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="cell-inner">
            <div class="icon">
              <img :src="a11Image" alt="" draggable="false" />
            </div>
            <div class="texts">
              <div class="title">合规信息</div>
            </div>
          </div>
        </div>
      </div>
      <footer class="menu-footer">
        <div class="links">
          <a>使用条款</a>
          <a>隐私政策</a>
          <a>联系方式</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; // Assuming vue-router is used
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);
const router = useRouter();

// Image paths
const logoImage = '/assets/logo.d7845fb0.png';
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
}
.menu-panel {
  width: calc(100% - 1.45rem);
  height: 100vh;
  background: #fff;
  margin-right: 1.45rem;
  border-right: 2px solid #000;
}
.menu-header {
  height: 1.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.48rem;
  letter-spacing: 0.06rem;
  border-bottom: 2px solid #000;
  position: relative;
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
  height: calc(100% - 1.55rem - 1.2rem);
  border-left: 2px solid #000;
}
.cell {
  border-bottom: 2px solid #000;
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
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  box-sizing: border-box;
  gap: 0.3rem;
}
.icon {
  width: 1.2rem;
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
  gap: 0.24rem;
  font-size: 0.27rem;
  color: #111;
  cursor: pointer;
  position: relative;
}
.subs a {
  position: relative;
  text-decoration: none;
  color: inherit;
}
.subs a:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.02rem;
  height: 2px;
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
.menu-footer {
  margin-top: auto;
  height: 1.2rem;
  background: #0b0b0b;
  display: flex;
  align-items: center;
  padding-left: 1.62rem;
}
.links {
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
}
.links a {
  color: #9fa0a0;
  font-size: 0.19rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.links a:hover {
  color: #fff;
  transition: all 0.3s ease;
}
@font-face {
  font-family: "Gen-Jyuu-Gothic-P-Bold-2";
  src: url(../../assets/Gen-Jyuu-Gothic-P-Bold-2.9c3d5b1f.woff) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

</style>