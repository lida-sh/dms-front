<template>
  <div>
    <NuxtLayout>
       <NuxtPage></NuxtPage>
    </NuxtLayout>
    <app-toast></app-toast>
  </div>
</template>
<script setup lang="ts">
console.log(`Node.js version: ${process.version}`);
</script>
