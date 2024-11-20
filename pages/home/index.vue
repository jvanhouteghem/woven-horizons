<template>

  <div>
    hello home
  </div>

  <Foo></Foo>

  <!-- ℹ️ bar is auto-imported because it is stored in global /components -->
  <Bar></Bar>

</template>

<script setup>
  import Foo from './components/foo.vue';
</script>

<style scoped>

</style>