<template>
  <button type="button" @click="($event) => state.count++">
    Counter {{ state.count }}
  </button>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import LocaleText from "../../renderer/LocaleText.vue";
const state = reactive({ count: 0 });
</script>
