<script setup lang="ts">
// layout
import headerLayout from '@/components/layout/headerLayout.vue';
import footerLayout from '@/components/layout/footerLayout.vue';
</script>

<template lang="pug">
#layout
  headerLayout
  NuxtPage
  footerLayout
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
