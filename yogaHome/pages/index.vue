<script setup lang="ts">

// home 首頁
import banner from '@/components/page/home/banner.vue';
import bannerMenu from '@/components/page/home/bannerMenu.vue';
import postVue from '@/components/page/home/postVue.vue';
import bannerSecond from '@/components/page/home/bannerSecond.vue';
import classVue from '@/components/page/home/classVue.vue';
import bannerThird from '@/components/page/home/bannerThird.vue';
import classSecond from '@/components/page/home/classSecond.vue';
import formVue from '@/components/page/home/form.vue';
</script>

<template lang="pug">
#home
  div
    banner
    bannerMenu
    postVue
    bannerSecond
    classVue
    bannerThird
    classSecond
    formVue

</template>

<style lang="scss" scoped>
// 佈局
#home {
  width: 100%;
}

</style>
