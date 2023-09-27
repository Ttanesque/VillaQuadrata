<template>
  <div>
    <select 
      :value="$i18n.locale"
      @input="$i18n.locale = $event.target.value"
    >
      <option
        v-for="locale in locales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ getFlagEmoji($t("language." + locale)) }} - {{ $t("language.nom." + locale) }}
      </option>
    </select>
  </div>
</template>
<script>
import { getFlagEmoji } from "@/utils/utils";
import { SUPPORT_LOCALES, loadLocaleMessages} from "@/i18n";

export default {
  data() {
    return {
      locales: SUPPORT_LOCALES,
    };
  },
  methods: {
    getFlagEmoji,
  },
};
</script>
