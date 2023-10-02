<script setup lang="ts">
// about 請填寫功能描述👈
useSeoMeta({
  title: 'about - Nuxt3 高效入門全攻略',
  description: '關於我們 - 最棒的Nuxt3的線上課程',
  ogDescription: '關於我們 - 最棒的Nuxt3的線上課程',
  ogTitle: 'about - Nuxt3 高效入門全攻略',
  ogImage: '',
  twitterCard: 'summary_large_image',
  twitterSite: '',
  twitterCreator: ''
});

const storeDemoObj = StoreDemo();
</script>

<template lang="pug">
#About
  p about
  p {{ storeDemoObj.count }}
  p {{ storeDemoObj.doubleCount }}
  el-button(type="primary" @click="storeDemoObj.Add") bbb

  global-demo
  nuxt-link(to="/") main
</template>
