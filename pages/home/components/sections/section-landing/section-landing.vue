<template>
  <div class="section-landing">

    <div class="absolute-content ">

      <div class="landing-titles">
        <div class="landing-title">
          <SectionTitle :value="$t('landing.title_part1')"></SectionTitle>
        </div>
        <div class="landing-title">
          <SectionTitle :value="$t('landing.title_part2')"></SectionTitle>
        </div>
      </div>

      <div class="landing-paragraph">
        <b>{{ $t("landing.tags") }}</b>
      </div>

      <div class="landing-paragraph">
        {{ $t("landing.description") }}
      </div>

      <div class="landing-action-start">
        {{ $t("landing.action_start") }}
      </div>

      <div class="rooster">
        <img class="rooster-img" src="/images/rooster_immobile_breathe_right.gif" />
      </div>

    </div>

  </div>
</template>

<script setup>

import SectionTitle from "/pages/home/components/title/section-title.vue";
</script>

<style lang="scss">
.section-landing {
  height: 100%;
  background: url('/images/bg-ruins-blurred.webp') no-repeat center center;
  background-size: cover;
  // overflow: auto;
  // position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;

  .absolute-content {
    display: flex;
    flex-direction: column;
    gap: 35px;

    width: 100%;
    padding: 0 10%;

    .landing-titles {
      display: flex;
      flex-direction: column;
      gap: 1px;

      .landing-title {
        /*color: white;
        font-size: 80px;
        font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-weight: bold;
        letter-spacing: -2px;
        line-height: 75px;
        text-transform: uppercase;*/
      }
    }

    .landing-paragraph {
      max-width: 628px;
      width: 100%;
      color: white;
      font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      display: flex;
      text-align: justify;
      font-size: 18px;
    }

    .landing-action-start {
      background: url('/images/bg-forest-blurred.webp');
      background-size: 1095px 950px;
      border: 2px solid #9f9f9f;;
      padding: 15px;
      width: -moz-fit-content;
      width: fit-content;
      background-position: 150px 1250px;
      color: white;
      border-radius: 6px;

      font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-weight: bold;

      filter: hue-rotate(401deg);
    }

    .rooster {
      .rooster-img {
        width: 125px;
      }
    }
  }
}

</style>