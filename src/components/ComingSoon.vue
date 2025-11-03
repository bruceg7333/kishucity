<template>
  <div class="coming-soon-container">
    <h1 class="coming-soon-title">Coming Soon!</h1>
    <!-- <img :src="randomImage" alt="Coming Soon" class="coming-soon-image" /> -->

  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  data() {
    return {
      images: [
        '/fullpic/1-1-1.png',
        '/fullpic/1-1-2.png',
        '/fullpic/1-1-3.png',
        '/fullpic/1-2-1.jpg',
        '/fullpic/1-2-2.jpg',
        '/fullpic/2-1-1.jpg',
        '/fullpic/2-1-2.jpg',
        '/fullpic/2-1-3.jpg',
        '/fullpic/2-1-4.jpg',
        '/fullpic/2-4-1.jpg',
        '/fullpic/2-4-2.jpg',
        '/fullpic/2-4-3.jpg',
        '/fullpic/2-4-4.jpg',
      ],
      randomImage: '',
    };
  },
  created() {
    // this.randomImage = this.images[Math.floor(Math.random() * this.images.length)];
  },
};
</script>

<style scoped>
.coming-soon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* Adjust as needed */
  text-align: center; 
  color: #333;
  padding: 20px;
}

.coming-soon-image {
  max-width: 80%;
  height: auto;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.coming-soon-title {
  font-size: 2em; /* Larger font size */
  color: #2c3e50;
  margin-bottom: 20px;
  animation: pulse 2s infinite alternate, fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulse {
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .coming-soon-title {
    font-size: 1em;
  }
  .coming-soon-image {
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .coming-soon-title {
    font-size: .5em;
  }
  .coming-soon-image {
    max-width: 100%;
  }
}
</style>