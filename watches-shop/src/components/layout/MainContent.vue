<script setup lang="ts">
import AppSlider from "@/components/ui/AppSlider.vue";
import MainButton from "@/components/ui/MainButton.vue";
</script>

<template>
  <div class="main-container">
    <div class="left-side w-1/2">
      <h1>Discover <br/>Luxurious Watch <br/>Which You Will Love.<br/></h1>
      <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now how nay cold real case. </p>
      <MainButton class="mt-[45px] text-uppercase font-extrabold" style="width: 200px; height: 70px; font-size: 18px;" text="Read More"/>
    </div>
    <div class="right-side w-1/2 relative overflow-hidden ">
      <AppSlider/>
      <div class="absolute left-[-125%] top-[-20%] opacity-50" style="z-index: -1;">
        <img src="/images/backgrounds/light-circle.png" alt="...">
      </div>
    </div>
  </div>

</template>

<style scoped>
.main-container {
  display: flex;
  align-items: center;
  font-family: 'Manrope', sans-serif;
  height: calc(100vh - 125px);
}
.right-side{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.left-side {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding-right:  68px;
}

.left-side p {
  color: #B1B1B1;
}

.left-side h1 {
  font-size: 45px;
  color: #fff;
  font-weight: bold;
  line-height: 70px;
}

.left-side p {
  margin-top: 28px;
  font-size: 16px;
  font-weight: normal;
  line-height: 28px;
}

@media screen and (max-width: 1540px) {
  .left-side h1 {
    font-size: 35px;
    line-height: 50px;
  }
  .left-side p {
    margin-top: 20px;
    font-size: 14px;
    line-height: 28px;
  }
}
</style>