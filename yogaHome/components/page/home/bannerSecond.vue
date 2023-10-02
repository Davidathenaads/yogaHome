<script setup lang="ts">
// bannerSecond 第二張banner👈
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
#bannerSecond
  div(class="relative h-60 bg-[url('@/assets/img/home-banner-1.jpg')] bg-cover bg-fixed xl:h-[560px]")
    div(ref="elementToCheck" class="absolute left-[10%] top-1/2 -translate-y-1/2")
      div(:class="{'animate-anileft': isScroll}")
        p(class="text-[26px] text-white xl:text-5xl") My Yoga Life
        p(class="mb-9 text-sm text-white xl:mb-10 xl:text-3xl") 將瑜伽融入生活，隨時來場身體探險。
        redbtn(class="flex justify-start")
          a(href="＃") 關於我們
</template>

<style lang="scss" scoped>
// 佈局
.open{
  left: 0 !important;
  transition: all 0.3s ease 0;
}
</style>
