<template>
  <div class="page assets">
    <div class="page-main">
      <aside class="sidebar">
        <div class="side-title">
          <img :src="gImage" alt="" />
          我的资产
          <img :src="rImage" alt="" />
        </div>
        <ul>
          <li class="item" :class="{ on: currentTab === 'ksc' }" @click="selectTab('ksc')">
            <span class="icon"><img :src="kscIcon" alt="" /></span>
            KSC
          </li>
          <li class="item" :class="{ on: currentTab === 'nft' }" @click="selectTab('nft')">
            <span class="icon"><img :src="nftIcon" alt="" /></span>
            NFT
          </li>
        </ul>
      </aside>

      <section class="content">
        <div v-if="currentTab === 'ksc'" class="ksc-grid">
          <div class="col-left">
            <div class="ksc-head">
              <div class="title">KSC 余额</div>
              <div class="value">1000.00</div>
              <div class="actions">
                <button>提取</button>
                <button>质押</button>
              </div>
            </div>
            <div class="box">
              <div class="box-title">KSC 交易记录</div>
              <div class="thead">
                <div>时间</div>
                <div>类型</div>
                <div>数量</div>
                <div>状态</div>
              </div>
              <div class="row">
                <div>2023-10-26</div>
                <div>购买</div>
                <div>+100</div>
                <div>成功</div>
              </div>
              <div class="row">
                <div>2023-10-25</div>
                <div>质押</div>
                <div>-50</div>
                <div>成功</div>
              </div>
              <div class="pager">
                <!-- <img src="./assets/prev.png" alt="" class="prev" />
                <span class="num">1</span>
                <img src="./assets/next.png" alt="" class="next" /> -->
              </div>
            </div>
          </div>
          <div class="col-right">
            <div class="box">
              <div class="box-title center">KSC 质押</div>
              <div class="thead">
                <div>质押数量</div>
                <div>收益</div>
                <div>操作</div>
              </div>
              <div class="row">
                <div>100</div>
                <div>10</div>
                <div><button>提取</button></div>
              </div>
              <div class="pager">
                <!-- <img src="./assets/prev.png" alt="" class="prev" />
                <span class="num">1</span>
                <img src="./assets/next.png" alt="" class="next" /> -->
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="currentTab === 'nft'" class="nft-wrap">
          <div class="nft-filter">
            <span :class="{ on: nftFilter === 'all' }" @click="selectNftFilter('all')"><i></i>全部</span>
            <span :class="{ on: nftFilter === 'staked' }" @click="selectNftFilter('staked')"><i></i>已质押</span>
            <span :class="{ on: nftFilter === 'unstaked' }" @click="selectNftFilter('unstaked')"><i></i>未质押</span>
          </div>
          <div class="nft-box">
            <div class="thead">
              <div>名称</div>
              <div>ID</div>
              <div>状态</div>
              <div>操作</div>
            </div>
            <div class="row">
              <div class="thumb"><img :src="a12Image" alt="" /></div>
              <div>#123</div>
              <div>已质押</div>
              <div><button>提取</button></div>
            </div>
            <div class="row">
              <div class="thumb"><img :src="a13Image" alt="" /></div>
              <div>#124</div>
              <div>未质押</div>
              <div><button>质押</button></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentTab = ref('ksc');
const nftFilter = ref('all');

const gImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAkCAYAAABrLwHZAAAAyklEQVRIia3UOw7CMBBF0QvZRiqnYBspYNcuWAYNXXYBBUKypcjyZz52a+nI45m3lxACzrMCEfheJ0BP4AYsHixDG/AGHlashHbgsGBV6H+hxZqQFutCGmwISTERJMHE0AhTQT1MDbUwE1TDzFCJuaAz5oYyNgXKWJwBYQj6ELunV22p3NWDHak8N5jLnAKe/8wNlg1wgbVumsHWaJjA3pypwdHQqkBJAsSgNE4iUJPNIagNehe0bI0maF1BVdCzz0owepdjBl/A5we6lWSAphwUuAAAAABJRU5ErkJggg==";
const rImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAkCAYAAABrLwHZAAAAxElEQVRIia3POw7CMBBF0YsFu0iVNCyDIqwaCvZARUGXbSAhJFuKjD/z8Wtmpjmad5jn+QkcgSuw4UgATsAZeACTF1uBN7B4wRCrXUaAIc4hYNjtbjBktwvMMRdYwsxgDTOBLUwN9jAVKMHEoBQTgRqsC2qxJmjBqqAVK4F3D/YXDzbFekv8brViOfSru3mwIoShZhXSYk1Ig3UhKSaCJJgY6mEqqIWpoRpmgkqYGcoxF7TH3FDChkAJu42AEvYBXl4I4AsOgWSwqc6zvQAAAABJRU5ErkJggg==";
const kscIcon = '/assets/c11.0ddec226.png';
const nftIcon = '/assets/c1.68c418a7.png';
const a12Image = '/assets/a12.1423f002.png';
const a13Image = '/assets/a13.05e53c72.png';

function selectTab(tab) {
  currentTab.value = tab;
}

function selectNftFilter(filter) {
  nftFilter.value = filter;
}
</script>

<style scoped>

.page{

  width:100%;

  height:100%;

  background:#f4f2ef;

  color:#111;

  font-size:.22rem

}

.logo{

  width:1.62rem;

  height:1rem;

  background:url(./logo.d7845fb0.png) no-repeat center/contain;

  border-right:1px solid #3e3a3a;

  cursor:pointer

}

.nav{

  margin-left:.4rem;

  display:flex;

  gap:.2rem;

  flex:1

}

.nav a{

  color:#111;

  text-decoration:none;

  font-size:.24rem;

  border-right:2px solid #111;

  padding-right:.2rem;

  line-height:1;

  cursor:pointer

}

.nav a:last-child{

  border-right:none

}

.nav a.on{

  color:#caa45f;

  font-weight:700

}

.addr{

  border:2px solid #111;

  padding:.06rem .14rem;

  border-radius:.22rem;

  font-weight:700;

  font-size:.2rem;

  background-color:#111;

  color:#fff

}

.sidebar{

  width:4.23rem;

  padding:.8rem .2rem .8rem 1.6rem;

  box-sizing:border-box;

  display:flex;

  flex-direction:column;

  justify-content:space-between

}

.side-title{

  font-size:.32rem;

  font-weight:800;

  display:flex;

  align-items:center;

  gap:.14rem

}

.side-title img{

  width:.2rem

}

.sidebar ul{

  padding:0;

  margin:0;

  display:flex;

  flex-direction:column;

  gap:.5rem

}

.sidebar .item{

  display:flex;

  align-items:center;

  gap:.2rem;

  padding:0 .12rem;

  border-left:4px solid transparent;

  cursor:pointer;

  font-size:.26rem

}

.sidebar .item .icon{

  width:.6rem;

  height:.6rem

}

.sidebar .item .icon img{

  width:100%;

  height:100%;

  object-fit:contain

}

.sidebar .item.on{

  font-weight:700

}

.content{

  padding:.8rem 1rem;

  flex:1;

  box-sizing:border-box

}

.stats-card{

  background:#111;

  color:#fff;

  border-radius:.24rem;

  padding:0 .6rem;

  display:grid;

  grid-template-columns:repeat(3,1fr);

  align-items:center

}

.stats-card .item{

  text-align:center;

  position:relative

}

.stats-card .item:not(:last-child):after{

  content:"";

  position:absolute;

  right:0;

  top:10%;

  bottom:10%;

  width:2px;

  background:rgba(255,255,255,.18)

}

.stats-card .label{

  margin-bottom:.2rem;

  font-size:.2rem;

  opacity:.9;

  letter-spacing:.06rem

}

.stats-card .label span{

  position:relative;

  padding:0 .28rem

}

.stats-card .label span:before,

