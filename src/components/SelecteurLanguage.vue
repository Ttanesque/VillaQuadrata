<template>
  <div class="flex justify-end place-items-center">
    <select class="" :value="$i18n.locale" @input="switchLanguage($event)">
      <option v-for="locale in locales" :key="`locale-${locale}`" :value="locale">
        {{ getFlagEmoji($t("language." + locale)) }} - {{ $t("language.nom." + locale) }}
      </option>
    </select>
  </div>
</template>
<script>
import { getFlagEmoji } from "@/utils/utils";
import { SUPPORT_LOCALES, loadLocaleMessages } from "@/i18n";

export default {
  data() {
    return {
      locales: SUPPORT_LOCALES,
    };
  },
  methods: {
    getFlagEmoji,
    async switchLanguage(event) {
      const newLocale = event.target.value;
      if (!this.$i18n.availableLocales.includes(newLocale)) {
        await loadLocaleMessages(this.$i18n, newLocale);
      }
      this.$i18n.locale = newLocale;
      console.log(this.$root.$i18n);
    }
  },
};
</script>
