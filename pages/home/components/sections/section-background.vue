<template>
  <div class="section-background">
    <div class="logo-container">
      <img class="logo" alt="logo" src="/images/sword-Photoroom.png" />
    </div>

    <div class="title">
      <div class="title-above">Woven</div>
      <div class="title-under">Horizons</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

  .section-background {
    min-height: calc(100vh - 150px);
    background: url('/images/bg2.png') no-repeat center center fixed;
    background-size: cover;

    .logo-container {
      height: 440px;
      position: absolute;
      left: calc(50% - 227px);
      bottom: -8px;
      .logo {
        height: 100%;
      }
    }

    .title {
      font-family: "antihero";
      font-size: 101px;
      line-height: 81px;
      position: absolute;
      left: calc(50% - 227px);
      bottom: 81px;
      color: #282828;
      $outline: 4px;
      text-shadow: -$outline -$outline 0 #ffffff, $outline -$outline 0 #ffffff, -$outline $outline 0 #ffffff, $outline $outline 0 #ffffff;

      .title-above {

      }

      .title-under {

      }
    }
  }

</style>