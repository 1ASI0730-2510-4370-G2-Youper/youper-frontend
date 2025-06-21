<template>
  <PurpleCard/>
  <top-bar/>
  <div class="modules-container">
    <h1 class="modules-title">{{ $t('MODULES.TITLE') }}</h1>
    <div class="modules-grid">

      <!-- Stress Module -->
      <div class="module-card">
        <div class="module-icon">💥</div>
        <h2 class="module-name">{{ $t('MODULES.STRESS.NAME') }}</h2>
        <p class="module-description">
          {{ $t('MODULES.STRESS.DESCRIPTION') }}
        </p>
        <div class="module-buttons">
          <Button :label="$t('MODULES.START')" class="p-button-sm p-button-raised p-button-secondary" @click="$router.push('/stress-module')"/>
          <Button :label="$t('MODULES.MORE_INFO')" class="p-button-sm p-button-text custom-more-info" />
        </div>
      </div>

      <!-- Self-Esteem Module -->
      <div class="module-card">
        <div class="module-icon">🧍‍♂️</div>
        <h2 class="module-name">{{ $t('MODULES.SELF.NAME') }}</h2>
        <p class="module-description">
          {{ $t('MODULES.SELF.DESCRIPTION') }}
        </p>
        <div class="module-buttons">
          <Button :label="$t('MODULES.START')" class="p-button-sm p-button-raised p-button-secondary"  @click="$router.push('/self-module')"/>
          <Button :label="$t('MODULES.MORE_INFO')" class="p-button-sm p-button-text custom-more-info" />
        </div>
      </div>

      <!-- Interpersonal Module -->
      <div class="module-card">
        <div class="module-icon">🧠</div>
        <h2 class="module-name">{{ $t('MODULES.INTERPERSONAL.NAME') }}</h2>
        <p class="module-description">
          {{ $t('MODULES.INTERPERSONAL.DESCRIPTION') }}
        </p>
        <div class="module-buttons">
          <Button :label="$t('MODULES.START')" class="p-button-sm p-button-raised p-button-secondary" @click="$router.push('/interpersonal-module')"/>
          <Button :label="$t('MODULES.MORE_INFO')" class="p-button-sm p-button-text custom-more-info" />
        </div>
      </div>

      <!-- Stories Module -->
      <div class="module-card">
        <div class="module-icon">📖</div>
        <h2 class="module-name">{{ $t('MODULES.STORIES.NAME') }}</h2>
        <p class="module-description">
          {{ $t('MODULES.STORIES.DESCRIPTION') }}
        </p>
        <div class="module-buttons">
          <pv-button :label="$t('MODULES.START')" class="p-button-sm p-button-raised p-button-secondary" @click="$router.push('/stories-module')"/>
          <pv-button :label="$t('MODULES.MORE_INFO')" class="p-button-sm p-button-text custom-more-info" />
        </div>
      </div>

      <!-- Tips Module -->
      <div class="module-card">
        <div class="module-icon">💡</div>
        <h2 class="module-name">{{ $t('MODULES.TIPS.NAME') }}</h2>
        <p class="module-description">
          {{ $t('MODULES.TIPS.DESCRIPTION') }}
        </p>
        <div class="module-buttons">
          <pv-button :label="$t('MODULES.START')" class="p-button-sm p-button-raised p-button-secondary" @click="$router.push('/tips-module')"/>
          <pv-button :label="$t('MODULES.MORE_INFO')" class="p-button-sm p-button-text custom-more-info" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Button from 'primevue/button'
import PurpleCard from '@/shared/components/sidebar.vue'
import TopBar from "@/shared/components/topBar.vue";
import {Button as PvButton} from "primevue";

export default {
  name: 'modules',
  components: {
    PvButton,
    TopBar,
    PurpleCard,
    Button
  }
}
</script>

<style scoped>
.modules-container {
  padding: 2rem;
  background-color: #f9f9fb;
  min-height: 100vh;
}

.modules-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #6b21a8;
  margin-bottom: 2.5rem;
  margin-left: 220px;
  margin-top: 100px;

}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 68%;
  margin-left: 390px;
  margin-top: 70px;
  gap: 2rem;
}

.module-card {
  background-color: #ffffff;
  border: 2px solid #d8b4fe;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.3s ease;
}

.module-card:hover {
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
}

.module-icon {
  width: 48px;
  height: 48px;
  background-color: #ede9fe;
  color: #6b21a8;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  margin-bottom: 1rem;
}

.module-name {
  font-size: 1.25rem;
  font-weight: bold;
  color: #4c1d95;
  margin-bottom: 0.75rem;
}

.module-description {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.module-buttons {
  display: flex;
  gap: 0.75rem;
}

.custom-more-info {
  color: #6b21a8 !important;
}
</style>
