<template>
  <div v-for="movie in pageContext?.pageProps.movies">
    <h4>{{ movie.title }}</h4>
    <p>{{ movie.release_date }}</p>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
interface Movie {
  title: string;
  release_date: string;
}
const pageContext = inject<{ pageProps: { movies: Movie[] } }>("pageContext");
</script>

<style></style>
