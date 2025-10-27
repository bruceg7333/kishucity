<template>
  <div class="clans-page">
    <div class="container">
      <h2>{{ t('clans.title') }}</h2>
      <div class="card-list">
        <ClanCard
          v-for="clan in clans"
          :key="clan.id"
          :id="clan.id"
          :name="t(clan.name_key)"
          :field="t(clan.field_key)"
          :type="t(clan.type_key)"
          :keyword="t(clan.keyword_key)"
          :color="clan.color"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ClanCard from './Card.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

import { clans } from './data.js';
</script>

<style scoped>
h2 {
  font-size: 0.5em; /* Reduced from 0.3em */
  margin-bottom: 1.2em;
  text-align: center;
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