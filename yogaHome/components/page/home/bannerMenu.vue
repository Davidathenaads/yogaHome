<script setup lang="ts">
// bannerMenu 放在banner底下的選單
</script>

<template lang="pug">
#bannerMenuVue
  div(class="container mx-auto flex w-[96%] flex-wrap items-center justify-center border-b-2 border-primarycolor py-6 xl:flex xl:flex-nowrap")
    div(class="flex w-1/2 justify-start px-4")
      div(class="flex items-center justify-start")
        img(src="@/assets/img/member.png" alt="" class="w-4 xl:w-10")
        div(class="ml-2")
          p(class="text-sm text-white") 體驗課程<br>Trial Class
    div(class="flex w-1/2 justify-start px-4")
      div(class="flex items-center justify-start")
        img(src="@/assets/img/booking.png" alt="" class="w-4 xl:w-10")
        div(class="ml-2")
          p(class="text-sm text-white") 課程介紹<br>Course <br>Introduction
    div(class="flex w-1/2 justify-start px-4")
      div(class="flex items-center justify-start")
        img(src="@/assets/img/offer.png" alt="" class="w-4 xl:w-10")
        div(class="ml-2")
          p(class="text-sm text-white") 優惠訊息<br>Discount
    div(class="flex w-1/2 justify-start px-4")
      div(class="flex items-center justify-start")
        img(src="@/assets/img/member-only.png" alt="" class="w-4 xl:w-10")
        div(class="ml-2")
          p(class="text-sm text-white") 會員專區<br>Ｍember Only
</template>

<style lang="scss" scoped>
// 佈局

</style>
