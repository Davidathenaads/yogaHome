<script setup lang="ts">

// home 首頁
import banner from '@/components/page/home/banner.vue';
import bannerMenu from '@/components/page/home/bannerMenu.vue';
</script>

<template lang="pug">
#home
  div
    banner
    bannerMenu

</template>

<style lang="scss" scoped>
// 佈局
#home {
  width: 100%;
}

</style>
