<template>
  <div :style="styles" class="logo-container">
    <img class="logo" alt="logo" src="/images/sword-Photoroom.png" />
    <div class="title">
      <div class="title-above">Woven</div>
      <div class="title-under">Horizons</div>
    </div>
  </div>

</template>

<script setup>
  defineProps({
    styles: {
      type: Object
    },
  });
</script>

<style lang="scss" scoped>

.logo-container {
  pointer-events: none;
  height: 440px;
  position: absolute;
  left: calc(50% - 227px);
  bottom: -40px;
  .logo {
    height: 100%;
  }
  .title {
    font-family: "antihero";
    font-size: 101px;
    line-height: 81px;
    position: absolute;
    bottom: 100px;
    color: #282828;
    $outline: 3px;
    text-shadow: -$outline -$outline 0 #ffffff, $outline -$outline 0 #ffffff, -$outline $outline 0 #ffffff, $outline $outline 0 #ffffff;

    .title-above {}

    .title-under {}
  }
}

</style>