<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue'
import LeftBar from '@/components/LeftBar.vue'
</script>

<template>
  <NavBar/>
  <main class="flex">
    <LeftBar/>
    <div class="w-3/4 place-content-center">
      <RouterView/>
    </div>
  </main>
</template>

<style scoped>

</style>
