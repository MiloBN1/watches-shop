<script setup lang="ts">
import { basketStore } from "@/stores/basket.store.js";
import {computed} from "vue";
const basket = basketStore();
const basketItems = computed(() => basket.basket);
import MainButton from "@/components/ui/MainButton.vue";
let cartTotal = computed(() => basket.cartTotal);
function addQuantity(product:any){
  basket.addQuantity(product)
}

function reduceQuantity(product:any){
  basket.reduceQuantity(product)
}

</script>

<template>
  <div class="w-full font-manrope">
    <table class="w-full">
      <thead>
      <tr style="border-bottom: 1px solid #9A836C;">
        <th>
          PRODUCT
        </th>
        <th>
          Unit Price
        </th>
        <th>
          Quantity
        </th>
        <th>
          Total Price
        </th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in basketItems" :key="item.id" style="border-bottom: 1px solid #9A836C;">
          <td>
            <div class="flex items-center">
              <div style="max-width: 177px;">
                <img :src="`/images/watches-suggestion/${item.img}`" alt="..">
              </div>
              <span class="ml-[30px]">{{item.title}}</span>
            </div>
          </td>
          <td>${{item.price}}</td>
          <td>
            <button class="mr-[15px] text-[#9A836C]" style="font-size: 20px" @click="reduceQuantity(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button class="ml-[15px] text-[#9A836C]" style="font-size: 20px" @click="addQuantity(item)">+</button>
          </td>
          <td>${{ item.price * item.quantity }}</td>
        </tr>
      </tbody>
    </table>
    <div class="mt-10 flex w-full justify-between">
      <div>
        <MainButton class="checkout font-extrabold text-uppercase" focused="true" text="Checkout"></MainButton>
        <MainButton class="continue font-extrabold text-uppercase ml-10" text="Continue shopping"></MainButton>
      </div>
      <div class="mr-20">
        <span>SUB TOTAL: <span class="text-white ml-3">${{cartTotal}}</span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  th{
    font-size: 18px;
    line-height: 28px;
    text-transform: uppercase;
    text-align: center;
    color: #9A836C;
    padding: 28px 0;
  }
  th:first-child{
    text-align: left;
    padding-left: 10px;
  }
  td{
    font-size: 22px;
    text-align: center;
    padding: 49px 0;
    color: #fff;
  }
  td:first-child{
    text-align: left;
    padding-left: 10px;
  }
  MainButton{
    font-size: 16px;
  }
  .checkout{
    width: 180px;
    height: 54px;
  }
  .continue{
    width: 250px;
    height: 54px;
    letter-spacing: 3px;
  }
</style>