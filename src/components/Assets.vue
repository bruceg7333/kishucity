<template>
  <div class="page assets">
    <main class="page-main">
      <aside class="sidebar">
        <div class="side-title">
          我的资产
        </div>
        <ul>
          <li class="item on">
            KSC
          </li>
          <li class="item">
            NFT
          </li>
          <!-- More sidebar items can be added here -->
        </ul>
      </aside>

      <section class="content">
        <h2>资产概览</h2>
        <div class="stats-card">
          <div class="stat-item">
            <h3>总资产</h3>
            <p>1000 KSC</p>
          </div>
          <div class="stat-item">
            <h3>NFT 数量</h3>
            <p>5</p>
          </div>
          <div class="stat-item">
            <h3>今日收益</h3>
            <p>+10 KSC</p>
          </div>
        </div>

        <h3>我的 NFT</h3>
        <div class="nft-grid">
          <!-- NFT items would go here -->
          <div class="nft-item">NFT 1</div>
          <div class="nft-item">NFT 2</div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// No specific logic extracted as the original file was not found.
</script>

<style scoped>
.page.assets {
  width: 100%;
  height: 100%;
  background: #f4f2ef;
  color: #111;
  font-size: 0.22rem;
  display: flex;
  flex-direction: column;
}

.page-main {
  display: flex;
  height: calc(100% - 1.55rem - 2px); /* Adjusted height to account for global header */
  margin-right: 0;
  flex: 1;
}

.sidebar {
  width: 4.23rem;
  padding: 0.8rem 0.2rem 0.8rem 1.6rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.side-title {
  font-size: 0.32rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.14rem;
  margin-bottom: 0.5rem;
}

.side-title img {
  width: 0.2rem;
}

.sidebar ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none; /* Remove default list styling */
}

.sidebar .item {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0 0.12rem;
  border-left: 4px solid transparent;
  cursor: pointer;
  font-size: 0.26rem;
}

.sidebar .item .icon {
  width: 0.6rem;
  height: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar .item .icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.sidebar .item.on {
  font-weight: 700;
  border-left-color: #caa45f; /* Highlight active item */
}

.content {
  padding: 0.8rem 1rem;
  flex: 1;
  box-sizing: border-box;
  overflow-y: auto; /* Enable scrolling for content */
}

.stats-card {
  background: #111;
  color: #fff;
  border-radius: 0.24rem;
  padding: 0.6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  font-size: 0.28rem;
  margin-bottom: 0.1rem;
}

.stat-item p {
  font-size: 0.24rem;
  font-weight: 700;
}

.nft-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr)); /* Responsive grid */
  gap: 0.5rem;
}

.nft-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.1rem;
  padding: 0.5rem;
  text-align: center;
  color: #333;
}
</style>