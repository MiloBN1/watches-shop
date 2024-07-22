<script setup lang="ts">
import watches from '../../shared/json/watches.json';

// Function to get the correct image URL
const getWatchesImage = (filepath: string) => {
  return new URL(filepath, import.meta.url).href;
};
</script>

<template>
  <div v-for="(item, index) in watches" :key="index" :style="`background-image: url(${getWatchesImage(`../../assets/images/backgrounds/${item.background}`)})`">
    <img :src="getWatchesImage(`../../assets/images/elements/${item.product}`)" alt="...">
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
