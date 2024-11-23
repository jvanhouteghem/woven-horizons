<template>
  <div>
    <!-- ℹ️ accessibility (inform that a new navigation has taken place) -->
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <!--  ℹ️ auto generate views from /pages  -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>