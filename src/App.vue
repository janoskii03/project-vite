<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue';
import Footer from '@/components/Footer.vue';
import Map from '@/components/Map/Map.vue';

</script>

<template>
  <MainHeader></MainHeader>
  <RouterView />
  <Map></Map>
  <Footer></Footer>
</template>

<style lang="scss">
@import './assets/style/style.scss';
</style>
