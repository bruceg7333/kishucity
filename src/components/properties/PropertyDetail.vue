<template>
  <div class="property-detail">
    <!-- Cover Section -->
    <section class="cover-section">
      <img :src="property.coverImage" alt="Property Cover" class="cover-image" />
      <div class="cover-overlay"></div>
      <h1 class="property-title">{{ t(property.title_key) }}</h1>
    </section>

    <!-- Summary Section -->
    <section class="summary-section">
      <p class="property-summary">{{ t(property.summary_key) }}</p>
    </section>

    <!-- Details Section -->
    <section class="details-section">
      <div v-for="(detail, key) in property.details" :key="key" class="detail-item">
        <div v-if="detail.image" class="detail-image-container">
          <img :src="detail.image" :alt="key + ' image'" class="detail-image" />
          <div class="detail-image-overlay"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const route = useRoute();

const propertyId = route.params.id;

const property = ref({
  title_key: 'property_detail.hakone_gora_villa.title',
  summary_key: 'property_detail.hakone_gora_villa.summary',
  coverImage: '/properties/hotel1/cover.png',
  details: {
    designedBy: {
      text_key: 'property_detail.hakone_gora_villa.designed_by.text',
      image: '/properties/hotel1/image1.jpg',
    },
    concept: {
      text_key: 'property_detail.hakone_gora_villa.concept.text',
      image: '/properties/hotel1/image2.png',
    },
    mind: {
      text_key: 'property_detail.hakone_gora_villa.mind.text',
      image: '/properties/hotel1/image3.jpg',
    },
    body: {
      text_key: 'property_detail.hakone_gora_villa.body.text',
      image: '/properties/hotel1/image4.png',
    },
  },
});

// In a real application, you would fetch property data based on propertyId
// For now, we'll use static data.

</script>

<style scoped>
.property-detail {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
}

.cover-section {
  position: relative;
  height: 60vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  animation: fadeIn 1.5s ease-out;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  animation: zoomIn 8s infinite alternate;
}

.cover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 50% opaque black */
  z-index: 0; /* Ensure it's above the image but below the title */
}

.property-title {
  font-size: 1em;
  z-index: 1; /* Ensure title is above the overlay */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInUp 1.5s ease-out;
}

.summary-section {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.property-summary {
  font-size: .5em;
  color: #555;
  line-height: 1.2;
}

.details-section {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  /* background-color: #f9f9f9; */
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.details-section h2 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  font-size: 2.5em;
}

.detail-item {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-item h3 {
  color: #007bff;
  margin-bottom: 15px;
  font-size: 1.8em;
}

.detail-item p {
  font-size: 1.1em;
  line-height: 1.8;
}

.detail-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.detail-image-container {
  position: relative;
  width: 100%;
  height: 50vh; /* Adjust as needed for desired height */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.detail-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Slightly less opaque than cover */
  z-index: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>