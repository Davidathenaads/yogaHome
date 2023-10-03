<script setup lang="ts">
// Postbox 文章box 主要被post-vue引入
import RedBtn from '@/components/at-ui/red-btn.vue';
// 資料 --------------------------------------------------------------------------------------------
// const props = defineProps({}); const val = computed(() => {}); definePageMeta({})
const props = defineProps({
  img: {
    type: String,
    default: '_nuxt/assets/img/img1.jpeg'
  },
  title: {
    type: String,
    default: 'title'
  },
  text: {
    type: String,
    default: 'text'
  }
});
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
#PostBox
  div(class="mb-[60px] flex flex-col justify-center xl:mb-0")
    img(:src="props.img" alt="" class="")
    p(class="mt-6 text-center text-xs font-light text-white opacity-50") SPECIAL OFFER
    div(class="xl:my-5 xl:border-b-2 xl:pb-5")
      p(class="my-[10px] text-center text-xl font-medium text-white xl:mt-6 ") {{ props.title }}
    div
      pre(class="whitespace-pre-wrap text-center text-white") {{ props.text }}
    RedBtn 繼續閱讀
</template>

<style lang="scss" scoped>
// 佈局
</style>
