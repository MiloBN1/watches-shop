<script setup lang="ts">

import AppSlider from "@/components/ui/AppSlider.vue";
</script>

<template>
  <div class="main-container">
    <div class="left-side w-1/2">
      <h1>Discover <br/>Luxurious Watch <br/>Which You Will Love.<br/></h1>
      <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now how nay cold real case. </p>
      <button>READ MORE <i class="bi bi-arrow-right"></i></button>
    </div>
    <div class="right-side w-1/2">
      <div>
        <AppSlider/>
      </div>
      <div class="flex">
        <h2>$215</h2>
        <div></div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped>
  .main-container{
    display: flex;
    font-family: 'Manrope', sans-serif;
  }
  .left-side{
    padding-right: 68px;
  }
  .left-side h1{
    font-size: 45px;
    color:#fff;
    font-weight: bold;
    line-height: 70px;
  }
  .left-side p{
    margin-top: 28px;
    font-size: 16px;
    font-weight: normal;
    line-height: 28px;
  }
  .left-side button{
    width: 200px;
    height: 70px;
    margin-top: 45px;
    border: 3px solid;
    border-image: linear-gradient(to right, #9A836C 0%, #B1A48F 100%) 1;
    color: #9A836C;
    font-size: 18px;
    font-weight: bolder;
    letter-spacing: 4px;
    position: relative;
  }
  .left-side button i {
    font-size: 46px;
    height: 100%;
    position: absolute;
    right: -17%;
    top: -2px;
    color: #B1A48F;
  }
</style>