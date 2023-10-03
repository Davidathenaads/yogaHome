<script setup lang="ts">
// classCard 課程卡片組件
import whitebtn from '@/components/at-ui/whiteBtn.vue';
const props = defineProps({
  title: {
    type: String,
    default: '反重力課程'
  },
  titleSec: {
    type: String,
    default: 'AntiGravity® Fitness'
  },
  text: {
    type: String,
    default: '感受空中伸展的'
  },
  textSec: {
    type: String,
    default: '藝術之美。'
  },
  color: {
    type: String,
    default: 'bg-primary-200'
  }
});
</script>

<template lang="pug">
#classCard
  .class-card(class="mx-[5%] mb-5 xl:mb-5 xl:px-5")
    div(class="rounded-2xl p-6 xl:px-10 xl:pb-16 xl:pt-12" :class="props.color")
      div
        div(class="flex items-center xl:block")
          p(class="text-sm font-bold text-white xl:text-xl") {{ props.title }}
          p(class="ml-1 text-xs text-white xl:ml-0") {{ props.titleSec }}
        div(class="mb-9 mt-3 text-[20px] tracking-widest text-white xl:my-14 xl:flex xl:flex-col xl:text-3xl") {{ props.text }}
          span {{ props.textSec }}
        div
          div(class="flex")
            whitebtn
              a(href="＃") 一般課程
</template>

<style lang="scss" scoped>
// 佈局

</style>
