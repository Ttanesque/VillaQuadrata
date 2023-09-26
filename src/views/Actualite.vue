<template>
  <div
    v-if="isLoading === null"
    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status"
  >
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span
    >
  </div>
  <div class="w-full">
    <h1>Les dernières actualités.</h1>
    <ul>
      <li v-for="article in articles">
        <ArticleApercue :article="article" />
      </li>
    </ul>
  </div>
</template>

<script>
import ArticleApercue from "@/components/ArticleApercue.vue";
import * as µ from "@/utils/utils.js";

export default {
  data() {
    return {
      articles: [],
      isLoading: true,
    };
  },
  methods: {
    fetchData() {
      fetch("articles.rss")
        .then((data) => data.text())
        .then((data) => {
          this.articles = µ.parseRss(data);
          this.isLoading = false;
        })
        .catch((err) => {
          this.rss = `error ${err}`;
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
  components: { ArticleApercue },
};
</script>
