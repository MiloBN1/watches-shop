<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

  let lang = 'ENG'
  function selectLanguage(value:string){
    lang = value;
  }
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton style="font-size: 18px" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white">
      {{ lang }}
      <i class="bi bi-caret-down-fill" style="color: #9A836C"></i>
    </MenuButton>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="w-full absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="bg-[#9A836C] text-center cursor-pointer" >
          <MenuItem v-slot="{ active }" @click="selectLanguage('ENG')">
            <a :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']" class="text-black">ENG</a>
          </MenuItem>
          <MenuItem v-slot="{ active }" @click="selectLanguage('RUS')">
            <a :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']" class="text-black">RUS</a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style scoped>
  a{
    font-size: 18px;
  }
</style>