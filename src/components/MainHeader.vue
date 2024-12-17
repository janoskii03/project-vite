<script>
import { RouterLink, useRoute } from 'vue-router'
import { watch } from 'vue';
export default {
  setup() {
    const route = useRoute()


    watch(route, () => {
      window.scrollTo(0, 0
      );
    })

    return {

    }

  }
}


</script>

<template>
  <input type="checkbox" name="menu" id="menu-switch">
  <header class="main-header">
    <div class="container">
      <RouterLink to="/">
        <div class="main-logo">
          <img src='@/assets/images/logo.png' alt="seesea-logo" />
        </div>
      </RouterLink>
      <nav class="main-header-nav">
        <RouterLink to="/news">最新消息</RouterLink>
        <RouterLink to="/q&a">常見問題</RouterLink>
        <RouterLink to="/about">關於我們</RouterLink>
        <RouterLink to="/tour">周邊景點</RouterLink>
        <RouterLink to="/room">房型介紹</RouterLink>
        <RouterLink to="/online">線上訂房</RouterLink>

        <label class="hb" for="menu-switch">
          <span></span>
          <span></span>
          <span></span>
        </label>

      </nav>
    </div>
  </header>
</template>