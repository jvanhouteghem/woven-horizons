<template>
  <div>
    <Article v-for="(item, index) in content" :key="index">
      <ContentDoc :path="item" />
    </Article>
  </div>
</template>

<script setup>
import Article from "/pages/blog/components/article.vue";
import { CONTENT_FILES } from "/pages/blog/models/content-config.model.ts";

const content = CONTENT_FILES;
</script>

<style lang="scss">

</style>
