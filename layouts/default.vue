<template>

  <div class="layout-default">

    <div class="layout-default-header">

      <div class="header">
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
      overflow: auto;
      height: calc(100vh - $header-height);
    }
  }

</style>