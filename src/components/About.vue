<template>
  <div class="page about">
    <main class="content">
      <section class="text-col">
        <p v-html="$i18n.t('about.paragraph1')"></p>
        <p v-html="$i18n.t('about.paragraph2')"></p>
        <p v-html="$i18n.t('about.paragraph3')"></p>
      </section>
      <section class="art-col">
        <img :src="a12Image" alt="draw" draggable="false" />
      </section>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; // Assuming vue-router is used

const router = useRouter();

const a12Image = '/assets/a12.1423f002.png';

// goToHome function is no longer needed here as it's in AppHeader
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
/* Removed .page-header and .logo styles as they are now in AppHeader */
.title2 {
  font-size: 0.28rem;
  /* Removed padding-left as header padding handles spacing */
}

.content {
  height: calc(100% - 1.55rem - 2px); /* Adjust height to account for new header */
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