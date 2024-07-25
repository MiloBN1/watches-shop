<script setup lang="ts">
const props = defineProps(['width', 'height', 'text', 'focused'])
</script>

<template>
  <button :style="`width: ${props.width}; height: ${props.height}`" :class="{'focused':props.focused, 'hovered': !props.focused}">{{ props.text }}</button>
</template>

<style scoped>
button {
  font-family: 'Manrope', sans-serif;
  border: 3px solid;
  border-image: linear-gradient(to right, #9A836C 0%, #B1A48F 100%) 1;
  color: #9A836C;
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 4px;
  position: relative;
  background: none;
  z-index: 1;
}

button::before {
  content: "";
  width: 0;
  height: 100%;
  background:linear-gradient(to right, #9A836C 0%, #B1A48F 100%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transition: width 0.4s ease-in-out;
}

button:hover {
  color: #181818;
}

.hovered:hover::before {
  width: 100%;
}

.focused {
  color: #181818;
  background:linear-gradient(to right, #9A836C 0%, #B1A48F 100%);
}
</style>