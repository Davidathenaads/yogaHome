<script setup lang="ts">
// banner banner
</script>

<template lang="pug">
#banner
  div(class="relative h-[calc(100vh-80px)] bg-[url('@/assets/img/slide-1.jpg')] bg-cover bg-fixed bg-top bg-no-repeat xl:h-[100vh]")
    div(class="absolute left-[10%] top-1/4 animate-anileft")
      p(class="text-lg text-white xl:text-4xl") the Perfect Place
      p(class="mb-20 mt-[10px] text-3xl font-medium leading-9 tracking-widest text-white xl:text-7xl")
       |From Beginner
       br
       |to Master
      p(class="mb-16 text-lg text-white xl:text-4xl") 從初學到成為專精者的好地方。
      a(
        href="#"
        class="bg-secondary-100 py-3 pl-12 pr-10 tracking-wider text-white"
      ) 預約體驗
</template>

<style lang="scss" scoped>
// 佈局
</style>
