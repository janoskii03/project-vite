<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <input type="checkbox" name="menu" id="menu-switch">
  <header class="main-header">
    <div class="container">

   
    <a to="/">
      <div class="main-logo">
        <img src='@/assets/images/logo.png' alt="seesea-logo" />
      </div>
    </a>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">最新消息</RouterLink>
        <RouterLink to="/about">常見問題</RouterLink>
        <RouterLink to="/about">關於我們</RouterLink>
        <RouterLink to="/about">周邊景點</RouterLink>
        <RouterLink to="/about">房型介紹</RouterLink>
        <RouterLink to="/about">線上訂房</RouterLink>

        <label class="hb" for="menu-switch">
      <span></span>
      <span></span>
      <span></span>
    </label>

      </nav>
    </div>
  </header>
</template>