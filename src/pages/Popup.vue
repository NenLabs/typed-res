<script lang="ts" setup>
import Browser from 'webextension-polyfill';

Browser.devtools.panels.create("TypedRes",
    "icon/16.png",
    "src/popup.html",
);
</script>

<template>
  <div class="h-screen w-full">
    <div class="p-5">
      <img src="/icon-with-shadow.svg" />
      <h1 class="">TypedRes</h1>
      <p>Template: <code>vue-ts</code> <code>tailwindcss</code></p>
    </div>
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

body {
  background-color: rgb(36, 36, 36);
}

img {
  width: 200px;
  height: 200px;
}
</style>
