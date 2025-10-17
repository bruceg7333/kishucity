<template>
  <div class="properties-page">
    <h2>Properties</h2>
    <div class="card-list">
      <PropertyCard
        v-for="property in properties"
        :key="property.id"
        :id="property.id"
        :title="property.title"
        :subtitle="property.subtitle"
        :summary="property.summary"
        :cover="property.cover"
      />
    </div>
  </div>
</template>

<script>
import PropertyCard from './PropertyCard.vue';

export default {
  name: 'Properties',
  components: {
    PropertyCard,
  },
  data() {
    return {
      properties: [
        { id: 1, title: 'TOKYO', subtitle: 'By NIGO · Chiba, Japan', summary: '6 Beds + 1 Capsule Room, 3 Bathrooms', price: '6,387,000 USD' ,cover: '/public/properties/hotel1/cover.png'},
        { id: 2, title: 'RUSUTSU', subtitle: 'By Snøhetta · Hokkaido, Japan', summary: '8 Beds, 4 Bathrooms', price: '7,884,000 USD' ,cover: '/public/properties/hotel1/cover.png'},
        { id: 3, title: 'SETOUCHI (360/270/180)', subtitle: 'By Bjarke Ingels · Setouchi, Japan', summary: 'Varies by property', price: '2,662,000 USD' ,cover: '/public/properties/hotel1/cover.png'},
        { id: 4, title: 'MASU', subtitle: 'By Masamichi Katayama · Kitakaruizawa, Japan', summary: '4-6 Beds, 1 Bathroom', price: '565,000 USD' ,cover: '/public/properties/hotel1/cover.png'},
        { id: 5, title: 'CLUB SUITE', subtitle: 'Miura, Japan', summary: '2 Beds, 1 Bathroom', price: '466,000 USD' ,cover: '/public/properties/hotel1/cover.png'}, 
        { id: 6, title: 'BASE L', subtitle: 'By Aizawa Yosuke · Kitakaruizawa, Japan', summary: '8 Beds, 1 Bathroom', price: '477,000 USD' ,cover: '/public/properties/hotel1/cover.png'},
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  font-size: 0.5em; /* Reduced from 0.3em */
  margin-bottom: 20px;
}
.properties-page {
  padding: 20px;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>