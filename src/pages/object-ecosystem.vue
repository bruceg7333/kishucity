<template>
  <div class="object-ecosystem pb-gap">
    <section class="hero">
      <h1>{{ $t('object_ecosystem.hero_title') }}</h1>
      <p>{{ $t('object_ecosystem.hero_subtitle') }}</p>
      <div class="hero-background"></div>
    </section>
    <section class="concept">
      <div class="concept-section-wrapper">
        <h2>{{ $t('object_ecosystem.concept_subtitle') }}</h2>
        <div class="concept-content">
          <p>{{ $t('object_ecosystem.concept_body') }}</p>
          <img src="/fullpic/2-1-1.jpg" alt="Concept Image" class="concept-image">
        </div>
      </div>
    </section>
    <!-- <section class="showcase">
      <div class="showcase-wrapper">
        <h2>{{ $t('object_ecosystem.showcase_title') }}</h2>
        <div class="interactive-map"></div>
      </div>
    </section> -->
    <section class="gallery">
      <router-link to="/properties" class="gallery-link">
        <div class="gallery-wrapper">
          <h2>{{ $t('object_ecosystem.gallery_title') }}</h2>
          <!-- <p>{{ $t('object_ecosystem.gallery_description') }}</p> -->
          <div class="gallery-images">
            <img v-for="(image, index) in galleryImages" :key="index" :src="image" :alt="`Gallery Image ${index + 1}`" class="gallery-image">
          </div>
        </div>
      </router-link>
    </section>
    <section class="developing-vision">
      <div class="developing-vision-wrapper">
        <h2>{{ $t('object_ecosystem.developing_vision_title') }}</h2>
        <img src="/fullpic/2-4-1.jpg" alt="Developing Vision Image" class="developing-vision-image">
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ObjectEcosystem',
  data() {
    return {
      galleryImages: [
        '/properties/covers/image1.jpg',
        '/properties/covers/image10.png',
        '/properties/covers/image11.jpg',
        '/properties/covers/image12.png',
        '/properties/covers/image13.png',
        '/properties/covers/image14.png',
        '/properties/covers/image15.png',
        '/properties/covers/image16.jpg',
        '/properties/covers/image17.jpg',
        '/properties/covers/image18.jpg',
        '/properties/covers/image19.png',
        '/properties/covers/image2.jpg',
        '/properties/covers/image20.png',
        '/properties/covers/image21.jpg',
        '/properties/covers/image22.png',
        '/properties/covers/image23.png',
        '/properties/covers/image24.png',
        '/properties/covers/image25.jpg',
        '/properties/covers/image3.png',
        '/properties/covers/image4.jpg',
        '/properties/covers/image5.jpg',
        '/properties/covers/image6.jpg',
        '/properties/covers/image7.jpg',
        '/properties/covers/image8.jpg',
        '/properties/covers/image9.jpg',
      ],
      flippedImageIndex: -1
    }
  },
  mounted() {
    this.startFlipping();
  },
  beforeUnmount() {
    clearInterval(this.flipInterval);
  },
  methods: {
    startFlipping() {
      this.flipInterval = setInterval(() => {
        this.flipRandomImage();
      }, 3000); // Flip an image every 3 seconds
    },
    flipRandomImage() {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * this.galleryImages.length);
      } while (randomIndex === this.flippedImageIndex); // Ensure a different image is flipped
      this.flippedImageIndex = randomIndex;

      // Reset after a short delay to allow the animation to complete
      setTimeout(() => {
        if (this.flippedImageIndex === randomIndex) {
          this.flippedImageIndex = -1;
        }
      }, 1500); // Reset after 1.5 seconds (half of the interval, allowing flip to complete)
    }
  }
}
</script>
<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  text-align: center;
  padding: 40px 20px;
  color: #fff;
}

.hero h1 {
  font-size: 60px;
  margin-bottom: 20px;
  z-index: 1;
}

.hero p {
  font-size: 24px;
  max-width: 800px;
  z-index: 1;
}

.hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  z-index: 1; /* Ensure it's above the background image but below the text */
}

.hero p {
  font-size: 24.4px;
  max-width: 700px;
  z-index: 2; /* Ensure text is above the overlay */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.82);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url('/fullpic/2-1-2.jpg') center/cover;
  opacity: 0.6;
  z-index: 0;
}

.concept-section-wrapper,
.showcase-wrapper,
.gallery-wrapper,
.developing-vision-wrapper {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.concept h2,
.showcase h2,
.gallery h2,
.developing-vision h2 {
  font-size: 40px;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.concept-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.concept-content p {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  flex: 1;
}

.concept-image {
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
}

.interactive-map {
  height: 500px; /* Placeholder for the interactive map */
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-size: 24px;
}

.gallery-wrapper p {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px auto;
}

.developing-vision-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  display: block;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero {
    min-height: 400px;
    padding: 20px 15px;
  }

  .hero h1 {
    font-size: 40px;
    margin-bottom: 15px;
  }

  .hero p {
    font-size: 18px;
    max-width: 90%;
  }

  .concept-section-wrapper,
  .showcase-wrapper,
  .gallery-wrapper,
  .developing-vision-wrapper {
    padding: 40px 15px;
  }

  .concept h2,
  .showcase h2,
  .gallery h2,
  .developing-vision h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .concept-content {
    flex-direction: column;
    gap: 30px;
  }

  .concept-content p {
    font-size: 16px;
    text-align: center;
  }

  .concept-image {
    max-width: 90%;
  }

  .interactive-map {
    height: 300px;
    font-size: 20px;
  }

  .gallery-wrapper p {
    font-size: 16px;
  }
}
.gallery-link {
  text-decoration: none;
  color: inherit;
}

.gallery-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.7s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.gallery-image.flipped {
  transform: rotateY(180deg);
}
</style>