<template>

  <div class="section">
    <SectionLanding></SectionLanding>
  </div>

  <!-- dialogs -->
  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.dialogs.containerStyles" :imgStyles="props.dialogs.imgStyles" :title="props.dialogs.title" :subTitle="props.dialogs.subTitle" :imgSrc="props.dialogs.imgSrc" />
  </div>

  <!-- fight -->
  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.fight.containerStyles" :imgStyles="props.fight.imgStyles" :title="props.fight.title" :subTitle="props.fight.subTitle" :imgSrc="props.fight.imgSrc" />
  </div>

  <!-- city -->
  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.cityWalk.containerStyles" :imgStyles="props.cityWalk.imgStyles" :title="props.cityWalk.title" :subTitle="props.cityWalk.subTitle" :imgSrc="props.cityWalk.imgSrc" />
  </div>

  <!-- rogue -->
  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.roguePath.containerStyles" :imgStyles="props.roguePath.imgStyles" :title="props.roguePath.title" :subTitle="props.roguePath.subTitle" :imgSrc="props.roguePath.imgSrc" />
  </div>

  <!-- and more -->
<!--  <div class="section-more-screenshots">
    <SectionScreenShot :containerStyles="props.roguePath.containerStyles" :imgStyles="props.roguePath.imgStyles" :title="props.roguePath.title" :subTitle="props.roguePath.subTitle" :imgSrc="props.roguePath.imgSrc" />
  </div>-->

</template>

<script setup>
  import SectionLanding from "/pages/home/components/sections/section-landing/section-landing.vue";
  import SectionScreenShot from "/pages/home/components/sections/section-screenshots/section-screenshots.vue";

  // #041f2b
  // #001724
  const props = {
    dialogs: {
      title: 'Recruit your Ultimate Team',
      subTitle: `Step into a roguelite where every encounter matters. Engage in meaningful dialogues, unlock cinematic moments, and recruit a diverse cast of characters to join your adventure. Your choices shape your team and your destiny: forge powerful bonds, face epic battles, and uncover the secrets of a world full of surprises. Will you rise to the challenge and create your legend?`,
      imgSrc: '/images/animation-dialog.webp',
      containerStyles: {
        backgroundColor: '#0d181a',
        padding: '85px 0;'
      }
    },
    fight: {
      title: 'Strategy Above All',
      subTitle: `In this turn-based combat mode, there's no room for improvisation. Each turn is a puzzle where every decision matters. Analyze the situation, plan your moves, and exploit your enemies' weaknesses with precise tactics. Master the strategy to lead your team to victory!`,
      imgSrc: '/images/animation-fight.webp',
      imgStyles: {
        border: '15px solid white',
        maxHeight: '60vh',
      },
      containerStyles: {
        background: 'url("/images/bg-forest-blurred.webp") no-repeat center center',
        backgroundSize: '100% 100%',
        padding: '185px 0'
      }
    },
    cityWalk: {
      title: 'Clairval: The Lost Village',
      subTitle: 'Explore a lively town, a forgotten crossroads of destinies, inhabited by NPCs with deep stories, merchants offering rare artifacts, and mysterious events that reshape your journey with every playthrough.',
      imgSrc: '/images/animation-city-walk.webp',
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
      title: 'At the Crossroads of Choices',
      subTitle: 'Battle, encounter, mini-game, or reward? Each path holds an opportunity... or a danger. Your destiny lies in your hands.',
      imgSrc: '/images/animation-rogue-path.webp',
      imgStyles: {
        border: '15px solid white',
        maxHeight: '60vh',
      },
      containerStyles: {
        background: 'url("/images/bg-ruins-blurred.webp") no-repeat center center',
        backgroundSize: '100% 100%',
        padding: '185px 0'
      }
    },
  }

</script>

<style lang="scss" scoped>
  .section {
    height: 850px;
  }

  .section-screenshots-container {

  }

</style>