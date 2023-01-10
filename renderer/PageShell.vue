<template>
  <Suspense>
    <div class="layout">
      <div class="navigation">
        <Link class="logo">
          <img src="./logo.svg" height="64" width="64" alt="logo" />
        </Link>

        <Link>Home</Link>

        <Link href="about">About</Link>

        <Link href="movies">Movies</Link>
      </div>
      <div class="content"><slot /></div>
    </div>
  </Suspense>
</template>

<script lang="ts" setup>
import Link from "./Link.vue";
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>

<style scoped>
.layout {
  display: flex;
  max-width: 900px;
  margin: auto;
}
.content {
  padding: 20px;
  border-left: 2px solid #eee;
  padding-bottom: 50px;
  min-height: 100vh;
}
.navigation {
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8em;
}
.logo {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
