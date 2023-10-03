<script setup lang="ts">
// form 表單👈
import whitebtn from '@/components/at-ui/whiteBtn.vue';
// import formStr from '@/components/formStr';
const radio = ref('');
const hobbits = ref(['一週兩次以上', '一週一次', '無']);
const hobbitsvalue = ref('');
const location = ref(['台中市中區',
  '台中市東區',
  '台中市西區',
  '台中市南區',
  '台中市北區',
  '台中市西屯區',
  '台中市南屯區',
  '台中市北屯區、潭子區',
  '台中市大雅區、太平區',
  '台中市其他區域', '彰化縣市',
  '台南市',
  '其他縣市']);
const locationvalue = ref('');
const store = ref([
  'Fly High Yoga崇德尊爵館　台中市北屯區梅川東路五段131號2樓',
  'Fly High Yoga崇德旗艦館　台中市北屯區崇德路三段599號3樓',
  'Fly High Yoga精誠館　台中市西屯區精誠路72號2樓',
  'Fly High Yoga黎明館　台中市南屯區干城街328號2樓之1',
  'Fly High Yoga河南館　台中市西屯區河南路二段317號',
  'Fly High Yoga一中館　台中市北區太平路17號3樓',
  'Fly High Yoga崇善館　台南市東區崇善路435號1樓 ',
  'Active 健身私教 精誠館　台中市西屯區精誠路72號B1',
  'Active 健身私教 崇德館　台中市北屯區崇德路三段599號3樓',
  'O\'Power崇德尊爵館　台中市北屯區梅川東路五段131號3樓']);

const suject = ref(['一對一健身私人教練課 諮詢體驗(60分鐘) $600', '完整填妥表格，我們將由專人處理 並會在24H內回覆您並確認訂課，請您耐心等待']);
const sujectvalue = ref('');

</script>

<template lang="pug">
#form
  div(class="pt-[60px] xl:pt-28")
    div(class="container mx-auto px-4")
      div(class="mb-2 text-center text-[28px] font-medium text-white xl:mb-4 xl:text-4xl") 預約體驗
      div(class="mb-14 text-center text-sm font-normal text-white opacity-50") RESERVATION
  div(class="container mx-auto w-[90%] p-4 xl:w-[750px]")
    div(class="flex justify-center")
      div(class="")
        p(class="mb-5 mt-10 flex justify-start text-xs text-white").
          標記<span class="text-red">*</span>為必填項目

    div(class="flex flex-col items-center justify-center")
      div(class=" mb-9 w-full")
        p(class="mb-2 flex justify-start text-base text-white") 姓名
          span(class="text-red") *
        input(type="text" placeholder="" class="w-full bg-secondary-400 px-4 py-2 text-white")
      div(class=" mb-9 w-full")
        p(class="mb-2 flex justify-start text-base text-white") 電話
          span(class="text-red") *
        input(type="text" placeholder="" class="w-full bg-secondary-400 px-4 py-2")
      div(class=" mb-9 w-full")
        p(class="mb-2 flex justify-start text-base text-white") E-mail
        span(class="text-red") *
        input(type="text" placeholder="" class="w-full bg-secondary-400 px-4 py-2")
      div(class=" mb-9 w-full")
        p(class="mb-2 flex justify-start text-base text-white") 運動習慣
          span(class="text-red") *
        select(v-model="hobbitsvalue" type="text" placeholder="" class="w-full bg-secondary-400 px-4 py-2 text-white")
          option(disabled value="")
          option(v-for="item in hobbits" :key="item" :value="item") {{ item }}

      div(class=" mb-9 w-full")
        p(class="mb-2 flex justify-start text-base text-white") 居住區域
          span(class="text-red") *
        select(v-model="locationvalue" type="text" placeholder="" class="w-full bg-secondary-400 px-4 py-2 text-white")
          option(disabled value="")
          option(v-for="item in location" :key="item" :value="item") {{ item }}
    div(class="flex justify-start")
      div(class="")
        p(class="mt-10 flex justify-start text-base text-white") 欲預約館別
          span(class="text-red") *
    div(class="mb-9")
      el-radio-group(v-model="radio" class="break-all")
        p {{ radio }}
        pre(class="flex flex-col justify-center break-all")
          el-radio(v-for="item in store" :key="item" :label="item" class="mt-6 break-all xl:mt-1")
            p(class="whitespace-normal break-all") {{ item }}

    div(class="flex justify-center")
      div(class="")
        div(class=" mb-9")
          p(class="mb-2 flex justify-start text-base text-white") 欲體驗科目
            span(class="text-red") *
          select(v-model="locationvalue" type="text" placeholder="" class="w-full bg-secondary-400 px-4 py-2 text-white")
            option(disabled value="") 請選擇
            option(v-for="item in suject" :key="item" :value="item" :v-model="sujectvalue") {{ item }}
        div(class=" mb-9")
          p(class="mb-2 flex justify-start text-base text-white") 優惠碼
          input(type="text" placeholder="" class="w-full bg-secondary-400 px-4 py-2")
        div(class="my-[60px] text-center text-[22px] text-white") 完整填妥表格，我們將由專人處理 並會在24H內回覆您並確認訂課，請您耐心等待
        div(class="mt-12 flex-wrap justify-center bg-secondary-300 pb-4 pt-8 xl:grid xl:grid-cols-6")
          div(class="px-3")
            a(href="#" class="mb-5 flex justify-center rounded bg-primary-400 p-2")
              img(src="@/assets/img/line-outline.png" alt="" class="w-6")
              p(class="text-white") 崇德館
          div(class="px-3")
            a(href="#" class="mb-5 flex justify-center rounded bg-primary-400 p-2")
              img(src="@/assets/img/line-outline.png" alt="" class="w-6")
              p(class="text-white") 精誠館
          div(class="px-3")
            a(href="#" class="mb-5 flex justify-center rounded bg-primary-400 p-2")
              img(src="@/assets/img/line-outline.png" alt="" class="w-6")
              p(class="text-white") 黎明館
          div(class="px-3")
            a(href="#" class="mb-5 flex justify-center rounded bg-primary-400 p-2")
              img(src="@/assets/img/line-outline.png" alt="" class="w-6")
              p(class="text-white") 河南館
          div(class="px-3")
            a(href="#" class="mb-5 flex justify-center rounded bg-primary-400 p-2")
              img(src="@/assets/img/line-outline.png" alt="" class="w-6")
              p(class="text-white") 一中館
          div(class="px-3")
            a(href="#" class="mb-5 flex justify-center rounded bg-primary-400 p-2")
              img(src="@/assets/img/line-outline.png" alt="" class="w-6")
              p(class="text-white") 崇善館
  div(class="mb-0 mt-[60px] pb-20 xl:mb-[168px] xl:mt-20")
    div(class="flex justify-center gap-40")
      whitebtn
        a(href="＃") 送出預約
</template>

<style lang="scss" scoped>
// 佈局

</style>
