<template>
  <div>
    <div class="bar-header">
      <slot name="header"></slot>
    </div>
    <div class="bar-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.bar-header {
  font-weight: bold;
  color: blue;
}

.bar-body {
  margin-top: 10px;
}
</style>
