<template>
  <a
    :class="
      pageContext.urlPathname === props.href
        ? $style.navActive
        : $style.navElement
    "
    :href="href"
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
  href?: "/about" | "/movies" | "/";
  locale?: Locale;
}>();

const isEnPropsLocale = props.locale === "en-US";

const href = computed(() => {
  if (pageContext.urlPathname !== "/" && props.locale)
    return `${isEnPropsLocale ? "" : `/${props.locale}`}${
      pageContext.urlPathname
    }`;
  if (pageContext.locale !== "en-US" && props.href)
    return `/${pageContext.locale}${props.href}`;
  if (props.href) return `${props.href}`;
  return isEnPropsLocale ? "/" : `/${props.locale}`;
});
</script>

<style module lang="scss">
.link {
  cursor: pointer;
}
.active {
  color: blue;
  padding: 3px 10px;
}
</style>
