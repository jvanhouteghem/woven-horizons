<template>
  <div class="section-background">

    <div class="youtube-iframe-container">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SnI6Q-7AIEw?si=UuGXk4veYoqE8fF7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <logo :styles="{transform: 'scale(1)'}"/>

  </div>
</template>

<script setup>
  import Logo from "/pages/home/components/logo/logo.vue";
</script>

<style lang="scss" scoped>

  .section-background {
    height: 100%;
    background: url('/images/bg2.png') no-repeat center center fixed;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    .youtube-iframe-container {
      width: 80%;
      height: 85%;
      margin-bottom: 20px;
      // border: 3px inset gray;
      padding: 10px;
      background-color: black;
    }

  }

</style>