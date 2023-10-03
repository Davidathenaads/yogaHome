<script setup lang="ts">
// layout
import HeaderLayout from '@/components/layout/header-layout.vue';
import FooterLayout from '@/components/layout/footer-layout.vue';
</script>

<template lang="pug">
#layout
  HeaderLayout
  NuxtPage
  FooterLayout
</template>

<style lang="scss">
body {
  background-color: #F09491;
}

// 佈局
#layout {
  max-width: 100vw;
  min-height: 100vh;
}

</style>
