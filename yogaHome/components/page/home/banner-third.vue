<script setup lang="ts">
// bannerThird 第三個banner👈
import RedBtn from '@/components/at-ui/red-btn.vue';
const elementToCheck = ref<any>();
const isScroll = ref<boolean>(false);
// 資料 --------------------------------------------------------------------------------------------
// const props = defineProps({}); const val = computed(() => {}); definePageMeta({})

// 接收事件 -----------------------------------------------------------------------------------------

// 流程 --------------------------------------------------------------------------------------------

// 函式 --------------------------------------------------------------------------------------------
const CheckVisibility = () => {
  const element = elementToCheck.value;
  const windowHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  if (elementTop < windowHeight) {
    isScroll.value = true;
  }

  if (isScroll.value === true) {
    window.removeEventListener('scroll', CheckVisibility);
  }
};
// Api ---------------------------------------------------------------------------------------------

// 生命週期 -----------------------------------------------------------------------------------------
// onMounted useAsnycData
onMounted(() => {
  window.addEventListener('scroll', CheckVisibility);
});
// 對外事件 -----------------------------------------------------------------------------------------
// const emit = defineEmits(["update:modelValue","on-change"]);

// Ref 輸出 ----------------------------------------------------------------------------------------
// defineExpose({ ... })

</script>

<template lang="pug">
#bannerThird
  div(class="relative h-60 bg-[url('@/assets/img/home-banner-3.jpeg')] bg-cover bg-fixed xl:h-[560px]")
    div(ref="elementToCheck" class="absolute left-[10%] top-1/2 -translate-y-1/2 xl:left-[unset] xl:right-[10%]")
      div(:class="{'animate-aniright': isScroll}")
        p(class="text-[26px] text-white xl:text-5xl") AntiGravity® Fitness
        p(class=" mb-9 text-sm text-white xl:mb-10 xl:text-3xl") NASM AFAA YA 唯一世界認證空中系統
        RedBtn(class="flex justify-start")
          a(href="＃") 了解更多
</template>

<style lang="scss" scoped>
// 佈局

</style>
