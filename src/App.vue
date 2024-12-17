<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <MainHeader></MainHeader>
  <RouterView />
  <Footer></Footer>
</template>

<style lang="scss">
@import './assets/style/style.scss';
</style>
