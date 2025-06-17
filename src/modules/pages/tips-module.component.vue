<script>
import { TipService } from "@/modules/services/tip.service.js";
import { Tip } from "@/modules/model/tip.entity.js";
import PurpleCard from "@/shared/components/sidebar.vue";
import TopBar from "@/shared/components/topBar.vue";

export default {
  name: "tips-module",
  components: {TopBar, PurpleCard},
  data() {
    return {
      tips: [],
    };
  },
  async created() {
    const tipService = new TipService();
    const response = await tipService.getAll();
    this.tips = response.data.map((tip) => new Tip(tip));
  },
}
</script>

<template>
  <PurpleCard/>
  <top-bar/>
  <div class="scroll-container">
    <h1 class="tips-title">Tips</h1>
    <div class="tips-container">
      <div v-for="tip in tips" :key="tip.title" class="tip-card">
        <pv-card>
          <template #header>
            <img :src="tip.image" :alt="tip.title" class="tip-image" />
          </template>
          <template #title class="tip-title">{{ tip.title }}</template>
          <template #content>
            <p class="tip-content">{{ tip.content }}</p>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-container {
  max-height: 100vh;
  overflow-y: auto;
}

.tips-title{
  text-align: center;
}

.tips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.tip-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tip-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>