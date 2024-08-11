<script setup lang="ts">
import { globalAlertStore } from "@/stores/globalAlert.store";
import {computed} from "vue";
const globAlert = globalAlertStore();
const alerts = computed(() => globAlert.getAlerts);
console.log(alerts.value)
</script>

<template>
  <div
      class="custom-alert flex items-center p-4 mb-4 text-sm border rounded-lg dark:bg-gray-800 "
      :class="[
          {'border-green-300 dark:text-green-400 dark:border-green-800': alert.status === 200},
          {'border-red-300 dark:text-red-400 dark:border-red-800': alert.status === 500},
          {'disappear': !alert.show},
      ]"
      role="alert"
      v-for="(alert, index) in alerts" :key="alert.message + index">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">{{ alert.message }}</span>
    </div>
  </div>

</template>

<style scoped>
  .custom-alert{
    animation: apperance .7s ease-in-out;
  }

  @keyframes apperance {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

</style>