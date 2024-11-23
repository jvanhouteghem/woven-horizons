<template>

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

</template>

<script setup>

</script>

<style lang="scss" scoped>

  .layout-default-header {

    // todo component
    .header {
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
          line-height: 50px;
        }
      }
      .social-links {
        flex: 2;
      }
    }

  }

  .layout-default-content {
    /*background: url('/images/bg2.png') no-repeat center center fixed;
    background-size: cover;
    min-height: calc(90vh - 50px);*/
  }

</style>