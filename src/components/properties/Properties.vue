<template>
  <div class="properties-page">
    <div class="container">
      <h2>{{ t('properties.title') }}</h2>
      <div class="card-list">
        <PropertyCard
          v-for="property in list"
          :key="property.id"
          :id="property.id"
          :title="t(property.title_key)"
          :subtitle="t(property.subtitle_key)"
          :summary="t(property.summary_key)"
          :cover="property.cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PropertyCard from './PropertyCard.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

import { properties } from './data.js';

const list = ref(properties || []);
</script>

<style scoped>
h2 {
  font-size: 0.5em; /* Reduced from 0.3em */
  margin-bottom: 1.2em;
}
.container  {
  padding: 20px;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>