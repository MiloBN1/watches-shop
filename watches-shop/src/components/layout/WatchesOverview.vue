<script setup lang="ts">
import MainButton from "@/components/ui/MainButton.vue";
import watches from '@/shared/json/feature-watches.json'
</script>

<template>
  <div class="py-[100px] main-container">
    <div class="title text-center">
      <h1>FEATURES OF THE TIMES</h1>
      <p>We have never left the limelight. In fact, Based <br/> and ordinary people who loves</p>
    </div>
    <div class="flex gap-[30px] mt-[50px] ">
      <v-card width="370px" color="#21242B" class="pb-[30px]" v-for="item in watches" :key="item.img">
        <v-img :src="`/images/backgrounds/${item.img}`"></v-img>
        <v-card-title class="px-[25px] mt-[23px] text-capitalize font-bold">{{ item.title }}</v-card-title>
        <v-card-text class="px-[25px] mt-[12px] text-[#B1B1B1]" style="line-height:28px; font-size: 16px">
          {{item.text}}
        </v-card-text>
        <v-card-item class="px-[25px] ">
          <MainButton style="width: 100%; height: 70px;font-size: 18px" text="View Details" class="text-uppercase font-extrabold"/>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.title h1{
  color: #fff;
  font-weight: bold;
  font-size: 24px;
}
.title p{
  font-size: 16px;
  margin-top: 30px;
  color: #B1B1B1;
  text-transform: capitalize;
}
.main-container{
  font-family: 'Manrope', sans-serif;
}

</style>