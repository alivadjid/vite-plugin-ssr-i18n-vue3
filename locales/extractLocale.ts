import { locales, localeDefault, Locale } from "./locales";

export function extractLocale(url: string) {
  const urlPaths = url.split("/");

  let locale;
  let urlWithoutLocale;
  // We remove the URL locale, for example `/de-DE/about` => `/about`
  const firstPath = urlPaths[1] as Locale;
  if (
    locales
      .filter((locale) => locale !== localeDefault.value)
      .includes(firstPath)
  ) {
    // locale = firstPath;
    locale = "de-DE";

    urlWithoutLocale = "/" + urlPaths.slice(2).join("/");
  } else {
    locale = localeDefault.value;
    urlWithoutLocale = url;
  }
  return { locale, urlWithoutLocale };
}
