<template>
  <div>
    <!-- Utilisation de <ContentDoc /> pour afficher le document dynamique -->
    <ContentDoc :path="docPath" />
  </div>
</template>

<script setup>
const route = useRoute()
// Récupérer le slug depuis l'URL dynamique
const slug = route.params.slug

// Construire le chemin dynamique du document en fonction du slug
const docPath = `${slug}`
</script>
