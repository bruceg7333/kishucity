<template>
  <router-link :to="`/clans/${id}`" class="clan-card-link">
    <div class="clan-card" :class="`clan-card--${id}`" :style="{ background: getBackgroundStyle(color, id) }">
      <div class="clan-card-content">
        <h3 class="clan-name">{{ name }}</h3>
        <p class="clan-field">{{ field }}</p>
        <router-link :to="`/clans/${id}`" class="view-details-btn">
          查看详情
        </router-link>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ClanCard',
  props: {
    id: [String, Number],
    name: String,
    field: String,
    type: String,
    keyword: String,
    color: String,
  },
  methods: {
    getBackgroundStyle(baseColor, clanId) {
      const patterns = {
        1: `linear-gradient(135deg, ${baseColor}40 0%, ${baseColor}CC 50%, rgba(138, 43, 226, 0.8) 100%)`, // Sonik - Sound waves
        2: `linear-gradient(135deg, ${baseColor}40 0%, ${baseColor}CC 40%, rgba(47, 79, 79, 0.9) 100%)`, // Kage - Shadows
        3: `linear-gradient(135deg, ${baseColor}40 0%, ${baseColor}CC 60%, rgba(210, 180, 140, 0.8) 100%)`, // Mono - Natural
        4: `linear-gradient(135deg, ${baseColor}40 0%, ${baseColor}CC 50%, rgba(244, 228, 188, 0.8) 100%)`, // Scripta - Paper
        5: `linear-gradient(135deg, ${baseColor}40 0%, ${baseColor}CC 70%, rgba(229, 228, 226, 0.9) 100%)`, // Sage - Digital
        6: `linear-gradient(135deg, ${baseColor}40 0%, ${baseColor}CC 45%, rgba(255, 20, 147, 0.8) 100%)`, // Neon - Cyber
        7: `linear-gradient(135deg, ${baseColor}40 0%, ${baseColor}CC 55%, rgba(25, 25, 112, 0.9) 100%)`  // Yoru - Night
      };
      return patterns[clanId] || `linear-gradient(135deg, ${baseColor}40, ${baseColor}CC)`;
    }
  }
};
</script>

<style scoped>
.clan-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.3s ease;
}

.clan-card-link:hover {
  transform: translateY(-5px);
}

.clan-card {
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  min-height: 320px;
  display: flex;
  flex-direction: column;
}

.clan-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  z-index: -1;
}

.clan-card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  transform: translateY(-3px);
}

/* Themed backgrounds for each clan */
.clan-card--1 {
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.3) 0%, rgba(138, 43, 226, 0.8) 50%, rgba(75, 0, 130, 0.9) 100%);
  position: relative;
}

.clan-card--1::before {
  background: radial-gradient(circle at 30% 70%, rgba(138, 43, 226, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(147, 0, 211, 0.3) 0%, transparent 50%);
}

.clan-card--2 {
  background: linear-gradient(135deg, rgba(47, 79, 79, 0.4) 0%, rgba(47, 79, 79, 0.8) 40%, rgba(25, 25, 112, 0.9) 100%);
}

.clan-card--2::before {
  background: linear-gradient(45deg, transparent 30%, rgba(0, 0, 0, 0.3) 50%, transparent 70%);
}

.clan-card--3 {
  background: linear-gradient(135deg, rgba(210, 180, 140, 0.4) 0%, rgba(210, 180, 140, 0.8) 60%, rgba(139, 69, 19, 0.8) 100%);
}

.clan-card--3::before {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(210, 180, 140, 0.2) 10px,
    rgba(210, 180, 140, 0.2) 20px
  );
}

.clan-card--4 {
  background: linear-gradient(135deg, rgba(244, 228, 188, 0.4) 0%, rgba(244, 228, 188, 0.8) 50%, rgba(194, 154, 108, 0.9) 100%);
}

.clan-card--4::before {
  background: radial-gradient(ellipse at center, rgba(244, 228, 188, 0.3) 0%, transparent 70%);
}

.clan-card--5 {
  background: linear-gradient(135deg, rgba(229, 228, 226, 0.5) 0%, rgba(229, 228, 226, 0.8) 70%, rgba(128, 128, 128, 0.9) 100%);
}

.clan-card--5::before {
  background: 
    linear-gradient(90deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%),
    linear-gradient(0deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%);
}

.clan-card--6 {
  background: linear-gradient(135deg, rgba(255, 20, 147, 0.4) 0%, rgba(255, 20, 147, 0.8) 45%, rgba(138, 43, 226, 0.9) 100%);
}

.clan-card--6::before {
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 0, 255, 0.4) 0%, transparent 30%),
    radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.4) 0%, transparent 30%);
}

.clan-card--7 {
  background: linear-gradient(135deg, rgba(25, 25, 112, 0.4) 0%, rgba(25, 25, 112, 0.8) 55%, rgba(0, 0, 0, 0.9) 100%);
}

.clan-card--7::before {
  background: radial-gradient(ellipse at top, rgba(255, 215, 0, 0.2) 0%, transparent 50%);
}

.clan-card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  flex: 1;
}

.clan-name {
  font-size:.60em;
  margin-top: 0;
  margin-bottom: 15px;
  color: #fff;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  text-align: center;
  letter-spacing: 0.5px;
}

.clan-field {
  margin-top: 0;
  font-size: 0.33em;
  color: rgba(255,255,255,0.95);
  margin-bottom: 20px;
  font-weight: 500;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  text-align: center;
  line-height: 1.4;
}

.clan-type {
  color: rgba(255,255,255,0.9);
  font-size: 0.85em;
  margin-bottom: 10px;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  text-align: center;
}

.clan-keyword {
  color: rgba(255,255,255,0.8);
  font-size: 0.8em;
  margin-bottom: 20px;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  text-align: center;
  flex-grow: 1;
  font-style: italic;
}



.view-details-btn {
  display: block;
  background: linear-gradient(45deg, v-bind(color), v-bind(color) + 'CC');
  color: #fff;
  padding: 14px 28px;
  border-radius: 30px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255,255,255,0.4);
  font-size: 0.2em;
  letter-spacing: 0.5px;
}

.view-details-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  background: linear-gradient(45deg, v-bind(color), v-bind(color));
  letter-spacing: 1px;
}
</style>