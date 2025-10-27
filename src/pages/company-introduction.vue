<template>
  <div class="company-introduction">
    <section class="hero">
      <p>{{ $t('company_introduction.company_overview') }}</p>
      <div class="hero-background">
      </div>
    </section>

    <section class="vision">
      <div class="section-wrapper">
        <div class="content-block reverse">
          <img src="/public/fullpic/1-1-3.png" alt="Company Vision Image" class="content-image">
          <p>{{ $t('company_introduction.vision') }}</p>
        </div>
      </div>
    </section>

    <section class="business-scope">
      <div class="section-wrapper">
        <h2>事業内容</h2>
        <div class="card-grid">
          <div class="business-card">{{ $t('company_introduction.business_scope.railway_operations') }}</div>
          <div class="business-card">{{ $t('company_introduction.business_scope.hospitality') }}</div>
          <div class="business-card">{{ $t('company_introduction.business_scope.real_estate') }}</div>
          <div class="business-card">{{ $t('company_introduction.business_scope.web3_innovation') }}</div>
        </div>
      </div>
    </section>

    <section class="history">
      <div class="section-wrapper">
        <h2>沿革</h2>
        <ul class="history-list">
           <li>{{ $t('company_introduction.history.1912') }}</li>
           <li>{{ $t('company_introduction.history.1931') }}</li>
           <li>{{ $t('company_introduction.history.1970-2000s') }}</li>
           <li>{{ $t('company_introduction.history.2020s') }}</li>
        </ul>
      </div>
    </section>

    <section class="team-culture">
      <div class="section-wrapper">
        <h2>{{ $t('company_introduction.team_culture') }}</h2>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'CompanyIntroduction',
  // You might need to import i18n or define messages here if not globally available
  // For example:
  // import { useI18n } from 'vue-i18n';
  // setup() {
  //   const { t } = useI18n();
  //   return { t };
  // },
}
</script>

<style scoped>
.company-introduction {
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 1.6;
  color: #333;
  width: 100%; /* Ensure it takes full available width */
  max-width: 100%; /* Ensure it does not exceed screen width */
  margin: 0 auto;
  background-color: #fdfdfd;
  box-sizing: border-box; /* Include padding in the element's total width */
  overflow-x: hidden; /* Prevent horizontal scrollbar */
}

.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px; /* Adjusted height */
  text-align: center;
  padding: 30px 15px; /* Adjusted padding */
  color: #fff;
}

.hero p {
  font-size: 24.4px;
  max-width: 700px;
  z-index: 1;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.82);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url('/public/fullpic/2-1-4.jpg') center/cover no-repeat;
  opacity: 0.7;
  z-index: 0;
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

.section-wrapper {
  padding: 60px 15px; /* Adjusted padding */
  max-width: 1000px; /* Adjusted max-width */
  margin: 0 auto;
}

.company-introduction section h2 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
  position: relative;
  padding-bottom: 10px;
}

.company-introduction section h2::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background-color: #c0392b;
  border-radius: 1px;
}

.content-block {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
}

.content-block.reverse {
  flex-direction: row-reverse;
}

.content-block p {
  flex: 1;
  font-size: 13.6px;
  line-height: 1.7;
  text-align: justify;
}

.content-image {
  max-width: 45%; /* Adjusted max-width */
  height: auto;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.content-image:hover {
  transform: scale(1.01);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* Adjusted minmax */
  gap: 15px;
  margin-top: 20px;
}

.business-card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 13.6px;
  color: #333;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eee;
}

.business-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
}

.history-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.history-list li {
  background-color: #f8f8f8;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-left: 3px solid #42b983;
  border-radius: 4px;
  font-size: 12px;
  color: #555;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .hero {
    min-height: 350px;
    padding: 25px 10px;
  }
  .hero h1 {
    font-size: 28.8px;
  }
  .hero p {
    font-size: 12.8px;
  }
  .section-wrapper {
    padding: 40px 10px;
  }
  .company-introduction section h2 {
    font-size: 20.8px;
    margin-bottom: 25px;
  }
  .content-block {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  .content-block.reverse {
    flex-direction: column;
  }
  .content-image {
    max-width: 80%;
    margin-top: 15px;
  }
  .content-block p {
    font-size: 12.8px;
  }
  .card-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }
  .business-card {
    padding: 18px;
    font-size: 12.8px;
  }
  .history-list li {
    font-size: 11.2px;
    padding: 8px 12px;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 300px;
    padding: 20px 10px;
  }
  .hero h1 {
    font-size: 22.4px;
  }
  .hero p {
    font-size: 11.2px;
  }
  .section-wrapper {
    padding: 30px 10px;
  }
  .company-introduction section h2 {
    font-size: 17.6px;
    margin-bottom: 20px;
  }
  .content-block {
    gap: 15px;
  }
  .content-image {
    max-width: 90%;
  }
  .card-grid {
    grid-template-columns: 1fr;
  }
  .business-card {
    padding: 15px;
    font-size: 11.2px;
  }
  .history-list li {
    font-size: 10.4px;
    padding: 6px 10px;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 250px;
    padding: 15px 10px;
  }
  .hero h1 {
    font-size: 19.2px;
  }
  .hero p {
    font-size: 10.4px;
  }
  .section-wrapper {
    padding: 20px 10px;
  }
  .company-introduction section h2 {
    font-size: 16px;
    margin-bottom: 15px;
  }
  .content-block p {
    font-size: 10.4px;
  }
  .history-list li {
    font-size: 9.6px;
    padding: 5px 8px;
  }
}
</style>