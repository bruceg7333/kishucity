<template>
  <div class="project-introduction pb-gap">
    <section class="section-wrapper left-layout" style="background-image: url(/assets/banner2.85b3f4da.jpg);">
      <div class="content-container">
        <h2>{{ t('project_introduction.project_overview_title') }}</h2>
        <p>{{ t('project_introduction.project_overview') }}</p>
      </div>
    </section>
    <section class="section-wrapper right-layout" style="background-image: url(/assets/banner3.32d11929.png);">
      <div class="content-container">
        <h2>{{ t('project_introduction.vision_title') }}</h2>
        <p>{{ t('project_introduction.vision') }}</p>
      </div>
    </section>
    <section class="section-wrapper left-layout" style="background-image: url(/assets/banner5.f4c6c54b.png);">
      <div class="content-container">
        <h2>{{ t('project_introduction.structure_title') }}</h2>
        <p>{{ t('project_introduction.structure.description') }}</p>
      <ul>
        <li>{{ t('project_introduction.structure.creator_ecosystem') }}</li>
        <li>{{ t('project_introduction.structure.property_ecosystem') }}</li>
        <li>{{ t('project_introduction.structure.economic_ecosystem') }}</li>
      </ul>
      <p>{{ t('project_introduction.structure.conclusion') }}</p>
      </div>
    </section>
    <section class="section-wrapper right-layout" style="background-image: url(/assets/banner2.95462274.png);">
      <div class="content-container">
        <h2>{{ t('project_introduction.kishu_clans_title') }}</h2>
        <p>{{ t('project_introduction.kishu_clans.background') }}</p>
      </div>
    </section>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'ProjectIntroduction',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<style scoped>
.project-introduction {
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 1.6;
  color: #333;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: #fdfdfd;
  box-sizing: border-box;
  overflow-x: hidden;
}

.section-wrapper {
  padding: 60px 15px;
  max-width: 100%; /* Changed to 100% to allow background image to span full width */
  margin: 0 auto;
  display: flex;
  align-items: center;
  min-height: 400px; /* Ensure enough height for background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: #fff; /* Text color for better contrast on background images */
}

.section-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Overlay for better text readability */
}

.content-container {
  position: relative;
  z-index: 2;
  max-width: 50%; /* Content takes half width */
  padding: 20px;
  box-sizing: border-box;
}

.left-layout .content-container {
  margin-right: auto; /* Pushes content to the left */
  margin-left: 5%;
}

.right-layout .content-container {
  margin-left: auto; /* Pushes content to the right */
  margin-right: 5%;
}

.project-introduction section h2 {
  font-size: 24px;
  text-align: left; /* Align title to content container */
  margin-bottom: 30px;
  color: #fff; /* White color for titles on background */
  position: relative;
  padding-bottom: 10px;
}

.project-introduction section h2::after {
  content: '';
  position: absolute;
  left: 0; /* Align underline to title */
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: #c0392b;
  border-radius: 1px;
}

.project-introduction p,
.project-introduction li {
  font-size: 16px;
  line-height: 1.7;
  text-align: left; /* Align text to content container */
  margin-bottom: 10px;
  color: #fff; /* White color for text on background */
}

.project-introduction ul {
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 20px;
  margin: 0;
  padding: 0;
}

/* Responsive adjustments */
.section-image {
  display: block;
  max-width: 80%;
  height: auto;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 992px) {
  .section-wrapper {
    padding: 40px 10px;
    min-height: 300px;
  }
  .content-container {
    max-width: 70%; /* Content takes more width on smaller screens */
    margin: 0 auto; /* Center content */
  }
  .project-introduction section h2 {
    font-size: 20.8px;
    margin-bottom: 25px;
    text-align: center;
  }
  .project-introduction section h2::after {
    left: 50%;
    transform: translateX(-50%);
  }
  .project-introduction p,
  .project-introduction li {
    font-size: 14.4px;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .section-wrapper {
    padding: 30px 10px;
    min-height: 250px;
  }
  .content-container {
    max-width: 80%;
  }
  .project-introduction section h2 {
    font-size: 17.6px;
    margin-bottom: 20px;
  }
  .project-introduction p,
  .project-introduction li {
    font-size: 12.8px;
  }
}

@media (max-width: 480px) {
  .section-wrapper {
    padding: 20px 10px;
    min-height: 200px;
  }
  .content-container {
    max-width: 90%;
    padding: 10px;
  }
  .project-introduction section h2 {
    font-size: 16px;
    margin-bottom: 15px;
  }
  .project-introduction p,
  .project-introduction li {
    font-size: 11.2px;
  }
}

.section-image {
  display: none; /* Hide the image as it's now a background */
}
</style>