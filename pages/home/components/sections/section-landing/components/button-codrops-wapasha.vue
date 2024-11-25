<template>
  <div class="button-base button button--wapasha">
    GET STARTED
  </div>
</template>

<script>

</script>

<style lang="scss">

  .button-base {

    font-weight: bold;
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 17px;

    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 100%;
    line-height: normal;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
    float: left;
    min-width: 150px;
    max-width: 250px;
    display: block;
    padding: 1em 2em;
    border: none;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    border-color: black;
    background: #292929; // #37474f;
    color: #fff;
    transition: background-color 0.3s, color 0.3s;
  }

  .button.button--wapasha {
    background: #37474f;
    color: #fff;
    -webkit-transition: background-color 0.3s, color 0.3s;
    transition: background-color 0.3s, color 0.3s;
  }
  /*.button--wapasha.button--inverted {
    background: red;
    color: #37474f;
  }*/
  .button--wapasha::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid #3f51b5;
    z-index: -1;
    border-radius: inherit;
    opacity: 0;
    -webkit-transform: scale3d(0.6, 0.6, 1);
    transform: scale3d(0.6, 0.6, 1);
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  .button--wapasha.button--inverted::before {
    border-color: #7986cb;
  }
  .button--wapasha:hover {
    background-color: #282828;
    color: white;
  }
  /*.button--wapasha.button--inverted:hover {
    background-color: #37474f;
    color: #7986cb;
  }*/
  .button--wapasha:hover::before {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }

</style>