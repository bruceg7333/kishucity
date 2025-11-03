<template>
  <div class="clan-detail" :class="`clan-detail--${clan.id}`">
    <!-- Header Section -->
    <section class="header-section" :style="getHeaderStyle(clan.id, clan.color)">
      <div class="header-content">
        <h1 class="clan-title">
          {{ t(clan.name_key) }}
        </h1>
        <p class="clan-field">{{ t(clan.field_key) }}</p>
        <p class="clan-type">{{ t(clan.type_key) }}</p>
      </div>
    </section>

    <!-- Clan Info Section -->
    <section class="info-section pb-gap" :style="getInfoSectionStyle(clan.id)">
      <div class="container">
        <div class="description-section" :style="getDescriptionStyle(clan.id)">
          <h2>About {{ t(clan.name_key) }}</h2>
          <div class="clan-details-grid">
            <div class="detail-item clan-field-item">
              <div class="detail-icon">🎯</div>
              <div class="detail-content">
                <h3>Field</h3>
                <p>{{ t(clan.field_key) }}</p>
              </div>
            </div>
            <div class="detail-item clan-type-item">
              <div class="detail-icon">🏛️</div>
              <div class="detail-content">
                <h3>Type</h3>
                <p>{{ t(clan.type_key) }}</p>
              </div>
            </div>
            <div class="detail-item clan-keyword-item">
              <div class="detail-icon">✨</div>
              <div class="detail-content">
                <h3>Keywords</h3>
                <p>{{ t(clan.keyword_key) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { clans } from './data.js';

const { t } = useI18n();
const route = useRoute();

const clanId = route.params.id;
const clan = ref(clans.find(c => c.id == clanId));

// Theme-based styling functions
const getHeaderStyle = (clanId, color) => {
  const themes = {
    1: `linear-gradient(135deg, ${color}40 0%, ${color}CC 50%, rgba(138, 43, 226, 0.9) 100%)`, // Sonik - Sound waves
    2: `linear-gradient(135deg, ${color}40 0%, ${color}CC 40%, rgba(47, 79, 79, 0.9) 100%)`, // Kage - Shadows
    3: `linear-gradient(135deg, ${color}40 0%, ${color}CC 60%, rgba(210, 180, 140, 0.9) 100%)`, // Mono - Natural
    4: `linear-gradient(135deg, ${color}40 0%, ${color}CC 50%, rgba(244, 228, 188, 0.9) 100%)`, // Scripta - Paper
    5: `linear-gradient(135deg, ${color}40 0%, ${color}CC 70%, rgba(229, 228, 226, 0.9) 100%)`, // Sage - Digital
    6: `linear-gradient(135deg, ${color}40 0%, ${color}CC 45%, rgba(255, 20, 147, 0.9) 100%)`, // Neon - Cyber
    7: `linear-gradient(135deg, ${color}40 0%, ${color}CC 55%, rgba(25, 25, 112, 0.9) 100%)`  // Yoru - Night
  };
  return { background: themes[clanId] || `linear-gradient(135deg, ${color}40, ${color}CC)` };
};

const getInfoSectionStyle = (clanId) => {
  const backgrounds = {
    1: 'linear-gradient(135deg, #2a1a3e, #1a0d2e)', // Sonik - Deep purple
    2: 'linear-gradient(135deg, #1a1a2e, #0d0d1a)', // Kage - Dark shadows
    3: 'linear-gradient(135deg, #3e2a1a, #2e1a0d)', // Mono - Earth tones
    4: 'linear-gradient(135deg, #3e3a2a, #2e2a1a)', // Scripta - Parchment
    5: 'linear-gradient(135deg, #2a2a2e, #1a1a1e)', // Sage - Minimal gray
    6: 'linear-gradient(135deg, #3e1a2a, #2e0d1a)', // Neon - Cyber pink
    7: 'linear-gradient(135deg, #1a1a3e, #0d0d2e)'  // Yoru - Deep night
  };
  return { background: backgrounds[clanId] || 'linear-gradient(135deg, #1a1a2e, #16213e)' };
};

const getDescriptionStyle = (clanId) => {
  const styles = {
    1: { 
      background: 'rgba(138, 43, 226, 0.1)', 
      borderColor: 'rgba(138, 43, 226, 0.3)',
      boxShadow: '0 8px 32px rgba(138, 43, 226, 0.2)'
    },
    2: { 
      background: 'rgba(47, 79, 79, 0.1)', 
      borderColor: 'rgba(47, 79, 79, 0.3)',
      boxShadow: '0 8px 32px rgba(47, 79, 79, 0.2)'
    },
    3: { 
      background: 'rgba(210, 180, 140, 0.1)', 
      borderColor: 'rgba(210, 180, 140, 0.3)',
      boxShadow: '0 8px 32px rgba(210, 180, 140, 0.2)'
    },
    4: { 
      background: 'rgba(244, 228, 188, 0.1)', 
      borderColor: 'rgba(244, 228, 188, 0.3)',
      boxShadow: '0 8px 32px rgba(244, 228, 188, 0.2)'
    },
    5: { 
      background: 'rgba(229, 228, 226, 0.1)', 
      borderColor: 'rgba(229, 228, 226, 0.3)',
      boxShadow: '0 8px 32px rgba(229, 228, 226, 0.2)'
    },
    6: { 
      background: 'rgba(255, 20, 147, 0.1)', 
      borderColor: 'rgba(255, 20, 147, 0.3)',
      boxShadow: '0 8px 32px rgba(255, 20, 147, 0.2)'
    },
    7: { 
      background: 'rgba(25, 25, 112, 0.1)', 
      borderColor: 'rgba(25, 25, 112, 0.3)',
      boxShadow: '0 8px 32px rgba(25, 25, 112, 0.2)'
    }
  };
  const defaultStyle = { 
    background: 'rgba(255, 255, 255, 0.05)', 
    borderColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
  };
  return { 
    ...styles[clanId] || defaultStyle,
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    border: '1px solid'
  };
};

</script>

<style scoped>
.clan-detail {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #fff;
  min-height: 100vh;
}

/* Enhanced Header Section */
.header-section {
  position: relative;
  padding: 60px 20px;
  text-align: center;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.header-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  z-index: 1;
}

.header-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

.clan-title {
  font-size: 1.0em;
  font-weight: 700;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
  animation: slideInUp 1.5s ease-out;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.clan-field {
  font-size: 0.62em;
  font-weight: 600;
  margin-bottom: 12px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  opacity: 0.95;
}

.clan-type {
  font-size: 1em;
  font-style: italic;
  opacity: 0.9;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  letter-spacing: 0.3px;
}

/* Enhanced Info Section */
.info-section {
  padding: 80px 20px;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.description-section h2 {
  font-size: 0.8em;
  color: #fff;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 600;
}

/* New Clan Details Grid */
.clan-details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.detail-item {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid;
  gap: 15px;
}

.detail-icon {
  font-size: 0..5em;
  margin-right: 15px;
  flex-shrink: 0;
  opacity: 0.9;
}

.detail-content h3 {
  font-size: 0.5em;
  margin-bottom: 8px;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.detail-content p {
  font-size: 0.35em;
  line-height: 1.5;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Clan-specific themed styles */
.clan-detail--1 .detail-item { background: rgba(138, 43, 226, 0.15); border: 1px solid rgba(138, 43, 226, 0.3); }
.clan-detail--1 .detail-item:hover { background: rgba(138, 43, 226, 0.25); transform: translateY(-3px); }

.clan-detail--2 .detail-item { background: rgba(47, 79, 79, 0.15); border: 1px solid rgba(47, 79, 79, 0.3); }
.clan-detail--2 .detail-item:hover { background: rgba(47, 79, 79, 0.25); transform: translateY(-3px); }

.clan-detail--3 .detail-item { background: rgba(210, 180, 140, 0.15); border: 1px solid rgba(210, 180, 140, 0.3); }
.clan-detail--3 .detail-item:hover { background: rgba(210, 180, 140, 0.25); transform: translateY(-3px); }

.clan-detail--4 .detail-item { background: rgba(244, 228, 188, 0.15); border: 1px solid rgba(244, 228, 188, 0.3); }
.clan-detail--4 .detail-item:hover { background: rgba(244, 228, 188, 0.25); transform: translateY(-3px); }

.clan-detail--5 .detail-item { background: rgba(229, 228, 226, 0.15); border: 1px solid rgba(229, 228, 226, 0.3); }
.clan-detail--5 .detail-item:hover { background: rgba(229, 228, 226, 0.25); transform: translateY(-3px); }

.clan-detail--6 .detail-item { background: rgba(255, 20, 147, 0.15); border: 1px solid rgba(255, 20, 147, 0.3); }
.clan-detail--6 .detail-item:hover { background: rgba(255, 20, 147, 0.25); transform: translateY(-3px); }

.clan-detail--7 .detail-item { background: rgba(25, 25, 112, 0.15); border: 1px solid rgba(25, 25, 112, 0.3); }
.clan-detail--7 .detail-item:hover { background: rgba(25, 25, 112, 0.25); transform: translateY(-3px); }

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 1; }
}

/* Responsive Design */
@media (max-width: 768px) {
  .clan-title {
    font-size: 2.5em;
  }
  
  .clan-field {
    font-size: 1.2em;
  }
  
  .clan-type {
    font-size: 1em;
  }
  
  .clan-details-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .detail-item {
    padding: 20px;
  }
  
  .description-section h2 {
    font-size: 2em;
  }
}

@media (max-width: 480px) {
  .clan-title {
    font-size: 2em;
  }
  
  .header-section {
    height: 40vh;
  }
  
  .info-section {
    padding: 60px 15px;
  }
}
</style>