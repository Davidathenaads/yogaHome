<script setup lang="ts">
// BannerSecond 第二張banner👈

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
#BannerSecond
  div(class="relative h-60 bg-[url('@/assets/img/home-banner-1.jpg')] bg-cover bg-fixed xl:h-[560px]")
    div(ref="elementToCheck" class="absolute left-[10%] top-1/2 -translate-y-1/2")
      div(:class="{'animate-anileft': isScroll}")
        p(class="text-[26px] text-white xl:text-5xl") My Yoga Life
        p(class="mb-9 text-sm text-white xl:mb-10 xl:text-3xl") 將瑜伽融入生活，隨時來場身體探險。
        RedBtn(class="flex justify-start")
          a(href="＃") 關於我們
</template>

<style lang="scss" scoped>
// 佈局
.open{
  left: 0 !important;
  transition: all 0.3s ease 0;
}
</style>
