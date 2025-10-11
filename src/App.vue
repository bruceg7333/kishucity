<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="route-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
// No direct import of Home here, as it's handled by router-view
</script>

<style>
/* Global styles if any */
body {
  margin: 0;
  font-family: "SourceHanSansCN-Regular", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Route transition styles */
.route-fade-enter-from,
.route-fade-leave-to {
  opacity: 0;
  transform: translateX(20px); /* Example transition */
}

.route-fade-enter-active,
.route-fade-leave-active {
  transition: all 0.3s ease-out;
}
</style>
