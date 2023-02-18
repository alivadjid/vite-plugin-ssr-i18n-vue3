export { onBeforeRoute };

import { extractLocale } from "../locales/extractLocale";

async function onBeforeRoute(pageContext: { urlOriginal: string }) {
  let urlMod = pageContext.urlOriginal;
  const { urlWithoutLocale, locale } = await extractLocale(urlMod);
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
