<template>
  <span>{{ slotText }}</span>
</template>

<script setup lang="ts">
import { inject, computed, useSlots } from "vue";

import { translate } from "../locales/translate";
import { localeDefault, Locale } from "../locales/locales";

const pageContext = inject("pageContext");

const slots = useSlots();

const slotText = computed(() => {
  if (!slots.default) return;

  const text = slots.default()[0].children; // This is the interesting line
  const localizedText = textLocalized(`${text}`);
  return localizedText;
});

function textLocalized(text: string) {
  const { locale } = pageContext as { locale: Locale };
  // const text = children
  return translate(text, locale);
}

// function LocaleText({ children }) {
//   // const pageContext = usePageContext()
//   const { locale } = pageContext
//   const text = children
//   const textLocalized = translate(text, locale)
//   return <>{textLocalized}</>
// }
</script>

<style></style>
