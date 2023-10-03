<script setup lang="ts">

// home 首頁
import banner from '@/components/page/home/banner.vue';
import BannerMenu from '@/components/page/home/banner-menu.vue';
import PostVue from '@/components/page/home/post-vue.vue';
import BannerSecond from '@/components/page/home/banner-second.vue';
import ClassVue from '@/components/page/home/class-vue.vue';
import BannerThird from '@/components/page/home/banner-third.vue';
import ClassSecond from '@/components/page/home/class-second.vue';
import FormVue from '@/components/page/home/form.vue';
</script>

<template lang="pug">
#home
  div
    banner
    BannerMenu
    PostVue
    BannerSecond
    ClassVue
    BannerThird
    ClassSecond
    FormVue

</template>

<style lang="scss" scoped>
// 佈局
#home {
  width: 100%;
}

</style>
