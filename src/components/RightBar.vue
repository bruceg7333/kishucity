<template>
  <aside class="right-bar">
    <div class="notice">
      <img :src="noticeImage" alt="" draggable="false" />
    </div>
    <div class="divider"></div>
    <slot name="extra"></slot>
    <div class="slogan">{{ slogan }}</div>
    <button :class="['fab', { open: fabOpen }]" @click="$emit('fab-click')"></button>
    <div class="langs">
      <template v-if="showLangOptions">
        <div class="lang" @click="setLang('ja')">
          <span class="dot ja">
            <img :src="jaFlag" alt="" draggable="false" />
          </span>
          <span>日本語</span>
        </div>
        <div class="lang" @click="setLang('en')">
          <span class="dot en">
            <img :src="enFlag" alt="" draggable="false" />
          </span>
          <span>EN</span>
        </div>
        <div class="lang" @click="setLang('zh')">
          <span class="dot zh">
            <img :src="zhFlag" alt="" draggable="false" />
          </span>
          <span>中文</span>
        </div>
      </template>
      <div v-else class="lang" @click="toggleLangOptions">
        <span v-if="currentLang === 'ja'" class="dot ja">
          <img :src="jaFlag" alt="" draggable="false" />
        </span>
        <span v-else-if="currentLang === 'en'" class="dot en">
          <img :src="enFlag" alt="" draggable="false" />
        </span>
        <span v-else-if="currentLang === 'zh'" class="dot zh">
          <img :src="zhFlag" alt="" draggable="false" />
        </span>
        <span>{{ currentLang === 'ja' ? '日本語' : currentLang === 'en' ? 'EN' : '中文' }}</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  slogan: { type: String, default: '开启您的未来之旅' },
  fabOpen: { type: Boolean, default: false },
  showLangs: { type: Boolean, default: false },
});

const emit = defineEmits(['fab-click']);

const showLangOptions = ref(false);
const currentLang = ref('zh');

// Base64 encoded flag images from the original JS
const jaFlag = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAARCAYAAADHeGwwAAAB60lEQVQ4ja2Vy2sTURSHv8mdDDFjolYCUt9S0UUlNDQgijtdNLhRlxZXEnHjKn+FdFM3pcSN7hQFceNGLfiAoCIUhOjoarQ1NEIeo9QJ85DTpmSXCU5/mzl3hvv9zr1zzr0aUABu9p+ikHgSZgOoAwu6wKvV6vVCYZMfhvH4mqbRaDSo1+ulSqWCGBSLxSL5fD5m4gM5joNhGDLOJ4BWq9XaNrio2WzSbrclbOubuzJ8W7yuQ+P+I7rLn0iOjbHvUolM6amhc/rMUI/Kxv2+yofzs6xZS2jIsj2s2/NMLc4xXr4WuZrEsI+B67I8e4uf1hJZJsmok2SNU4RovL9Rpv3ybTyDzpt3/Hr1ml2cAJUAPyDs+aR37ifA5ce9h/EMXHsVnx4aagO+pXDdR7EDd2UtnkH6+LENUCAmxuB3JVIKj3XSEwfjGWTOTjN+uUSLb/i9v2gqgaYU3T9fSbGXA+WrkQZDq0i6cvLuHF7HYeXFU/AhwMPkCIUnd8gUopszskz1PbuZfv6Aw4+f8fvzF/RshtzFC6SOHoqEbxnouh7pQ+7KDDlmRoPqOkopCaX2JFYjTRxVcg4lk0kJk5J6rVarnZEXnU6HIBiU4//INE1s28ayLBl+lLN7on8fnJPekgaOuQATsAELWPgHulObapWKsLsAAAAASUVORK5II=";
const enFlag = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAANCAYAAABCZ/VdAAABl0lEQVQ4ja2Tv24UMRCHv7HH+wdyIggKCgQCUVBQI2okqPMIEUjpeQhehPegoUIioqWnIIdIchByl9td24O8CYqQKPak/BqPR/Y3459tefTyzTuB+21Ttatl11WVE3AkM2onfOmFPb/m9dmCVQhEMyaoBT5rP8QXleqd2bWGnDJtrcQMMSW2mor29BfNk7s8ePanc5hIk9ijbqqleCBetutaG117fPC4CGZGCIGgjrjuiaslMRk5T6bP1YkzEWc5GpYNS0Yqo0HKmViWiUBQxBkyHZ7VkLIb52RkUCwvc0sEAfWePAzExQl9YpPO0a/zI6qqwnvH4eKEtqlJlumGyPJ6y9G3Y35uN9Q3ZnRDIqY8Hb77auc8KN52EVGHOCEXzwUeJ+GprPl9cEhfTjG9cfTtLRkvL+YBPytxJoucu5MN5xxxUHrdGm3z09loWhyPgUewArTyyi9lJSEOcx6Z9sYv4Wei/2ZKgf8pj2U2kens4b0AVJvtm6RWf3zYH4Du4suW+CpUmu11/v7jJ+D738QVwW8D+3sA+sizQJt7upcAAAAASUVORK5II=";
const zhFlag = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA90lEQVQokZ3TvStGcRQH8I8nBhuTVaGUp8gkJi+RMhhklsVuUzLaDCxWfwAyKP8AKYPEICZK6RlkJy8d/W5dl+G597vc+nU+ndvpnJaH4yWF9GIBw+jGO+5whkO8ZuWtBTiGDYyjLfc+ivn0XcdzPNZyBTM4wHQBZunEMvbRl+Ho3o8tdP2Dionum2gPOIs5DDQBs8RMjqLzFCZLwCwTgevoqYDrtTSIKukI3MBnBdwIfImbCvgqpn2CLwyWgB/hAp/iFiMlpr4dONuwF6ziogm4l5bk13peYxG7aYjFxN+tYSU1+3MYj9jBE4ZyV3WP83RVbz+V+AZ6sS1FNqFKsgAAAABJRU5ErkJggg==";
const noticeImage = "data:image/png;base64,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"
function toggleLangOptions() {
  showLangOptions.value = !showLangOptions.value;
}

