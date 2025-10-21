<template>
  <div class="properties-page">
    <div class="container">
      <h2>{{ t('properties.title') }}</h2>
      <div class="card-list">
        <PropertyCard
          v-for="property in properties"
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

const properties = ref([
  { id: 1, title_key: 'properties.tokyo.title', subtitle_key: 'properties.tokyo.subtitle', summary_key: 'properties.tokyo.summary', price: '6,387,000 USD' ,cover: '/properties/hotel1/cover.png'},
  { id: 2, title_key: 'properties.rusutsu.title', subtitle_key: 'properties.rusutsu.subtitle', summary_key: 'properties.rusutsu.summary', price: '7,884,000 USD' ,cover: '/properties/hotel1/cover.png'},
  { id: 3, title_key: 'properties.setouchi.title', subtitle_key: 'properties.setouchi.subtitle', summary_key: 'properties.setouchi.summary', price: '2,662,000 USD' ,cover: '/properties/hotel1/cover.png'},
  { id: 4, title_key: 'properties.masu.title', subtitle_key: 'properties.masu.subtitle', summary_key: 'properties.masu.summary', price: '565,000 USD' ,cover: '/properties/hotel1/cover.png'},
  { id: 5, title_key: 'properties.club_suite.title', subtitle_key: 'properties.club_suite.subtitle', summary_key: 'properties.club_suite.summary', price: '466,000 USD' ,cover: '/properties/hotel1/cover.png'}, 
  { id: 6, title_key: 'properties.base_l.title', subtitle_key: 'properties.base_l.subtitle', summary_key: 'properties.base_l.summary', price: '477,000 USD' ,cover: '/properties/hotel1/cover.png'},
]);
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