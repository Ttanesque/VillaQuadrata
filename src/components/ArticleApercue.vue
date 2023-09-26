<template>
  <article>
    <img class="float-left" :src="article.enclosure.url" />
    <header class="flex flex-col w-6/12">
      <h3 class="mr-2">{{ article.title }}</h3>
      <div>
          <span v-if="article.author || article.pubdate" class="font-light mr-2">{{ article.author }}{{ article.pubdate }}</span>
          <div
            v-for="tag in article.category"
            class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
          >
          {{ tag }}
          </div>
      </div>
    </header>
    <p class="truncate">{{ article.description }}</p>
  </article>
</template>
<script>
export default {
  props: {
    article: Object,
  },
};
</script>