.stats-card .label span:after{

  content:"|";

  opacity:.65;

  display:inline-block;

  margin:0 .06rem

}

.stats-card .value{

  font-size:.64rem;

  font-weight:800;

  letter-spacing:.02rem

}

.table{

  border:2px solid #adadad;

  border-radius:.16rem;

  overflow:hidden;

  height:calc(100% - 2.2rem - .2rem)

}

.thead,

.row{

  display:flex;

  align-items:center

}

.thead{

  font-weight:700;

  border-bottom:2px solid #adadad;

  font-size:.18rem;

  display:flex

}

.thead>div,

.row>div{

  padding:.16rem .14rem;

  flex:1;

  text-align:center;

  color:#666

}

.row>div{

  color:#111

}

.thead>div:last-child,

.row>div:last-child{

  border-right:none

}

.row{

  border-bottom:1px solid #adadad;

  font-size:.18rem

}

.pager{

  display:flex;

  align-items:center;

  justify-content:center;

  gap:.22rem;

  padding:.16rem 0

}

.pager img{

  width:100%

}

.pager .prev,

.pager .next,

.pager .num{

  width:.14rem;

  display:inline-flex;

  align-items:center;

  justify-content:center;

  font-weight:800;

  font-size:.22rem

}

.ksc-grid{

  display:flex;

  gap:.24rem;

  align-items:start;

  padding:0 1rem;

  height:100%

}

.col-left{

  display:flex;

  flex-direction:column;

  gap:.24rem;

  width:50%;

  height:100%;

  overflow-y:auto

}

.col-right{

  width:50%;

  height:100%;

  overflow-y:auto

}

.ksc-head{

  background:url(./a26.23b5ac50.png) no-repeat center/cover;

  color:#fff;

  border-radius:.24rem;

  padding:.46rem .44rem;

  display:flex;

  flex-wrap:wrap;

  align-items:center

}

.ksc-head .title{

  font-size:.22rem;

  opacity:.9;

  width:100%

}

.ksc-head .value{

  font-size:.6rem;

  font-weight:800;

  letter-spacing:.01rem;

  display:block

}

.ksc-head .actions{

  width:100%;

  margin-top:.2rem;

  display:flex;

  justify-content:space-between

}

.ksc-head .actions button{

  background:#cbcbcb;

  color:#111;

  border:none;

  border-radius:.28rem;

  width:1rem;

  height:.4rem;

  font-size:.22rem;

  cursor:pointer

}

.box{

  border:2px solid #adadad;

  border-radius:.16rem;

  overflow:hidden;

  height:100%;

  box-sizing:border-box

}

.box-title{

  padding:.16rem .2rem;

  font-weight:700;

  border-bottom:2px solid #adadad;

  font-size:.22rem

}

.box.center .box-title{

  text-align:center

}

.box .thead,

.box .row{

  display:flex;

  align-items:center

}

.box .thead{

  font-weight:700;

  border-bottom:2px solid #adadad;

  font-size:.18rem

}

.box .thead>div,

.box .row>div{

  padding:.16rem .14rem;

  flex:1;

  text-align:center;

  color:#666

}

.box .row>div{

  color:#111

}

.box .row[data-v-7cc4f7b1]{

  border-bottom:1px solid #adadad;

  font-size:.18rem

}

.box .pager{

  display:flex;

  align-items:center;

  justify-content:center;

  gap:.22rem;

  padding:.16rem 0

}

.box .pager img{

  width:100%

}

.box .pager .prev,

.box .pager .next,

.box .pager .num{

  width:.14rem;

  display:inline-flex;

  align-items:center;

  justify-content:center;

  font-weight:800;

  font-size:.22rem

}

.points-grid{

  display:grid;

  grid-template-columns:1fr 1fr;

  gap:.24rem;

  padding:0 1rem;

  align-items:start;

  height:100%;

  overflow-y:auto

}

.points-left{

  display:flex;

  height:100%

}

