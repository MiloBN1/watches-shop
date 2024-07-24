<script setup lang="ts">
import { ref } from 'vue';
import watches from '../../shared/json/watches.json';
  let activeId = ref(0);
  let cycling = ref(true);

  function stopCycling(){
    cycling.value = false;
  }
  function startCycling(){
    cycling.value = true;
  }
  function setActiveId(id:number){
    activeId.value = id;
  }
</script>

<template>
  <div class="product-wrapper">
    <v-carousel
        interval="3000" @mouseenter="stopCycling()" @mouseleave="startCycling()"
        :cycle="cycling" v-model="activeId"
        :hide-delimiters="true"  :show-arrows="false">
      <v-carousel-item v-for="(item, index) in watches" :key="index" :src="`/images/elements/${item.product}`"></v-carousel-item>
    </v-carousel>
    <template class="flex">
        <div class="indicator-wrapper"
             v-for="(indicator, index) in watches" :key="index"
             :class="{'active-indicator': activeId === index}">
          <div class="indicator" @click="setActiveId(index)">

          </div>
        </div>
    </template>
    <div>{{activeId}}</div>
  </div>

</template>

<style scoped>
  .indicator{
    border-radius: 100%;
    background-color: #8D7966;
    width: 11px;
    height: 11px;
  }

  .indicator-wrapper{
    width: 17px;
    height: 17px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active-indicator{
    border:1px solid #8d7966;
  }
</style>
