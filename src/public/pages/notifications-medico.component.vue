<template>
  <div class="notifications-medico">
    <PurpleCard />
    <top-bar />

    <div class="content">
      <h1 class="app-title">Youper</h1>
      <h2 class="page-title">{{ $t('NOTIFICATIONS.TITLE') }}</h2>

      <!-- Sección de Notificaciones del Sistema -->
      <div class="system-notifications">
        <div class="notification-item" v-for="i in visibleNotifications" :key="i">
          <p class="notification-title">
            <i v-if="i === 2 || i === 3" class="pi pi-crown" style="margin-right: 0.5rem; color: #f1c40f;" />
            <strong>{{ $t(`NOTIFICATIONS.${i - 1}.title`) }}</strong>
          </p>
          <p class="notification-message">{{ $t(`NOTIFICATIONS.${i - 1}.body`) }}</p>
        </div>
      </div>


      <!-- Menú de Opciones -->
      <div class="options-menu">
        <div class="menu-item" v-for="(item, index) in menuOptions" :key="'menu-'+index">
          <i :class="['pi', item.completed ? 'pi-check-circle completed' : 'pi-circle']"></i>
          <span>{{ item.label }}</span>
        </div>
      </div>

      <!-- Mensajes de Pacientes -->
      <div class="patient-messages">
        <div class="message" v-for="(msg, index) in patientMessages" :key="'msg-'+index">
          <i class="pi pi-circle"></i>
          <div class="message-content">
            <p class="patient-name">{{ msg.patient }}</p>
            <p class="message-text">{{ msg.text }}</p>
          </div>
        </div>
      </div>

      <!-- Botón de Cerrar Sesión -->
      <button class="logout-button" @click="handleLogout">
        <i class="pi pi-sign-out"></i>
        {{ $t('SIDEBAR.SESSION') }}
      </button>
    </div>
  </div>
</template>

<script>
import PurpleCard from "@/shared/components/sidebar.vue";
import TopBar from "@/shared/components/topBar.vue";

export default {
  name: "NotificationsMedico",
  components: {
    PurpleCard,
    TopBar
  },
  data() {
    return {
      visibleNotifications: 3, // Mostrar las primeras 3 notificaciones
      menuOptions: [
        { label: 'Dashboard', completed: false },
        { label: 'Messages', completed: false },
        { label: 'Schedule', completed: true },
        { label: 'Patients Report', completed: false },
        { label: 'Notifications', completed: false }
      ],
      patientMessages: [
        { patient: 'DaríoGuzmán', text: 'Good afternoon. How are you?' },
        { patient: 'DanielaVilchez', text: "Hi, I'm reading your story. It's very interesting." }
      ]
    };
  },
  methods: {
    handleLogout() {
      // Lógica para cerrar sesión
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.notifications-medico {
  display: flex;
  min-height: 100vh;
  background-color: #FFE0B2;
}

.content {
  flex: 1;
  padding: 2rem;
  margin-left: 220px; /* Ajuste para el sidebar */
}

.app-title {
  color: #856dc8;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.page-title {
  color: #333;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
}

.system-notifications,
.options-menu,
.patient-messages {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.notification-item {
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-title {
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.notification-message {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item i {
  margin-right: 1rem;
  font-size: 1.2rem;
}

.menu-item .completed {
  color: #4caf50;
}

.menu-item .pi-circle {
  color: #856dc8;
}

.patient-messages .message {
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.patient-messages .message:last-child {
  border-bottom: none;
}

.patient-messages i {
  color: #856dc8;
  margin-right: 1rem;
  font-size: 1.2rem;
}

.patient-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
}

.message-text {
  color: #666;
  font-size: 0.95rem;
}

.logout-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background: #856dc8;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.logout-button:hover {
  background: #6a5acd;
}

.logout-button i {
  margin-right: 0.5rem;
}
</style>