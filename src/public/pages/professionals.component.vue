<script>
import PurpleCard from "@/components/sidebar.vue";

export default {
  name: "professionals",
  components: { PurpleCard }
}
</script>

<template>
  <PurpleCard />
  <top-bar/>
  <div class="professionals-wrapper">
    <h1 class="title">{{ $t('SIDEBAR.PROFESSIONAL') }}</h1>
    <div class="card-grid">
      <pv-card
          v-for="(proKey, index) in Object.keys(professionals)"
          :key="index"
          class="professional-card"
      >
        <template #title>
          <div class="card-header">
            <i class="pi pi-user icon" />
            <div class="pro-name">{{ $t(`PROFESSIONALS.${proKey}.name`) }}</div>
          </div>
        </template>
        <template #content>
          <div class="info"><strong>{{ $t("SPECIALIZATION") }}:</strong> {{ $t(`PROFESSIONALS.${proKey}.specialization`) }}</div>
          <div class="info"><strong>{{ $t("SCHEDULE") }}:</strong> {{ $t(`PROFESSIONALS.${proKey}.schedule`) }}</div>
          <div class="desc">{{ $t(`PROFESSIONALS.${proKey}.description`) }}</div>
        </template>
        <template #footer>
          <div class="card-footer">
            <pv-button
                :label="$t('START_CONVERSATION')"
                icon="pi pi-comments"
                severity="primary"
                outlined
                rounded
            />
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script setup>
import TopBar from "@/components/topBar.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const professionals = {
  marco: true,
  laura: true,
  camila: true,
  andres: true,
  martha: true
};
</script>

<style scoped>
.professionals-wrapper {
  padding: 3rem 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
  color: #333;
  margin-left: 110px;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-left: 280px;
  max-width: 80%;
}

.professional-card {
  width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: white;
  margin-left: 20px;
}

.professional-card:hover {
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  padding: 0.5rem 0;
}

.icon {
  font-size: 1.8rem;
  color: #3f51b5;
}

.info {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: #555;
}

.desc {
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #666;
}

.card-footer {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}
</style>
