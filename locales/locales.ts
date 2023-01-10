import { ref } from "vue";
export const locales = ["en-US", "de-DE", "fr-FR"] as const;
export const localeDefault = ref<Locale>(locales[0]);

export type Locale = typeof locales[number];

export function setLocale(locale: Locale) {
  localeDefault.value = locale;
}
