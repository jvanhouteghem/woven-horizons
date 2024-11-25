<template>

  <div class="section">
    <section-landing></section-landing>
  </div>

<!--  <div class="section-big">
    <section-background />
  </div>

  <div class="section-big texture">
    <img class="screen-capture" src="/images/animation-fight.gif" />
    <div class="border-img-text">
      lorem ipsum
    </div>
  </div>

  <div class="section-big texture">
    <img class="screen-capture" src="/images/animation-rogue-path.gif" />
    <div class="border-img-text">
      lorem ipsum
    </div>
  </div>-->

</template>

<script setup>
  import SectionLanding from "/pages/home/components/sections/section-landing/section-landing.vue";
</script>

<style lang="scss" scoped>
  .section {
    height: 850px;
  }
  /*.section-big {
    height: calc(100vh - 150px);
    flex-direction: column;
    gap: 10px;
  }

  .texture {
    background-color: #282828;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .screen-capture {
    width: 60%;
  }

  .border-img-text {
    border: 18px solid transparent;
    border-image: url("/images/feature_border.png") 18 stretch;
    background-color: #f4f6e9;
    border-radius: 18px;
    text-align: center;
    padding: 30px;
    margin: 0 40px 0;
    font-size: 32px;
    width: calc(60% - 90px);
  }*/

</style>