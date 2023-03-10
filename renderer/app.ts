import { createSSRApp, defineComponent, h, Suspense } from "vue";
import PageShell from "./PageShell.vue";
import { setPageContext } from "./usePageContext";
import type { PageContext } from "./types";

export { createApp };

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;

  const PageWithLayout = defineComponent({
    render() {
      return h(
        Suspense,
        {},
        {
          default() {
            return h(
              PageShell,
              {},
              {
                default() {
                  return h(Page, pageProps || {});
                },
              }
            );
          },
        }
      );
    },
  });

  const app = createSSRApp(PageWithLayout);

  app.provide("pageContext", pageContext);

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext);

  return app;
}
