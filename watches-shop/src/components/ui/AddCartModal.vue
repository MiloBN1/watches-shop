<script setup lang="ts">
import { basketStore } from "@/stores/basket.store.js";
const basket = basketStore();
import MainButton from "@/components/ui/MainButton.vue";
import {modalService} from "@/services/modalControl.service";
import {onUnmounted, ref} from "vue";
const props = defineProps(['watchItem'])
let quantity = ref(1)

function addQuantity(){
  quantity.value++;
}

function reduceQuantity(){
  if(quantity.value != 1) quantity.value --;
}

function toggleCancel(){
  modalService.close()
}

function addToCart(product:any){
  basket.addToCart(product, quantity.value);
  modalService.close()
}

onUnmounted(()=>quantity.value = 0)

</script>

<template>
  <div class="fixed w-full inset-0 bg-[#0004] flex items-center">
  <div class="container-fluid font-manrope py-10 rounded bg-[#21242b]" >
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
      <tr style="border-bottom: 1px solid #9A836C;">
        <td>
          <div class="flex items-center">
            <div style="max-width: 177px;">
              <img :src="`/images/watches-suggestion/${props.watchItem.img}`" alt="..">
            </div>
            <span class="ml-[30px]">{{props.watchItem.title}}</span>
          </div>
        </td>
        <td>${{props.watchItem.price}}</td>
        <td>
          <button class="mr-[15px] text-[#9A836C]" style="font-size: 20px" @click="reduceQuantity()">-</button>
          <span>{{ quantity }}</span>
          <button class="ml-[15px] text-[#9A836C]" style="font-size: 20px" @click="addQuantity()">+</button>
        </td>
        <td>${{ props.watchItem.price * quantity }}</td>
      </tr>
      </tbody>
    </table>
    <div class="mt-10 ml-[10px]">
        <MainButton class="cancel font-extrabold text-uppercase " text="Cancel" @click="toggleCancel()"></MainButton>
        <MainButton class="add font-extrabold text-uppercase ml-10" focused="true" text="Add" @click="addToCart(props.watchItem)"></MainButton>
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
.cancel{
  width: 120px;
  height: 54px;
}
.add{
  width: 150px;
  height: 54px;
  letter-spacing: 3px;
}
</style>