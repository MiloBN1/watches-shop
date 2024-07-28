<script setup lang="ts">
  import Header from './components/layout/AppHeader.vue'
  import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
  <div class="relative" style="height: 100px">
    <Header/>
  </div>
  <div class="container-fluid">
    <RouterView />
  </div>
  <AppFooter/>
</template>
<style scoped>

</style>