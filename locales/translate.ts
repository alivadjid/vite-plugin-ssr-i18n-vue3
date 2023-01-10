import { translations } from "./translations";
import { Locale, localeDefault } from "./locales";

export function translate(text: string, locale: Locale) {
  if (locale === localeDefault.value) {
    return text;
  }

  const textTranslations = translations[text];
  if (!textTranslations) {
    throw new Error("No translation found for: `" + text + "`");
  }
  return textTranslations[locale];
}
