<script setup>
import SelecteurLanguage from '@/components/SelecteurLanguage.vue';
</script>

<template>
  <nav class="w-full max-h-14 sticky top-0 flex overflow-visible">
    <img src="@/assets/blason.svg" class="w-20 h-24" />
    <ul class="w-11/12 list-none grid grid-flow-col grid-rows-1">
      <router-link
        class="flex flex-col justify-center hover:bg-gray-500 hover:text-white"
        to="/"
      >
        <li>
          <h2 class="flex justify-center">{{ $t("navigation.acceuil") }}</h2>
        </li>
      </router-link>
      <router-link
        class="flex flex-col justify-center hover:bg-gray-500 hover:text-white"
        to="/actuality"
      >
        <li>
          <h2 class="flex justify-center">{{ $t("navigation.actualite") }}</h2>
        </li>
      </router-link>
      <SelecteurLanguage/>
    </ul>
  </nav>
</template>
