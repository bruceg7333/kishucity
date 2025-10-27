<template>
  <div class="creators-ecosystem">
    <section class="hero">
      <h1>{{ $t('creators_ecosystem.hero_title') }}</h1>
      <p>{{ $t('creators_ecosystem.hero_subtitle') }}</p>
      <div class="hero-background">
      </div>
    </section>
    <section class="concept">
      <div class="concept-section-wrapper">
        <h2>{{ $t('creators_ecosystem.concept_subtitle') }}</h2>
        <div class="concept-content">
          <p>{{ $t('creators_ecosystem.concept_body') }}</p>
          <img src="/public/fullpic/1-2-1.jpg" alt="Concept Image" class="concept-image">
        </div>
      </div>
    </section>
    <section class="creator-types">
      <div class="creator-types-wrapper">
        <h2>{{ $t('creators_ecosystem.creator_types.title') }}</h2>
        <div class="card-grid">
          <div class="creator-card">{{ $t('creators_ecosystem.creator_types.artist') }}</div>
          <div class="creator-card">{{ $t('creators_ecosystem.creator_types.designer') }}</div>
          <div class="creator-card">{{ $t('creators_ecosystem.creator_types.musician') }}</div>
          <div class="creator-card">{{ $t('creators_ecosystem.creator_types.architect') }}</div>
          <div class="creator-card">{{ $t('creators_ecosystem.creator_types.video_creator') }}</div>
          <div class="creator-card">{{ $t('creators_ecosystem.creator_types.literary_creator') }}</div>
        </div>
        <div class="collaboration-network">
          <p>{{ $t('creators_ecosystem.creator_types.description') }}</p>
        </div>
      </div>
    </section>
    <section class="ecosystem-mechanism">
      <div class="ecosystem-mechanism-wrapper">
        <h2>{{ $t('creators_ecosystem.ecosystem_mechanism.title') }}</h2>
        <div class="mechanism-content">
          <p>{{ $t('creators_ecosystem.mechanism_body_1') }}</p>
          <p>{{ $t('creators_ecosystem.mechanism_body_2') }}</p>
          <img src="/public/fullpic/2-1-1.jpg" alt="Ecosystem Mechanism Image" class="mechanism-image">
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default { name: 'CreatorsEcosystem' }
</script>
<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px; /* Increased height for prominence */
  text-align: center;
  padding: 40px 20px; /* Using px for padding */
  color: #fff; /* Assuming white text for better contrast on background images */
}

.hero h1 {
  font-size: 60px; /* Adjusted to px */
  margin-bottom: 20px; /* Adjusted to px */
  z-index: 1; /* Ensure text is above background */
}

.hero p {
  font-size: 24px; /* Adjusted to px */
  max-width: 800px; /* Limit line length for readability */
  z-index: 1; /* Ensure text is above background */
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: 
    url('/public/fullpic/1-1-1.png') center/cover;
  opacity: 0.6; /* Semi-transparent */
  z-index: 0; /* Ensure background is behind text */
}

.hero-background img {
  display: none; /* Hide the img tags */
}

.concept-section-wrapper {
  padding: 80px 20px; /* Using px for padding */
  max-width: 1200px; /* Max width for content */
  margin: 0 auto; /* Center the content */
}

.concept h2 {
  font-size: 40px; /* Adjusted to px */
  text-align: center;
  margin-bottom: 40px; /* Adjusted to px */
  color: #333; /* Darker color for headings */
}

.concept-content {
  display: flex;
  flex-direction: row; /* Changed to row for side-by-side layout */
  align-items: center;
  justify-content: center;
  gap: 40px; /* Spacing between text and image */
  margin-top: 0; /* Reset margin as it's handled by wrapper padding */
}

.concept-content p {
  font-size: 18px; /* Adjusted to px */
  line-height: 1.8;
  color: #555; /* Slightly lighter color for body text */
  flex: 1; /* Allow text to take available space */
}

.concept-image {
  max-width: 500px; /* Max width for the image */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  flex-shrink: 0; /* Prevent image from shrinking */
}

.creator-types-wrapper {
  padding: 80px 20px; /* Using px for padding */
  max-width: 1200px; /* Max width for content */
  margin: 0 auto; /* Center the content */
}

.creator-types h2 {
  font-size: 40px; /* Adjusted to px */
  text-align: center;
  margin-bottom: 40px; /* Adjusted to px */
  color: #333; /* Darker color for headings */
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Adjusted minmax for larger cards */
  gap: 20px; /* Adjusted to px */
  margin-top: 0; /* Reset margin as it's handled by wrapper padding */
  margin-bottom: 40px; /* Spacing before collaboration network */
}

.creator-card {
  background-color: #f9f9f9; /* Lighter background */
  padding: 30px; /* Adjusted to px */
  border-radius: 12px; /* More rounded corners */
  text-align: center;
  font-weight: bold;
  font-size: 20px; /* Adjusted to px */
  color: #333; /* Darker text */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); /* Subtle shadow */
  transition: transform 0.3s ease; /* Smooth hover effect */
}

.creator-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
}

.collaboration-network {
  margin-top: 0; /* Reset margin */
  padding: 40px; /* Adjusted to px */
  background-color: #e6f7ff; /* Lighter blue background */
  border-radius: 12px;
  text-align: center;
}

.collaboration-network p {
  font-size: 20px; /* Adjusted to px */
  line-height: 1.6;
  color: #0056b3; /* Blue text for emphasis */
}

.ecosystem-mechanism-wrapper {
  padding: 80px 20px; /* Using px for padding */
  max-width: 1200px; /* Max width for content */
  margin: 0 auto; /* Center the content */
}

.ecosystem-mechanism h2 {
  font-size: 40px; /* Adjusted to px */
  text-align: center;
  margin-bottom: 40px; /* Adjusted to px */
  color: #333; /* Darker color for headings */
}

.mechanism-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0; /* Reset margin as it's handled by wrapper padding */
}

.mechanism-content p {
  margin-bottom: 20px; /* Adjusted to px */
  line-height: 1.8;
  max-width: 800px; /* Limit line length for readability */
  font-size: 18px; /* Adjusted to px */
  color: #555; /* Slightly lighter color for body text */
}

.mechanism-image {
  max-width: 900px; /* Increased max width for the image */
  height: auto;
  margin-top: 20px; /* Adjusted to px */
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
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
  .creator-types-wrapper,
  .ecosystem-mechanism-wrapper {
    padding: 40px 15px;
  }

  .concept h2,
  .creator-types h2,
  .ecosystem-mechanism h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .concept-content {
    flex-direction: column; /* Stack content vertically on mobile */
    gap: 30px;
  }

  .concept-content p {
    font-size: 16px;
    text-align: center;
  }

  .concept-image {
    max-width: 90%;
  }

  .card-grid {
    grid-template-columns: 1fr; /* Single column for cards on mobile */
  }

  .creator-card {
    padding: 20px;
    font-size: 18px;
  }

  .collaboration-network {
    padding: 30px;
  }

  .collaboration-network p {
    font-size: 16px;
  }

  .mechanism-content p {
    font-size: 16px;
    max-width: 90%;
    text-align: center;
  }

  .mechanism-image {
    max-width: 90%;
  }
}
</style>