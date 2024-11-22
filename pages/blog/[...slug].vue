<template>
  <Article>
      <ContentDoc :path="docPath" />
  </Article>
</template>

<script setup>
  import Article from "/pages/blog/components/article.vue";

  const route = useRoute();
  const slug = route.params.slug;
  const docPath = `${slug}`;
</script>

<style lang="scss">

</style>
