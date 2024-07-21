<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <a>Times</a>
      <a>Watches</a>
      <a>About us</a>
      <a>Store</a>
      <i class="bi bi-cart3 cart-icon"></i>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
header a {
  text-transform: uppercase;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 300;
}
header .cart-icon {
  display: inline-block;
  transform: scaleX(-1); 
}
</style>