.points-card{

  background:url(./a25.774dee3a.png) no-repeat center/cover;

  color:#fff;

  border-radius:.24rem;

  width:100%;

  height:100%;

  display:flex;

  flex-direction:column;

  align-items:center;

  justify-content:center;

  position:relative

}

.points-title{

  font-size:.22rem;

  opacity:.9;

  position:absolute;

  top:.4rem

}

.points-value{

  font-size:.6rem;

  font-weight:800;

  margin-top:.2rem;

  position:relative;

  top:.4rem

}

.points-badge{

  width:3.8rem;

  height:4.4rem;

  margin-top:0

}

.points-btn{

  margin-top:.4rem;

  background:#cbcbcb;

  color:#111;

  border:none;

  border-radius:.28rem;

  width:1.2rem;

  height:.46rem;

  font-size:.22rem;

  cursor:pointer;

  position:relative;

  top:-.2rem

}

.points-right{

  height:100%;

  overflow-y:auto;

  box-sizing:border-box

}

.nft-wrap{

  padding:0;

  box-sizing:border-box;

  height:100%;

  overflow-y:auto

}

.nft-filter{

  background:#111;

  color:#fff;

  border-radius:.24rem;

  display:flex;

  align-items:center;

  padding:.2rem .36rem;

  margin-bottom:.24rem;

  box-sizing:border-box;

  height:.8rem

}

.nft-filter span{

  cursor:pointer;

  display:inline-flex;

  align-items:center;

  gap:.16rem;

  font-size:.24rem;

  opacity:.95;

  flex:1;

  justify-content:center

}

.nft-filter i{

  width:.12rem;

  height:.12rem;

  background:#e2b14b;

  border-radius:50%;

  display:inline-block

}

.nft-filter span.on{

  font-weight:800

}

.nft-box{

  height:calc(100% - .8rem - .24rem);

  overflow-y:auto;

  box-sizing:border-box

}

.nft-box .thead,

.nft-box .row{

  display:flex;

  align-items:center

}

.nft-box .row{

  border-bottom:1px solid #adadad

}

.nft-box .thumb{

  width:.8rem;

  height:.5rem;

  display:flex;

  align-items:center;

  justify-content:center

}

.nft-box .thumb img{

  width:100%;

  height:100%;

  object-fit:cover;

  border-radius:.08rem;

  border:1px solid #ccc

}

.nftd-wrap{

  padding:0;

  border:2px solid #adadad;

  border-radius:.44rem .44rem .16rem .16rem;

  height:100%;

  box-sizing:border-box

}

.nftd-header{

  display:flex;

  align-items:center;

  margin-bottom:.12rem

}

.nftd-header .pill{

  flex:1;

  text-align:center;

  color:#fff;

  padding:.16rem .5rem .16rem .16rem;

  font-size:.28rem;

  border-radius:.5rem

}

.nftd-header .pill:not(:first-child){

  margin-left:-.68rem

}

.nftd-header .pill:nth-child(1){

  background:#666

}

.nftd-header .pill:nth-child(2){

  background:#4d4d4d

}

.nftd-header .pill:nth-child(3){

  background:#2b2b2b

}

.nftd-header .pill:nth-child(4){

  background:#0e0e0e;

  padding-right:0

}

.nftd-box{

  border:none

}

.nftd-box .row{

  display:grid;

  grid-template-columns:repeat(4,1fr);

  border-bottom:1px solid #adadad;

  align-items:center;

  height:.625rem

}

.nftd-box .cell{

  text-align:center

}



@media (max-width: 768px) {
  .sidebar {

    width: 100%;

    padding: 0.5rem;

    flex-direction: row;

    justify-content: center;

    border-bottom: 2px solid #adadad;

  }

  .sidebar ul {

    flex-direction: row;

    gap: 1rem;

  }

  .side-title {

    display: none;

  }

  .content {

    padding: 0.5rem;

  }

  .ksc-grid {

    flex-direction: column;

    padding: 0;

  }

  .col-left, .col-right {

    width: 100%;

  }

}

</style>