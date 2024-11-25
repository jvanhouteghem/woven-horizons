<template>

  <div class="section">
    <SectionLanding></SectionLanding>
  </div>

  <div class="section-screenshots-container">
    <SectionScreenShot :imgStyles="props.dialogs.imgStyles" :title="props.dialogs.title" :subTitle="props.dialogs.subTitle" :imgSrc="props.dialogs.imgSrc" />
  </div>

  <div class="section-screenshots-container">
    <SectionScreenShot :imgStyles="props.fight.imgStyles" :title="props.fight.title" :subTitle="props.fight.subTitle" :imgSrc="props.fight.imgSrc" />
  </div>

</template>

<script setup>
  import SectionLanding from "/pages/home/components/sections/section-landing/section-landing.vue";
  import SectionScreenShot from "/pages/home/components/sections/section-screenshots/section-screenshots.vue";

  const props = {
    dialogs: {
      title: 'Unveil the shattered truth.',
      subTitle: 'Dragged into a fractured reality, you face relentless trials in a rogue-lite adventure where every run shapes your legend. Battle otherworldly forces, adapt, and rise—or be lost to the echoes of a crumbling world.',
      imgSrc: '/images/Animation.gif'
    },
    fight: {
      title: 'Unveil the shattered truth.',
      subTitle: 'Dragged into a fractured reality, you face relentless trials in a rogue-lite adventure where every run shapes your legend. Battle otherworldly forces, adapt, and rise—or be lost to the echoes of a crumbling world.',
      imgSrc: '/images/animation-fight.gif',
      imgStyles: {border: '15px solid white'}
    }
  }

</script>

<style lang="scss" scoped>
  .section {
    height: 850px;
    background-color: #0f1a1c;
  }

  .section-screenshots-container {
    height: 850px;
    background-color: #0f1a1c;
    padding: 100px;
  }

</style>