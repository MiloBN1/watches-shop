<script setup lang="ts">
import { ref } from 'vue';
import watches from '@/shared/json/watches.json';

let activeId = ref(0);
let cycling = ref(true);

function stopCycling() {
  cycling.value = false;
}

function startCycling() {
  cycling.value = true;
}

function setActiveId(id: number) {
  activeId.value = id;
}

function toggleNext() {
  if (activeId.value === 3) {
    activeId.value = 0;
    return;
  }
  activeId.value += 1;
}

</script>

<template>
  <div class="product-wrapper" @mouseenter="stopCycling()" @mouseleave="startCycling()">
    <v-carousel
        style="width: 422px"
        interval="3000"
        :cycle="cycling"
        v-model="activeId"
        :hide-delimiters="true"
        :show-arrows="false"
    >
      <v-carousel-item
          v-for="(item, index) in watches.slice(0, 4)"
          :key="index"
          :src="`/images/slider/${item.img}`"
      ></v-carousel-item>
    </v-carousel>
    <template class="flex justify-between">
      <div class="text-white">
        {{ watches[activeId].price }}
      </div>
      <div class="flex">
        <div
            class="indicator-wrapper"
            v-for="(indicator, index) in watches.slice(0,4)"
            :key="index"
            :class="{ 'active-indicator': activeId === index }"
        >
          <div class="indicator" @click="setActiveId(index)"></div>
        </div>
      </div>
    </template>
    <div class="flex justify-between">
      <h2 class="text-white font-bold" style="font-size: 23px">{{ watches[activeId].title }}</h2>
      <button @click="toggleNext()" class="bg-transparent text-white" style="font-size: 30px">
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.product-wrapper {
  width: 422px;
}
.indicator {
  border-radius: 100%;
  background-color: #8d7966;
  width: 11px;
  height: 11px;
}
.indicator-wrapper {
  width: 17px;
  height: 17px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active-indicator {
  border: 1px solid #8d7966;
}
</style>
