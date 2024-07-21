<script setup lang="ts">
  import Header from './components/ui/AppHeader.vue'
</script>

<template>
  <div class="container">
    <Header/>
    <RouterView />
  </div>
</template>
<style scoped>
.container{
  width: 1208px;
  margin: 0 auto;
}
</style>