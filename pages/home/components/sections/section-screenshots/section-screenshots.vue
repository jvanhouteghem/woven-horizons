<template>

  <div class="section-screenshots">
    <div class="screenshot-title">
      Unveil the shattered truth.
    </div>
    <div class="screenshot-paragraph">
      Unveil the shattered truth.
    </div>
    <img class="screenshot-img" src="/images/Animation.gif" />
  </div>

</template>

<script>

</script>

<style lang="scss">

  .section-screenshots {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    gap: 25px;

    .screenshot-title {
      color: white;
      font-size: 80px;
      font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-weight: bold;
      text-transform: uppercase;
    }

    .screenshot-paragraph {
      font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      display: flex;
      text-align: justify;
      color: white;
    }

    .screenshot-img {
      width: 60vw;
    }
  }

</style>