<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <MainHeader></MainHeader>
  <RouterView />
  <Footer></Footer>
</template>
