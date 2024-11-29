<template>

  <div class="section">
    <SectionLanding></SectionLanding>
  </div>

  <!-- dialogs -->
  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.dialogs.containerStyles" :imgStyles="props.dialogs.imgStyles" :title="$t('landing.dialogs.title')" :subTitle="$t('landing.dialogs.subTitle')" :imgSrc="props.dialogs.imgSrc" />
  </div>

  <!-- fight -->
  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.fight.containerStyles" :imgStyles="props.fight.imgStyles" :title="$t('landing.fight.title')" :subTitle="$t('landing.fight.subTitle')" :imgSrc="props.fight.imgSrc" />
  </div>

  <!-- city -->
  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.cityWalk.containerStyles" :imgStyles="props.cityWalk.imgStyles" :title="$t('landing.cityWalk.title')" :subTitle="$t('landing.cityWalk.subTitle')" :imgSrc="props.cityWalk.imgSrc" />
  </div>

  <!-- rogue -->
  <div class="section-screenshots-container">
    <SectionScreenShot :containerStyles="props.roguePath.containerStyles" :imgStyles="props.roguePath.imgStyles" :title="$t('landing.roguePath.title')" :subTitle="$t('landing.roguePath.subTitle')" :imgSrc="props.roguePath.imgSrc" />
  </div>

  <!-- and more -->
  <div class="section-more-screenshots">
    <SectionScreenshots :containerStyles="props.andMore.containerStyles" :imgStyles="props.andMore.imgStyles" :title="$t('landing.andMore.title')" :more="$t('landing.andMore.more')" :subTitle="$t('landing.andMore.subtitle')" :imgSrc="props.andMore.imgSrc" />
  </div>

</template>

<script setup>
  import SectionLanding from "/pages/home/components/sections/section-landing/section-landing.vue";
  import SectionScreenShot from "/pages/home/components/sections/section-screenshot/section-screenshots.vue";
  import SectionScreenshots from "/pages/home/components/sections/section-screenshots/section-screenshots.vue";

  // #041f2b
  // #001724
  const props = {
    dialogs: {
      imgSrc: '/images/animation-dialog.webp',
      containerStyles: {
        backgroundColor: '#0d181a',
        padding: '85px 0;'
      }
    },
    fight: {
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
    andMore: {
        containerStyles: {
          backgroundColor: '#0d181a',
          padding: '85px 0;'
        }
    }
  }

</script>

<style lang="scss" scoped>
  .section {
    height: 850px;
  }

  .section-screenshots-container {

  }

  .section-more-screenshots {
    margin: 0 0 150px 0;
  }

</style>