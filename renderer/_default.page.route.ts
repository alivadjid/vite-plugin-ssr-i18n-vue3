export { onBeforeRoute };

import { extractLocale } from "../locales/extractLocale";

function onBeforeRoute(pageContext: { urlOriginal: string }) {
  console.log("pageContext", pageContext.urlOriginal);
  let urlMod = pageContext.urlOriginal;
  console.log("urlMod", urlMod);
  console.log("extractLocale", extractLocale(urlMod));
  const { urlWithoutLocale, locale } = extractLocale(urlMod);
  urlMod = urlWithoutLocale;
  return {
    pageContext: {
      // We make `locale` available as `pageContext.locale`.
      // We then use https://vite-plugin-ssr.com/pageContext-anywhere
      // to access `pageContext.locale` in any React/Vue component.
      locale,
      // We overwrite the original URL
      urlOriginal: urlMod,
    },
  };
}
