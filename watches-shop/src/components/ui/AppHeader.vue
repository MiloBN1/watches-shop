<script setup lang="ts">
  const langs = [{title:"ENG"},{title:"RUS"}]

</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center">
      <a>Times</a>
      <router-link to="/home"><a class="ml-[64px]">Watches</a></router-link>
      <a class="ml-[64px]">About us</a>
      <a class="ml-[64px]">Store</a>
      <i class="ml-[130px] bi bi-cart3 cart-icon" style="font-size: 30px;"></i>
    </div>
    <div class="flex items-center">
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
.option{
  color: #000;
  font-weight: bold;
  background-color: #9A836C;
  text-align: center;
}
.option:hover{
  background-color: #000 !important;
}
header select{
  appearance: none;
  outline: none;
  background-color: transparent;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
  width: 60px;
}
.login{
  font-size: 18px;
  font-weight: bold;
}

</style>
