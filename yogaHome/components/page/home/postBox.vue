<script setup lang="ts">
// postbox 文章box
import redbtn from '@/components/at-ui/redBtn.vue';

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

</script>

<template lang="pug">
#postBox
  div(class="mb-[60px] flex flex-col justify-center xl:mb-0")
    img(:src="props.img" alt="" class="")
    p(class="mt-6 text-center text-xs font-light text-white opacity-50") SPECIAL OFFER
    div(class="xl:my-5 xl:border-b-2 xl:pb-5")
      p(class="my-[10px] text-center text-xl font-medium text-white xl:mt-6 ") {{ props.title }}
    div
      pre(class="whitespace-pre-wrap text-center text-white") {{ props.text }}
    redbtn 繼續閱讀
</template>

<style lang="scss" scoped>
// 佈局
</style>
