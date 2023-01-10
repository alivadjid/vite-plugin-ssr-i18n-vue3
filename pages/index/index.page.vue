<template>
  <div v-for="locale in locales" :key="locale">
    <Link :locale="locale">{{ locale }}</Link>
  </div>

  <h1><LocaleText>Welcome</LocaleText></h1>

  <LocaleText>This page is</LocaleText>:
  <ul>
    <li>
      <LocaleText>Rendered to HTML</LocaleText>
    </li>

    <li><LocaleText>Interactive</LocaleText>. <Counter /></li>
  </ul>
  <!-- {{ pageContext.locale ?? pageContext.locale }} -->
</template>

<script lang="ts" setup>
import { locales } from "../../locales/locales";
import LocaleText from "../../renderer/LocaleText.vue";
import Link from "../../renderer/Link.vue";

import Counter from "./Counter.vue";
import { inject } from "vue";
// const pageContext = inject("pageContext");
</script>
