<script setup lang="ts">
// bannerThird 第三個banner👈
import redbtn from '@/components/at-ui/redBtn.vue';
const elementToCheck = ref();
const isScroll = ref(false);
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

onMounted(() => {
  window.addEventListener('scroll', CheckVisibility);
});
</script>

<template lang="pug">
#bannerThird
  div(class="relative h-60 bg-[url('@/assets/img/home-banner-3.jpeg')] bg-cover bg-fixed xl:h-[560px]")
    div(ref="elementToCheck" class="absolute left-[10%] top-1/2 -translate-y-1/2 xl:left-[unset] xl:right-[10%]")
      div(:class="{'animate-aniright': isScroll}")
        p(class="text-[26px] text-white xl:text-5xl") AntiGravity® Fitness
        p(class=" mb-9 text-sm text-white xl:mb-10 xl:text-3xl") NASM AFAA YA 唯一世界認證空中系統
        redbtn(class="flex justify-start")
          a(href="＃") 了解更多
</template>

<style lang="scss" scoped>
// 佈局

</style>
