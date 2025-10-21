<template>
  <button class="burger-btn" @click="handleClick">
    <span class="line line-top"></span>
    <span class="line line-middle"></span>
    <span class="line line-bottom"></span>
  </button>
</template>

<script setup>
const props = defineProps({
  lineColor: { type: String, default: '#000' }
});
const emit = defineEmits(['click']);
function handleClick() { emit('click'); }
</script>

<style scoped>
.burger-btn {
  width: 0.6rem;
  height: 0.6rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.line {
  height: 0.04rem;
  background: v-bind(lineColor);
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  margin-left: auto; /* Align lines to the right */
}
.line-top {
  width: 80%;
}
.line-middle {
  width: 100%;
}
.line-bottom {
  width: 70%;
}
@media (min-width: 769px) {
  .burger-btn { display: none; }
}
</style>