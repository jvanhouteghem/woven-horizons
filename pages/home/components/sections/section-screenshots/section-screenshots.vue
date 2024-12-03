<template>

  <div :style="containerStyles" class="section-screenshots">
    <div class="screenshot-title">
      <SectionTitle :value="title"></SectionTitle>
    </div>
    <div class="screenshot-paragraph">
      {{subTitle}}
    </div>
    <div class="screenshots">
      <div class="screenshots-item">
        <img class="screenshots-img" src="/images/animation-overlay-choice2.webp" loading="lazy" />
        <div class="screenshots-label">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </div>
      </div>

      <div class="screenshots-item">
        <img class="screenshots-img" src="/images/animation-skills.webp" loading="lazy" />
        <div class="screenshots-label">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </div>
      </div>

      <div class="screenshots-item">
        <img class="screenshots-img" src="/images/animation-shop.webp" loading="lazy" />
        <div class="screenshots-label">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </div>
      </div>
    </div>

    <div class="screenshots">
      <div class="screenshots-item">
        <img class="screenshots-img" src="/images/new-attack-choose.png" loading="lazy" />
        <div class="screenshots-label">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </div>
      </div>

      <div class="screenshots-item">
        <img class="screenshots-img" src="/images/animation-saving.gif" loading="lazy" />
        <div class="screenshots-label">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </div>
      </div>

      <div class="screenshots-item">
        <img class="screenshots-img" src="/images/upgrade-attack-choose.png" loading="lazy" />
        <div class="screenshots-label">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </div>
      </div>

    </div>

    <div class="screenshots">
      <div class="screenshots-item">
        <img class="screenshots-img" src="/images/animation-resume-team.webp" loading="lazy" />
        <div class="screenshots-label">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </div>
      </div>

      <div class="screenshots-item">
        <div class="screenshots-img and-more">
          {{ more }}
        </div>
      </div>

    </div>

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
    more?: string;
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
      font-size: 18px;

      @media (max-width: 1250px) {
        width: 80vw;
      }
    }

    .screenshots {
      width: 60vw;
      @media (max-width: 1250px) {
        width: 80vw;
      }

      display: flex;
      // justify-content: space-between;
      align-items: center;
      gap: 30px;

      .screenshots-img {
        width: 20vw;

        &.and-more {
          color: white;
          font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          font-size: 23px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 3px inset white;
          height: 265px;
        }
      }

      @media (max-width: 1250px) {
        flex-direction: column;
        .screenshots-img {
          width: 60vw;
        }
      }
    }

    .screenshots-item {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .screenshots-label {
        color: white;
        font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 15px;
        display: flex;
        justify-content: center;
        width: 20vw;
        text-align: justify;
        @media (max-width: 1250px) {
            width: unset;
        }
      }
    }


  }

</style>