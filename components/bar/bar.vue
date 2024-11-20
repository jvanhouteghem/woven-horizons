<template>
  <div>
    <div class="bar-header">
      <slot name="header"></slot> <!-- Slot nommé pour le header -->
    </div>
    <div class="bar-body">
      <slot></slot> <!-- Slot par défaut -->
    </div>
  </div>
</template>

<script setup>
// Aucun code ici pour le moment, mais tu peux gérer des propriétés ou des méthodes si nécessaire
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
