<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar/>
  <main class="p-12">
    <RouterView/>
  </main>
</template>

<style scoped>

</style>
