<script setup lang="ts">
// classSecond 第二個課程介紹
import whitebtn from '@/components/at-ui/whiteBtn.vue';
</script>

<template lang="pug">
#classSecond
  div(class="bg-primarycolor py-20 xl:pb-32 xl:pt-36")
    div(class="container mx-auto")
      p(class="mb-2 text-center text-[18px] text-white xl:mb-9 xl:text-4xl") 台灣唯一官方認證單位
      p(class="text-center text-[26px] text-white xl:text-6xl") AntiGravity® Taiwan
      div(class="mt-20 xl:mb-12")
      div(class="mx-auto flex w-[82%] justify-between xl:mx-0 xl:w-full xl:justify-center xl:gap-40")
        whitebtn
          a(href="＃") 私教課程
        whitebtn
          a(href="＃") 企業包班

</template>

<style lang="scss" scoped>
// 佈局

</style>
