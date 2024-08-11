<script setup lang="ts">
  import Header from './components/layout/AppHeader.vue'
  import AppFooter from "@/components/layout/AppFooter.vue";
  import GlobalAlert from "@/components/ui/GlobalAlert.vue";
</script>

<template>
  <div class="relative" style="height: 100px">
    <Header/>
  </div>
  <div class="container-fluid">
    <RouterView />
  </div>
  <AppFooter/>

  <div class="fixed right-5 top-36">
      <GlobalAlert/>
  </div>
</template>
<style scoped>

</style>