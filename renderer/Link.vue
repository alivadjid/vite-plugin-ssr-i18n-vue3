<template>
  <a :class="{ active: pageContext.urlPathname === $attrs.href }" :href="href">
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from "vue";
import { Locale, localeDefault } from "../locales/locales";

const { usePageContext } = await import("./usePageContext");
const pageContext = usePageContext();

const attrs = useAttrs();
const locale: Locale = (attrs.locale as Locale) || pageContext.locale;

const href = computed(() => {
  if (Object.keys(attrs).includes("href")) {
    if (locale === localeDefault.value) {
      return `${attrs.href}`;
    }
    return `/${locale}${attrs.href}`;
  } else if (locale !== localeDefault.value) {
    return `/${locale}/`;
  } else {
    return "/";
  }
});
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

<style scoped>
a {
  padding: 3px 10px;
}
a.active {
  background-color: #eee;
}
</style>
