<script setup lang="ts">
  import MainButton from "@/components/ui/MainButton.vue";
  import jsonWatches from "@/shared/json/watches.json";
  import {ref} from "vue";
  import { basketStore } from "@/stores/basket.store.js"

  const basket = basketStore()
  let activeId = ref(0);
  const buttons = [{title:"All Times", value:"all"},{title:"Men Times", value:"men"},{title:"Women Times", value:"women"},{title:"Sports Times", value:"sport"},{title:"Trend Times", value:"trend"}]
  let watches = ref(jsonWatches)
  let filter = ref('all')

  function setActiveId(value:number){
    activeId.value = value;
  }

  function addToCart(product:any){
    basket.addToCart(product)
  }

  function getFilteredWatches(){
    if(filter.value === "all") return watches.value;
    return watches.value.filter((item)=>item.type === filter.value)
  }

  function setFilter(type:string){
    filter.value = type;
  }


</script>

<template>
  <div class="font-manrope">
    <div class="text-center">
      <h1>Featured categories of Times</h1>
      <p class="mt-4 text-capitalize">What looked like a small patch of purple grass, above five feet <br/>  square, was moving across the sand in they.</p>
    </div>
    <div class="flex mt-[48px] justify-between">
      <div v-for="(button, index) in buttons" :key="button.value">
        <MainButton
            @click="setActiveId(index); setFilter(button.value)"
             :text="button.title" :focused="activeId === index"
            class="text-uppercase filter-options"/>
      </div>
    </div>
    <div class="grid grid-cols-3 mt-[70px] gap-x-[19px] gap-y-[30px]" style="min-height: 600px">
      <v-card max-height="552px"  color="#21242B" class="pb-[30px] card" v-for="item in getFilteredWatches()" :key="item.img">
        <v-img cover style="min-height: 286px" :src="`/images/watches-suggestion/${item.img}`"></v-img>
        <div class="px-[25px] mt-[23px] flex justify-between">
          <h2 class="text-capitalize font-bold">{{ item.title }}</h2>
          <span>${{item.price}}</span>
        </div>
        <v-card-text class="px-[25px] mt-[12px] text-[#B1B1B1]" style="line-height:28px; font-size: 16px">
          {{item.text}}
        </v-card-text>
        <v-card-item class="px-[25px] ">
          <div class="flex justify-between">
            <MainButton text="Buy Now" :focused="true" class="text-uppercase suggest-btn"/>
            <MainButton text="Add Cart" class="text-uppercase suggest-btn" @click="addToCart(item)"/>
          </div>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
  h1{
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    text-transform: uppercase;
    color: #fff;
  }
  h2{
    font-size: 18px;
    font-weight: bold;
  }
  span{
    font-weight: bold;
    font-size: 18px;
  }
  .suggest-btn{
    width: 154px;
    height: 60px;
    font-size: 18px;
    font-weight: 900;
  }
  .filter-options{
    width: 200px;
    height: 70px;
    font-size: 18px;
    font-weight: 900;
  }
  .card{
    width: 370px;
  }
  @media screen and (max-width: 1540px) {
    .suggest-btn{
      width: 124px;
      font-size: 16px;
    }
    .filter-options{
      width: 180px;
      font-size: 14px;
    }
    .card{
      width: 320px;
    }
  }

</style>