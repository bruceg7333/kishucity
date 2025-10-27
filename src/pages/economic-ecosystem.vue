<template>
  <div class="economic-ecosystem">
    <section class="hero">
      <h1>{{ $t('economic_ecosystem.hero_title') }}</h1>
      <p>{{ $t('economic_ecosystem.hero_subtitle') }}</p>
      <div class="hero-background"></div>
      <img src="/public/fullpic/1-1-3.png" alt="Hero Overlay" class="hero-overlay-image"/>
    </section>
    <section class="key-sectors">
      <div class="section-wrapper">
        <h2>{{ $t('economic_ecosystem.key_sectors.title') }}</h2>
        <div class="sectors-grid">
          <div class="sector-card">
            <img src="/public/fullpic/2-1-1.jpg" alt="Finance" class="sector-icon"/>
            <span>{{ $t('economic_ecosystem.key_sectors.finance') }}</span>
          </div>
          <div class="sector-card">
            <img src="/public/fullpic/2-1-2.jpg" alt="Technology" class="sector-icon"/>
            <span>{{ $t('economic_ecosystem.key_sectors.technology') }}</span>
          </div>
          <div class="sector-card">
            <img src="/public/fullpic/2-1-3.jpg" alt="Manufacturing" class="sector-icon"/>
            <span>{{ $t('economic_ecosystem.key_sectors.manufacturing') }}</span>
          </div>
          <div class="sector-card">
            <img src="/public/fullpic/2-1-4.jpg" alt="Services" class="sector-icon"/>
            <span>{{ $t('economic_ecosystem.key_sectors.services') }}</span>
          </div>
          <div class="sector-card">
            <img src="/public/fullpic/2-4-2.jpg" alt="Sustainability" class="sector-icon"/>
            <span>{{ $t('economic_ecosystem.key_sectors.sustainability') }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="economic-model">
      <div class="section-wrapper">
        <h2>{{ $t('economic_ecosystem.model.title') }}</h2>
        <div class="model-content">
          <div class="model-text">
            <p>{{ $t('economic_ecosystem.model.body_1') }}</p>
            <p>{{ $t('economic_ecosystem.model.body_2') }}</p>
          </div>
          <div class="model-images">
            <img src="/public/fullpic/2-4-1.jpg" alt="Economic Model 1" class="model-image-single"/>
            <img src="/public/fullpic/2-4-3.jpg" alt="Economic Model 2" class="model-image-single"/>
          </div>
        </div>
      </div>
    </section>
    <section class="collaboration">
      <div class="section-wrapper">
        <h2>{{ $t('economic_ecosystem.collaboration.title') }}</h2>
        <div class="collaboration-content">
          <p>{{ $t('economic_ecosystem.collaboration.body') }}</p>
          <img src="/public/fullpic/1-2-1.jpg" alt="Collaboration" class="collaboration-image"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default { name: 'EconomicEcosystem' }
</script>

<style scoped>
.economic-ecosystem {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.section-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
}

p {
  font-size: 18px;
  line-height: 1.6;
}

.hero {
  min-height: 500px;
  color: #fff;
  text-align: center;
  padding: 80px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 24px;
  z-index: 2;
  position: relative;
}

.hero p {
  font-size: 22px;
  margin-bottom: 40px;
  z-index: 2;
  position: relative;
  max-width: 800px;
}

.hero-background {
  background: url('/public/fullpic/1-1-2.png') center/cover no-repeat;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-overlay-image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px; /* Adjust size as needed */
  opacity: 0.8;
  z-index: 1;
}

.key-sectors {
  background: #f8f9fa;
  padding: 80px 20px;
}

.sectors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 32px;
}

.sector-card {
  background: white;
  padding: 28px;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
}

.sector-card:hover {
  transform: translateY(-5px);
}

.sector-icon {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 3px solid #42b983;
}

.economic-model {
  padding: 80px 20px;
}

.economic-model .model-content {
  display: flex;
  gap: 40px;
  align-items: center;
  margin-top: 32px;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.model-text {
  flex: 1;
  min-width: 300px;
}

.model-images {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 300px;
}

.model-image-single {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}

.collaboration {
  padding: 80px 20px;
  background: #e8f4ff;
}

.collaboration-content {
  display: flex;
  gap: 40px;
  align-items: center;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.collaboration-content p {
  flex: 1;
  min-width: 300px;
}

.collaboration-image {
  flex: 1;
  min-width: 300px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
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

@media (max-width: 768px) {
  h2 {
    font-size: 24px; /* Slightly smaller for very small screens */
    margin-bottom: 20px;
  }

  p {
    font-size: 15px;
  }

  .hero {
    padding: 40px 15px;
    min-height: 400px;
  }

  .hero h1 {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .hero p {
    font-size: 16px;
    margin-bottom: 20px;
    max-width: 90%;
  }

  .hero-overlay-image {
    width: 120px; /* Even smaller on mobile */
    bottom: 5px;
    right: 5px;
  }

  .key-sectors,
  .economic-model,
  .collaboration {
    padding: 40px 15px;
  }

  .sectors-grid {
    gap: 20px;
  }

  .sector-card {
    padding: 15px;
    font-size: 15px;
  }

  .sector-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  .economic-model .model-content,
  .collaboration-content {
    flex-direction: column;
    gap: 20px;
  }

  .model-text,
  .model-images,
  .collaboration-content p,
  .collaboration-image {
    width: 100%;
    min-width: unset;
  }

  .model-images {
    gap: 10px;
  }

  .model-image-single,
  .collaboration-image {
    box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  }
}
</style>