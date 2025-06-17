<script>
import PurpleCard from "@/shared/components/sidebar.vue";

export default {
  name: "notifications",
  components: { PurpleCard }
};
</script>

<template>
  <PurpleCard />
  <top-bar />
  <div class="notifications-container">
    <h1 class="title">{{ $t('NOTIFICATIONS.TITLE') }}</h1>
    <div
        v-for="i in 7"
        :key="i"
        class="notification"
    >
      <div class="icon">
        <i class="pi pi-comments" />
      </div>
      <div class="message">
        <p class="message-title">{{ $t(`NOTIFICATIONS.${i - 1}.title`) }}</p>
        <p class="message-body">{{ $t(`NOTIFICATIONS.${i - 1}.body`) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopBar from "@/shared/components/topBar.vue";
</script>

<style scoped>
.notifications-container {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1f1f1f;
  text-align: left;
}

.notification {
  display: flex;
  align-items: flex-start;
  background-color: #ececec;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

.notification:hover {
  background-color: #e0e0e0;
}

.icon {
  flex-shrink: 0;
  font-size: 1.8rem;
  margin-right: 1rem;
  color: #444;
}

.message-title {
  font-weight: 600;
  margin: 0 0 0.4rem 0;
  color: #222;
}

.message-body {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
}
</style>
