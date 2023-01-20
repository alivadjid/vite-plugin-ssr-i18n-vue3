<template>
  {{ props.href }}
  <a
    :class="[
      pageContext.urlPathname === '/' && props.href ? '' : $style.active,
      $style.link,
    ]"
    @click.stop="goTo"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from "vue";
import { Locale, localeDefault, locales } from "../locales/locales";

const { usePageContext } = await import("./usePageContext");
const pageContext = usePageContext();

const attrs = useAttrs();
// const locale: Locale = (attrs.locale as Locale) || pageContext.locale;
const props = defineProps<{
  href?: "about" | "movies";
  locale?: Locale;
}>();
function goTo() {
  const href = props.href !== undefined ? `/${props.href}` : "";
  let locale = props.locale !== undefined ? `/${props.locale}` : "";

  const pathName = window.location.pathname;
  const pathLocale = pathName.split("/")[1];
  const isLocaleInclude = locales.includes(pathLocale);

  if (isLocaleInclude && props.locale !== pathLocale) locale = `/${pathLocale}`;

  window.location.href = `${window.location.origin}${locale}${href}`;
}

// const href = computed(() => {
//   if (Object.keys(attrs).includes("href")) {
//     if (locale === localeDefault.value) {
//       return `${attrs.href}`;
//     }
//     return `/${locale}${attrs.href}`;
//   } else if (locale !== localeDefault.value) {
//     return `/${locale}/`;
//   } else {
//     return "/";
//   }
// });
</script>

<!-- <script setup lang="ts">
import { h } from "vue";
import { useRender } from "./useRender";
import { computed, useAttrs } from "vue";
import { Locale, localeDefault } from "../locales/locales";
const { usePageContext } = await import("./usePageContext");

const attrs = useAttrs();

const pageContext = usePageContext();
const locale: Locale = (attrs.locale as Locale) || pageContext.locale;

useRender(() =>
  // h("a", { class: { active: pageContext.urlPathname === attrs.href } }, [])
  h(
    "a",
    { class: { active: pageContext.urlPathname === attrs.href } },
    {
      default: () => "default slot",
    }
  )
);
</script> -->

<style module lang="scss">
.link {
  cursor: pointer;
}
.active {
  color: blue;
  padding: 3px 10px;
}
</style>
