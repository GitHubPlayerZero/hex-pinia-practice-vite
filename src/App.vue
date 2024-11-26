<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="nav mt-2">
    <div class="container">
      <RouterLink to="/">Home</RouterLink>｜ <RouterLink to="/about">About</RouterLink>｜
      <RouterLink to="/about-composition">About (Composition)</RouterLink>｜
      <RouterLink to="/sweet-options">甜點購物（Options API）</RouterLink>｜
      <RouterLink to="/sweet-composition">甜點購物（Composition API）</RouterLink>｜
    </div>
  </nav>

  <hr class="hr mb-4" />

  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss">
// Bootstrap
@use 'bootstrap/dist/css/bootstrap';

// Font Awesome
$fa-font-path: '/node_modules/@fortawesome/fontawesome-free/webfonts';
// @import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
// @import '@fortawesome/fontawesome-free/scss/solid.scss';
@use '@fortawesome/fontawesome-free/scss/fontawesome';
// 需要在使用到的樣式設定變數配置
@use '@fortawesome/fontawesome-free/scss/solid' with (
  $fa-font-path: $fa-font-path
);
</style>

<style lang="scss" scoped>
.nav a {
  display: inline-block;
  padding-top: 8px;
  padding-bottom: 16px;

  &:hover {
    color: red;
    background-color: yellow;
  }

  &:not(:first-child) {
    padding-left: 8px;
  }
  &:not(:last-child) {
    padding-right: 8px;
  }
}

.hr {
  margin-top: 0;
}
</style>
