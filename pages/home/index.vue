<template>

  <div class="section">
    <SectionLanding></SectionLanding>
  </div>

  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.dialogs.containerStyles" :imgStyles="props.dialogs.imgStyles" :title="props.dialogs.title" :subTitle="props.dialogs.subTitle" :imgSrc="props.dialogs.imgSrc" />
  </div>

  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.fight.containerStyles" :imgStyles="props.fight.imgStyles" :title="props.fight.title" :subTitle="props.fight.subTitle" :imgSrc="props.fight.imgSrc" />
  </div>

  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.cityWalk.containerStyles" :imgStyles="props.cityWalk.imgStyles" :title="props.cityWalk.title" :subTitle="props.cityWalk.subTitle" :imgSrc="props.cityWalk.imgSrc" />
  </div>

  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.roguePath.containerStyles" :imgStyles="props.roguePath.imgStyles" :title="props.roguePath.title" :subTitle="props.roguePath.subTitle" :imgSrc="props.roguePath.imgSrc" />
  </div>

  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.dialogs.containerStyles" :imgStyles="props.dialogs.imgStyles" :title="props.dialogs.title" :subTitle="props.dialogs.subTitle" :imgSrc="props.dialogs.imgSrc" />
  </div>

</template>

<script setup>
  import SectionLanding from "/pages/home/components/sections/section-landing/section-landing.vue";
  import SectionScreenShot from "/pages/home/components/sections/section-screenshots/section-screenshots.vue";

  // #041f2b
  // #001724
  const props = {
    dialogs: {
      title: 'Unveil the shattered truth.',
      subTitle: 'Dragged into a fractured reality, you face relentless trials in a rogue-lite adventure where every run shapes your legend. Battle otherworldly forces, adapt, and rise—or be lost to the echoes of a crumbling world.',
      imgSrc: '/images/Animation.gif',
      containerStyles: {
        backgroundColor: '#0d181a',
        padding: '0 0 85px 0'
      }
    },
    fight: {
      title: 'Unveil the shattered truth.',
      subTitle: 'Dragged into a fractured reality, you face relentless trials in a rogue-lite adventure where every run shapes your legend. Battle otherworldly forces, adapt, and rise—or be lost to the echoes of a crumbling world.',
      imgSrc: '/images/animation-fight.gif',
      imgStyles: {
        border: '15px solid white',
        maxHeight: '60vh',
      },
      containerStyles: {
        background: 'url("/images/bg.png") no-repeat center center',
        backgroundSize: '100% 100%',
        padding: '185px 0'
      }
    },
    cityWalk: {
      title: 'Unveil the shattered truth.',
      subTitle: 'Dragged into a fractured reality, you face relentless trials in a rogue-lite adventure where every run shapes your legend. Battle otherworldly forces, adapt, and rise—or be lost to the echoes of a crumbling world.',
      imgSrc: '/images/animation-city-walk.gif',
      imgStyles: {
        border: '15px solid white',
        maxHeight: '60vh',
      },
      containerStyles: {
        backgroundColor: '#001724',
        padding: '0 0 85px 0'
      }
    },
    roguePath: {
      title: 'Unveil the shattered truth.',
      subTitle: 'Dragged into a fractured reality, you face relentless trials in a rogue-lite adventure where every run shapes your legend. Battle otherworldly forces, adapt, and rise—or be lost to the echoes of a crumbling world.',
      imgSrc: '/images/animation-rogue-path.gif',
      imgStyles: {
        border: '15px solid white',
        maxHeight: '60vh',
      },
      containerStyles: {
        background: 'url("/images/bg23.png") no-repeat center center',
        backgroundSize: '100% 100%',
        padding: '185px 0'
      }
    },
  }

</script>

<style lang="scss" scoped>
  .section {
    height: 850px;
    overflow: auto;
  }

  .section-screenshots-container {
    overflow: auto;
  }

</style>