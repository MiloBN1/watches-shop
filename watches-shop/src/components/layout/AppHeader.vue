<script setup lang="ts">
  import LanguageSelect from "@/components/ui/LanguageSelect.vue";
</script>

<template>
  <header class="flex items-center justify-between py-10">
    <div class="flex items-center">
      <a style="font-size: 24px; font-weight:800">Times</a>
      <router-link to="/watches"><a class="ml-[64px]">Watches</a></router-link>
      <router-link to="/about"><a class="ml-[64px]">About us</a></router-link>
      <router-link to="/store"> <a class="ml-[64px]">Store</a></router-link>
      <i class="ml-[130px] bi bi-cart3 cart-icon" style="font-size: 30px;"></i>
    </div>
    <div class="flex items-center">
      <LanguageSelect/>
      <a class="ml-[30px] login">Log In</a>
    </div>
    </header>
</template>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  font-family: 'Manrope', sans-serif;
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
.login{
  font-size: 18px;
  font-weight: bold;
}
</style>
