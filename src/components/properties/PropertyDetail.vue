<template>
  <div class="property-detail">
    <!-- Cover Section -->
    <section class="cover-section">
      <img :src="property.coverImage" alt="Property Cover" class="cover-image" />
      <div class="cover-overlay"></div>
      <h1 class="property-title">{{ property.title }}</h1>
    </section>

    <!-- Summary Section -->
    <section class="summary-section">
      <p class="property-summary">{{ property.summary }}</p>
    </section>

    <!-- Details Section -->
    <section class="details-section">
      <!-- <h2>Details</h2> -->
      <div v-for="(detail, key) in property.details" :key="key" class="detail-item">
        <!-- <h3>{{ key.charAt(0).toUpperCase() + key.slice(1) }}</h3> -->
        <!-- <p>{{ detail.text }}</p> -->
        <div v-if="detail.image" class="detail-image-container">
          <img :src="detail.image" :alt="key + ' image'" class="detail-image" />
          <div class="detail-image-overlay"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PropertyDetail',
  data() {
    return {
      property: {
        title: '箱根强罗别墅',
        summary: 'Perched atop Rusutsu Resort, this exclusive villa offers nothing but endless powder-white slopes and crisp mountain air. From your doorstep, carve fresh tracks down pristine runs, with majestic Mt. Yotei as your backdrop—a true ski-out experience like no other.',
        coverImage: '/public/properties/hotel1/cover.png',
        details: {
          designedBy: {
            text: 'Snøhetta is a transdisciplinary practice including architecture, landscape architecture, interior architecture, art, product design, graphic and digital design, often integrating a combination of disciplines across its projects. From the beginning in Norway in 1989, Snøhetta\'s approach has been framed by environmental and cultural sensitivity, inspired by the Brundtland Commission\'s UN report on sustainability, released in 1987. Snøhetta\'s first significant commission was in 1989 for Bibliotheca Alexandrina, reviving the ancient library in Alexandria, Egypt. This was followed by commissions for the Norwegian National Opera and Ballet in Oslo and the National September 11 Memorial Museum Pavilion in New York, followed by many projects on all scales around the globe. Today, Snøhetta has more than 320 employees from 40 nations across eight regional studios spanning from Oslo to New York, Innsbruck, Paris, Adelaide, Melbourne, Hong Kong, and Shenzhen.',
            image: '/public/properties/hotel1/image1.jpg',
          },
          concept: {
            text: 'Spaces are gently zoned to bring harmony to mind, body, and spirit—shared areas that inspire the senses through connection with nature and people, wellness spaces that care for the body, and private areas that invite introspection. These distinct functions flow seamlessly into one another, enriching every aspect of your stay.',
            image: '/public/properties/hotel1/image2.png',
          },
          mind: {
            text: 'Embraced by Mt. Yotei—Sharing Time, Nurturing Sensibility. In a setting unlike the everyday, a shared meal and quiet conversation gently bring hearts closer together. Above the dining room awaits a secluded seat, offering a panoramic embrace of untouched nature. With a book or a glass of wine in hand, immerse yourself in quiet contemplation and solitude. A year-round natural hot spring infinity bath, seamlessly connected to panoramic views. Uninterrupted skies stretch infinitely, filling the space with an extraordinary sense of openness.',
            image: '/public/properties/hotel1/image3.jpg',
          },
          body: {
            text: 'Beneath the surface, a quiet journey to reconnect with your inner power. A fully equipped gym featuring Technogym® machines. An invigorating bath zone complete with sauna, cold plunge, and open-air relaxation space. Volcanic stone lines the walls and floors, enveloping you in the primal energy of the earth. Step into a sanctuary where light recedes and the senses awaken—this meditation bath offers a cave-like retreat for stillness and reflection. Flow between exertion and repose, from energizing gym sessions to the quiet comfort of warm waters.',
            image: '/public/properties/hotel1/image4.png',
          },
        },
        images: [], // No longer needed as images are part of details
      },
    };
  },
  created() {
    // Fetch property data here
  },
};
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