function setLang(lang) {
  currentLang.value = lang;
  showLangOptions.value = false;
}

// Watch for changes in props.showLangs to update internal state
watch(
  () => props.showLangs,
  (newVal) => {
    showLangOptions.value = newVal;
  }
);
</script>

<style scoped>
.right-bar {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.45rem;
    height: 100%;
    border-left: 2px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 12;
}
.notice {
  height: 1.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.divider {
  width: 100%;
  height: 0;
}
.slogan {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.28rem;
  letter-spacing: 0.06rem;
  margin-top: 0.3rem;
  font-weight: bold;
  user-select: none;
  font-family:
    "Gen-Jyuu-Gothic-P-Bold-2", "SourceHanSansCN-Regular", sans-serif;
}
.fab {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 2rem;
  width: 0.76rem;
  height: 0.76rem;
  border-radius: 50%;
  border: none;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABLCAYAAADakmGTAAADO0lEQVR4nO2cv08UQRSAvzsQKayIIdGERAgxaiGNxMpODJqolbGRgmBLZeO/QENlQ+IfYGUCjUSs6IjQWGBCJBgaCZErjAU5zmDmfHPC3h3szt3sz/clr7ni9s23s3N7M2+mRDIMAneB28BN4BpwRT6/FMjoN7AP/AC+A1+BL8CafJ5LLgCTwBtgCzjuUmzJd07KNTLPOLAAVLooqV1U5FrjWZNWBp7JI+NbU3tYkxzKKfBxJo+BzQRFBWNTckod14GVFIkKxorkmTh9wGvgMMWybBxKrj1JSbsKrGZAVDBWJfdYuQfsZVCWjT1pQyy8AKoZlmWjKm3xymwORAVj1pewPMqy0XVp0zmWZWO6W7Lu52TMOi+q0taOGInpf2BaoiJtdqIPWC+QLBvr0vbIzBVQlo25qLLuALUCC6uJg1CYKZGNAsuysRF2emFmNXImPNkXgV0V1YhdcRIg2OXeAkMRx7vPDMkTlpi5om2tVc1xfbJObSTPexRJy9tOWZE3DQJa9v1lP9u7ELugCyUOr3hFoCqLDRXbA97orLOpE8cNR7Jh+nMM1XUHZUkfspjqbTHzGRc7gVueJT1B/goY0AcmEdnAuj1cK0BccWUx3eYxZhEnWTRY3umzJ0Y85i8qap5J4uocdDveTweM8JGPV7APCLPPX5/3IyaX8nhHDXIN8NlqfpTwjFYkl+wXFTvxcBRSUZ/XxzJa0UtpgaZMfmB7w7gc2pkyW/fibVjy2SbtYRHRMSwaR+ZX8iBLGSfMQTnPmwM8sG+E7eSuWf7YMYPkN48XMIP++w7/S5ocn7bYUpMEdVdZmK1Y8Pz6E3q2oiSbozY93a2a1Mh3Mh/WI3Vb/V3My5VbOuManvqMa1m62qesZJ0gxtGxXQT5UEgF0ag70nXJcDStS5rnczntWSfIsjg6VSrwtmgWItDSjVbvtI621TtmDXE+RXc1LcyLm5ZoBeLpaKpADG62NCZ/2cILhVfA5/M0aBX1vwhdRY3W6Uer07foTpCI6F4jB3Q3mwO6X9IB3ZHrQOH3fKs0z7Isem6FA3oyigN69o4DerqTI3p+mCN6Qp0DegZiB+gpm47k5hxXPSk4CsBfmd8ZC+N6zTUAAAAASUVORK5II=) no-repeat center/contain;
  cursor: pointer;
  margin: 0 auto;
  transition:
    transform 0.35s ease,
    background-image 0s linear 0.35s;
}
.fab.open {
  transform: rotate(180deg);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABLCAYAAADakmGTAAAD6UlEQVR4nO2czUtUURjGfyoZSCFEBkVSRCQuamOSBIGLQDcua2OBIrpRNy6kP8CN0LIWuWgZ6EqhhSC4cCdoUYipIIYEiaEghOikTNzhvXI93jtz59zPmTkPPJuZe9+PZ/Sec97z3lNFMrgBPAEeAc3AXeCmfH5FiegvsAv8Bn4CP4DvwKJ8Xpa4BHQC74ANIBsSN8Rmp/goebQCH4D9EEXy4r74ai010aqBF/IvE7VIXlyUGKpToEdedAGrCQqlclViSh0eAHMpEkrlnMSYOGqAN8BRisWyeSSx1iQl2i1goQSEUrkgsceKZ8BOCYplc0dyiAWvgEwJi2UzI7lEiuEyEErlcFSClaNYNkMXrbeMxbLZG5ZYz8vkmVWIGck1EO7FtA5MC/clZy3UAksVJJbNJcm9aIxXoFg2x4sV6zFwUsGCnYgGvmCVRJYrWCyby37LQ30BnFgl44/AegoSXpdYdgPY6Csk1mVgW9P4IXBH7NQBswmKNSsxIDEdatrZFk08MRggyDXFqDXSTCUg1pTLKLcWwN6gl1hWnWgyYLADLjYnYhRrwqXeNRDQ5qZXDa0rpKBHFLpVMU1RxsWXEyMh2XYtc8+EGPyYi/3RCMUadfE3FqL9GdX4NeA45CTeuwzL/cBpiD5OxaYT1eI7zFyORaMz9ET0y39yeQC/DGkxnxFbTtSKzyhy6XE6mozIicXPjiHeRkeAoT4r93YoNuvEV1R5TNqOrAflXoSOsrLxUK8k+BQ40LB1IPc6UR/DhsyePag0R+zI5legQUn0YZGbKTtyjxMNYjuOHCyteB2Ts6w0jzQqCd8HtnzcuyXXOtEYcnNLIVpa8TZGhxZ/AU1K4reBlTz3rMg1TjSJrThjt7RiOmanFv8ALYoA1z0aWBblOydaxEbccVta8S0Bx1l5eLcrQlwF5h3XzMtnTrRrDhZh0NIq19mXhPOsTA/UZUet/JLTLnO4roDTkaC0tEp8R+gf0K0IU+Oy4O2Wa5OM1dIq0QCcHMIbQymKMzWBWGxzkawtZTGmJpCS+QtLwzNM7aJJ9TPMjJL+mRslzTzMP3PzsLTM9BtKZaZv1pL+mVtLmmqFf+aqFeVQD/sSUw65epipuPrjnnMbz9T0C3PS6czsGhXmuV0jsy+Znxf2JTE733l5Yecb01uRl669FeXavdMf0KZn9w6mP8yVnv1hmA7ECyzYgYjpcT3Hgj2umC7qM/ruosb06RfXp2/DvAlSJMy7Rhowb7NpwLwvqQHzRq4GKv6dbyNaxGLZMOdWaMCcjKIBc/aOBszpTpow54dpwpxQpwFzBmIAmFM2NVE257iak4KLAfAfus4inR4ZgyYAAAAASUVORK5II=) no-repeat center/contain;
  transition:
    transform 0.35s ease,
    background-image 0s;
}
.langs {
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
  bottom: 0.3rem;
  display: grid;
  gap: 0.1rem;
}
.lang {
  display: flex;
  padding-left: 0.33rem;
  align-items: center;
  gap: 0.06rem;
  font-size: 0.19rem;
  cursor: pointer;
}
.dot {
  width: 0.26rem;
  display: inline-block;
}

@font-face {
  font-family: "Gen-Jyuu-Gothic-P-Bold-2";
  src: url(../../assets/Gen-Jyuu-Gothic-P-Bold-2.9c3d5b1f.woff) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
</style>