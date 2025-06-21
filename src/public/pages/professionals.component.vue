<script>
import PurpleCard from "@/shared/components/sidebar.vue";

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
import TopBar from "@/shared/components/topBar.vue";
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
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #e3f2fd, #ffffff);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  position: relative;
}

.professional-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 1rem;
}

.pro-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: #1a237e;
}

.icon {
  font-size: 2rem;
  color: #3949ab;
}

.info {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #37474f;
  line-height: 1.4;
}

.desc {
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #546e7a;
  border-top: 1px solid #ddd;
  padding-top: 1rem;
}

.card-footer {
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
}
</style>
