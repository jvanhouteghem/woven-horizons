<template>

  <div class="layout-default">

    <div class="layout-default-header">

      <div class="header">
        <div class="page-title">
          <div class="page-title-label">Woven Horizons</div>
          <!-- <img class="page-title-img" src="/images/sword-small.png" />-->
        </div>
        <div class="inner-links">
          <div v-for="link in ['Home', 'Blog', 'FAQ']" class="link">
            {{link}}
          </div>
        </div>

        <div class="social-links">

        </div>
      </div>

    </div>
    <div class="layout-default-content">
      <slot></slot>
    </div>

  </div>


</template>

<script setup>

</script>

<style lang="scss" scoped>

  $header-height: 50px;

  .layout-default {

    .layout-default-header {

      // todo component
      .header {
        background-color: #282828;
        color: white;

        display: flex;

        padding: 0 35px;

        .page-title {
          display: flex;
          align-items: center;
          width: 250px;

          .page-title-label {
            font-family: 'antihero';
            font-size: 18px;
            position: absolute;
            z-index: 1;
            $outline: 2px;
            $outline-color: black;
            text-shadow: -$outline -$outline 0 $outline-color, $outline -$outline 0 $outline-color, -$outline $outline 0 $outline-color, $outline $outline 0 $outline-color;
          }

          .page-title-img {
            /*height: 158px;
            position: absolute;
            top: -21px;
            rotate: -47deg;*/
            /*height: 68px;
            position: absolute;
            top: -2px;
            rotate: 42deg;
            left: 113px;*/
            height: 61px;
            position: absolute;
            top: 1px;
            rotate: 1deg;
            left: 124px;
          }
        }

        .inner-links {
          display: flex;
          justify-content: space-around;
          flex: 1;
          .link {
            font-family: 'Open Sans', sans-serif;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 17px;
            list-style: none;
            height: $header-height;

            display: flex;
            align-items: center;
          }
        }
        .social-links {
          flex: 2;
        }
      }

    }

    .layout-default-content {

    }
  }

</style>