<template>
  <div class="section-landing">

    <div class="absolute-content ">

      <div class="landing-titles">
        <div class="landing-title">
          Unveil the
        </div>
        <div class="landing-title">
          shattered truth.
        </div>
      </div>

      <div class="landing-paragraph">
        Dragged into a fractured reality, you face relentless trials in a rogue-lite adventure where every run shapes your legend. Battle otherworldly forces, adapt, and rise—or be lost to the echoes of a crumbling world.
      </div>

      <div class="landing-action-start">
        <ButtonCodropsWapasha />
      </div>

      <div class="rooster">
        <img class="rooster-img" src="/images/rooster_immobile_breathe_right.gif" />
      </div>

    </div>

  </div>
</template>

<script setup>
import ButtonCodropsWapasha from './pages/home/components/sections/section-landing/components/button-codrops-wapasha.vue';
</script>

<style lang="scss">
.section-landing {
  height: 100%;
  background: url('/images/bg2.png') no-repeat center center fixed;
  background-size: cover;

  .absolute-content {
    position: absolute;
    top: 180px;
    left: 180px;

    display: flex;
    flex-direction: column;
    gap: 35px;

    .landing-titles {
      display: flex;
      flex-direction: column;
      gap: 1px;

      .landing-title {
        color: white;
        font-size: 80px;
        font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-weight: bold;
        letter-spacing: -2px;
        line-height: 75px;
        text-transform: uppercase;
      }
    }

    .landing-paragraph {
      width: 628px;
      color: white;
      font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      display: flex;
      text-align: justify;
    }

    .landing-action-start {

    }

    .rooster {
      .rooster-img {
        width: 125px;
      }
    }
  }
}

</style>