<template>

  <div :style="containerStyles" class="section-screenshots">
    <div class="screenshot-title">
      <SectionTitle :value="title"></SectionTitle>
    </div>
    <div class="screenshot-paragraph">
      {{subTitle}}
    </div>
    <img :style="imgStyles" class="screenshot-img" :src="imgSrc" />
  </div>

</template>

<script setup lang="ts">
  import SectionTitle from "/pages/home/components/title/section-title.vue";

  defineProps<{
    title?: string;
    subTitle?: string;
    imgSrc?: string;
    imgStyles?: Object;
    containerStyles?: Object;
  }>()
</script>

<style lang="scss">

  .section-screenshots {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    flex-direction: column;
    gap: 40px;

    .screenshot-title {
      /*color: white;
      font-size: 80px;
      font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-weight: bold;
      text-transform: uppercase;*/
    }

    .screenshot-paragraph {
      font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      display: flex;
      text-align: justify;
      color: white;
      width: 50vw;

      @media (max-width: 1250px) {
        width: 80vw;
      }
    }

    .screenshot-img {
      width: 60vw;

      @media (max-width: 1250px) {
        width: 80vw;
      }
    }
  }

</style>