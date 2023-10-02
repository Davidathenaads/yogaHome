<script setup lang="ts">
// postVue 三篇文章👈
import postStr from '@/components/page/home/postStr';
import postBox from '@/components/page/home/postBox.vue';
import whiteBtn from '@/components/at-ui/whiteBtn.vue';
</script>

<template lang="pug">
#postVue
  div(class="container mx-auto flex w-[90%] pt-[60px]")
    div(class=" mx-auto xl:mx-5 xl:grid xl:grid-cols-3 xl:justify-center xl:gap-9 xl:pt-32")
      div(class="mx-4")
        postBox(:img="postStr.img1" :title="postStr.title1" :text="postStr.text1")
      div(class="mx-4")
        postBox(:img="postStr.img2" :title="postStr.title2" :text="postStr.text2")
      div(class="mx-4")
        postBox(:img="postStr.img3" :title="postStr.title3" :text="postStr.text3")
  div(class="mb-20 mt-5 flex justify-center xl:mb-0 xl:mt-[100px] xl:pb-28")
      whiteBtn
        a(href="https://www.flyhighyoga.com.tw/press") MORE
</template>

<style lang="scss" scoped>
// 佈局

</style>
