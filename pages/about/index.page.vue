<template>
  <div>
    <h3><LocaleText>About</LocaleText></h3>
    <LocaleText>Demo app using</LocaleText> <code>vite-plugin-ssr</code>.
  </div>
</template>

<script setup lang="ts">
import LocaleText from "../../renderer/LocaleText.vue";
</script>

<style>
code {
  font-family: monospace;
  background-color: #eaeaea;
  padding: 3px 5px;
  border-radius: 4px;
}
</style>
