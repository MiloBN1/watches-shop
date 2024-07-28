<script setup lang="ts">
  import LanguageSelect from "@/components/ui/LanguageSelect.vue";
  import { basketStore } from "@/stores/basket.store.js";
  import {computed} from "vue";
  const basket = basketStore();
  const basketCount = computed(() => basket.basket.length);
</script>

<template>
  <div class="fixed left-0 right-0 top-0 bg-[#21242b] z-50">
    <header class="flex items-center justify-between container-fluid">
      <div class="flex items-center">
        <a style="font-size: 24px; font-weight:800">Times</a>
        <router-link to="/"><a class="ml-[64px]">Watches</a></router-link>
        <router-link to="/"><a class="ml-[64px]">About us</a></router-link>
        <router-link to="/"> <a class="ml-[64px]">Store</a></router-link>
        <div class="ml-[130px] relative">
          <i class="bi bi-cart3 cart-icon" style="font-size: 30px;"></i>
          <span style="font-size: 15px"
             class="top-0 -left-2 absolute rounded-full bg-[#9A836C] w-[19px] h-[19px] flex justify-center items-center"
             :class="{'more-9':basketCount > 9}"
          >
            {{basketCount <= 9 ? basketCount : '9+'}}
          </span>
        </div>
      </div>
      <div class="flex items-center">
        <LanguageSelect/>
        <a class="ml-[30px] login">Log In</a>
      </div>
    </header>
  </div>

</template>
<style scoped>
header {
  height: 100px;
  line-height: 1.5;
  font-family: 'Manrope', sans-serif;
}
.more-9{
  font-size: 12px !important;
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
