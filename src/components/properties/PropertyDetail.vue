<template>
  <div class="property-detail-page">
    <div v-if="property">
      <img :src="property.cover" alt="Property Cover" class="detail-cover" />
      <h1>{{ property.title }}</h1>
      <h2>{{ property.subtitle }}</h2>
      <p>{{ property.summary }}</p>
      <p class="detail-price">{{ property.price }}</p>
      <!-- Add more property details here as needed -->
    </div>
    <div v-else>
      <p>Property not found.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyDetail',
  data() {
    return {
      property: null,
    };
  },
  created() {
    this.fetchPropertyDetail();
  },
  methods: {
    fetchPropertyDetail() {
      const propertyId = this.$route.params.id;
      // In a real application, you would fetch data from an API
      // For now, we'll use the mock data from Properties.vue
      const allProperties = [
        { id: 1, title: 'TOKYO', subtitle: 'By NIGO · Chiba, Japan', summary: '6 Beds + 1 Capsule Room, 3 Bathrooms', price: '6,387,000 USD' ,cover: '/public/properties/hotel1/cover.png'},
        { id: 2, title: 'RUSUTSU', subtitle: 'By Snøhetta · Hokkaido, Japan', summary: '8 Beds, 4 Bathrooms', price: '7,884,000 USD' ,cover: '/public/properties/hotel1/cover.png'},
        { id: 3, title: 'SETOUCHI (360/270/180)', subtitle: 'By Bjarke Ingels · Setouchi, Japan', summary: 'Varies by property', price: '2,662,000 USD' ,cover: '/public/properties/hotel1/cover.png'},
        { id: 4, title: 'MASU', subtitle: 'By Masamichi Katayama · Kitakaruizawa, Japan', summary: '4-6 Beds, 1 Bathroom', price: '565,000 USD' ,cover: '/public/properties/hotel1/cover.png'},
        { id: 5, title: 'CLUB SUITE', subtitle: 'Miura, Japan', summary: '2 Beds, 1 Bathroom', price: '466,000 USD' ,cover: '/public/properties/hotel1/cover.png'}, 
        { id: 6, title: 'BASE L', subtitle: 'By Aizawa Yosuke · Kitakaruizawa, Japan', summary: '8 Beds, 1 Bathroom', price: '477,000 USD' ,cover: '/public/properties/hotel1/cover.png'},
      ];
      this.property = allProperties.find(p => p.id == propertyId);
    },
  },
};
</script>

<style scoped>
.property-detail-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.detail-cover {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

.property-detail-page h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 10px;
}

.property-detail-page h2 {
  font-size: 1.5em;
  color: #666;
  margin-bottom: 15px;
}

.property-detail-page p {
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
}

.detail-price {
  font-size: 1.8em;
  color: #007bff;
  font-weight: bold;
  margin-top: 20px;
}
</style>