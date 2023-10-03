<script setup lang="ts">
// PostVue 三篇文章👈
import postStr from '@/components/page/home/postStr';
import PostBox from '@/components/page/home/post-box.vue';
import WhiteBtn from '@/components/at-ui/white-btn.vue';
// 資料 --------------------------------------------------------------------------------------------
// const props = defineProps({}); const val = computed(() => {}); definePageMeta({})

// 接收事件 -----------------------------------------------------------------------------------------

// 流程 --------------------------------------------------------------------------------------------

// 函式 --------------------------------------------------------------------------------------------

// Api ---------------------------------------------------------------------------------------------

// 生命週期 -----------------------------------------------------------------------------------------
// onMounted useAsnycData

// 對外事件 -----------------------------------------------------------------------------------------
// const emit = defineEmits(["update:modelValue","on-change"]);

// Ref 輸出 ----------------------------------------------------------------------------------------
// defineExpose({ ... })
</script>

<template lang="pug">
#PostVue
  div(class="container mx-auto flex w-[90%] pt-[60px]")
    div(class=" mx-auto xl:mx-5 xl:grid xl:grid-cols-3 xl:justify-center xl:gap-9 xl:pt-32")
      div(class="mx-4")
        PostBox(:img="postStr.img1" :title="postStr.title1" :text="postStr.text1")
      div(class="mx-4")
        PostBox(:img="postStr.img2" :title="postStr.title2" :text="postStr.text2")
      div(class="mx-4")
        PostBox(:img="postStr.img3" :title="postStr.title3" :text="postStr.text3")
  div(class="mb-20 mt-5 flex justify-center xl:mb-0 xl:mt-[100px] xl:pb-28")
      WhiteBtn
        a(href="https://www.flyhighyoga.com.tw/press") MORE
</template>

<style lang="scss" scoped>
// 佈局

</style>
