<script>
import { StoryService } from "@/modules/services/story.service.js";
import { Story } from "@/modules/model/story.entity.js";
import {Card as PvCard} from "primevue";
import PurpleCard from "@/shared/components/sidebar.vue";
import TopBar from "@/shared/components/topBar.vue";

export default {
  name: "stories-module",
  components: {TopBar, PurpleCard, PvCard},
  data() {
    return {
      stories: [],
    };
  },
  async created() {
    const storyService = new StoryService();
    const response = await storyService.getAll();
    this.stories = response.data.map((story) => new Story(story));
  },
}
</script>

<template>
  <PurpleCard/>
  <top-bar/>
  <div class="scroll-container">
    <h1 class="stories-title">Stories</h1>
    <div class="stories-container">
      <div v-for="story in stories" :key="story.title" class="story-card">
        <pv-card>
          <template #header>
            <img :src="story.image" :alt="story.title" class="story-image" />
          </template>
          <template #title class="story-title">{{ story.title }}</template>
          <template #content>
            <p class="story-author">By: {{ story.author }}</p>
            <p class="story-content">{{ story.content }}</p>
          </template>
          <template #footer>
            <Button link class="read-more-btn">Read More</Button>
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

.stories-title {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: black;
}

.stories-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.story-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.story-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>