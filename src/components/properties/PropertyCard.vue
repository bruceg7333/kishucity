<template>
  <router-link :to="`/properties/${id}`" class="property-card-link">
    <div class="property-card">
      <img :src="cover" alt="Property Cover" class="property-cover" />
      <h3>{{ title }}</h3>
      <h4>{{ subtitle }}</h4>
      <p>{{ summary }}</p>
      <p class="price">{{ price }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PropertyCard',
  props: {
    id: [String, Number],
    title: String,
    subtitle: String,
    summary: String,
    price: String,
    cover: String,
  },
};
</script>

<style scoped>
.property-card-link {
  text-decoration: none;
  color: inherit;
}

.property-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  transition: transform 0.2s ease-in-out;
}

.property-cover {
  width: 100%;
  height: 200px; /* Or a suitable fixed height */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.property-card:hover {
  transform: translateY(-5px);
}

.property-info {
  padding: 15px;
}
.property-card h3 {
  margin-top: 0;
  color: #333;
  font-size: 0.3em; /* Reduced from 0.3em */
  margin-bottom: 5px;
}

.property-card h4 {
  color: #666;
  font-size: 0.2em; /* Reduced from 0.1em */
  margin-bottom: 10px;
}

.property-card p {
  font-size: 0.2em; /* Reduced from 0.05em */
  color: #777;
  line-height: 1.2;
}

.property-card .price {
  font-size: 0.2em; /* Reduced from 0.3em */
  color: #007bff;
  font-weight: bold;
  margin-top: 15px;
}
</style>