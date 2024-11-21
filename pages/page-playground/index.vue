<template>

  <div>
    hello home
  </div>

  <Foo>
    foo slot
  </Foo>

  <!-- ℹ️ bar is auto-imported because it is stored in global /components -->
  <Bar>
    <template v-slot:header>
      <h1>Bar Header slot</h1>
    </template>

    <!-- rest is in default <slot> -->
    <p>Bar default slot</p>
  </Bar>

  <Hcf>
    <template v-slot:header>
      <h1>hcf slot</h1>
    </template>
  </Hcf>

</template>

<script setup>
  import Foo from './components/foo.vue';
  import Hcf from "./layouts/hcf/hcf.vue";
</script>

<style scoped>

</style>