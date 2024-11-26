<template>

  <div class="title-ui">
    {{value}}
  </div>

</template>

<script lang="ts" setup>
defineProps<{
  value: String;
}>();

</script>

<style lang="scss">

.title-ui {
  color: white;
  font-size: 80px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: bold;
  letter-spacing: -2px;
  line-height: 75px;
  text-transform: uppercase;

  @media (max-width: 1250px) {
    font-size: 25px;
    line-height: unset;
    text-align: center;
  }
}

</style>