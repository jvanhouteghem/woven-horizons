<template>

  <div class="section">
    <SectionLanding></SectionLanding>
  </div>

  <div class="section-screenshots-container">
    <SectionScreenShot />
  </div>

</template>

<script setup>
  import SectionLanding from "/pages/home/components/sections/section-landing/section-landing.vue";
  import SectionScreenShot from "/pages/home/components/sections/section-screenshots/section-screenshots.vue";
</script>

<style lang="scss" scoped>
  .section {
    height: 850px;
    background-color: #0f1a1c;
  }

  .section-screenshots-container {
    height: 1000px;
    background-color: #0f1a1c;
    padding: 100px;
  }

</style>