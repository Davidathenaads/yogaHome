<script setup lang="ts">
// Header
import { Close } from '@element-plus/icons-vue';
/** 控制是否打開手機版選單 */
const isOpen = ref<boolean>(false);
/** 控制瑜珈研習子選單開關的變數 */
const isSeminars = ref<boolean>(false);
const isCourse = ref<boolean>(false);
const isCelebrating = ref<boolean>(false);
const isTraining = ref<boolean>(false);
const isSpecial = ref<boolean>(false);
/** mobile */
const isIntroduction = ref<boolean>(false);
// 資料 --------------------------------------------------------------------------------------------
// const props = defineProps({}); const val = computed(() => {}); definePageMeta({})

// 接收事件 -----------------------------------------------------------------------------------------
/** 當手機版選單打開時讓後面螢幕無法滑動 關閉時回復原狀 */
const Mobilebtnclick = (isScrollOpen:boolean) => {
  isOpen.value = !isOpen.value;
  const html = document.querySelector<HTMLHtmlElement>('html');
  if (isScrollOpen) {
    if (html) {
      html.style.overflow = 'hidden';
    }
    return true;
  }
  html?.style.removeProperty('overflow');
};

/** 控制瑜珈研習子選單開關的函式 */
const ClickSeminars = () => {
  isSeminars.value = !isSeminars.value;
};
const ClickCourse = () => {
  isCourse.value = !isCourse.value;
};
const ClickCelebrating = () => {
  isCelebrating.value = !isCelebrating.value;
};
const ClickTraining = () => {
  isTraining.value = !isTraining.value;
};
const ClickSpecial = () => {
  isSpecial.value = !isSpecial.value;
};
/** mobile */
const ClickIntroduction = () => {
  isIntroduction.value = !isIntroduction.value;
};
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
#Header
  header
    div(name="mobilemenu z-10 fixed w-[100vw] h-[100vh]")
      div(class="fixed left-[-100%] top-0 z-10 m-0 h-[100vh] w-full overflow-y-auto bg-brown p-0  transition-all delay-0 duration-300" :class="{open: isOpen}")
        div(class="absolute right-5 top-9")
          el-icon(:size="50" color="#fff" class="z-20" @click="Mobilebtnclick(false)")
            Close

        ul(class="mb-4 pb-10 pt-[10px] text-white")
          li(class="")
            div(class="block w-full  py-[10px] pl-5 text-base" @click="ClickIntroduction") 品牌介紹 Introduction
            div(v-show="isIntroduction" class=" border-t border-white")
              ul
                li(class="")
                  NuxtLink(class="block border-b border-white py-3 pl-10 text-sm") FLY HIGH YOGA
                li(class="")
                  NuxtLink(class="block border-b border-white py-3 pl-10 text-sm") FLY HIGH YOGA
                li(class="")
                  NuxtLink(class="block border-b border-white py-3 pl-10 text-sm") FLY HIGH YOGA
          li(class="m-5 py-2 text-sm") 官方訊息 News
          li(class="m-5 py-2 text-sm") 課程資訊 Course Info.
          li(class="m-5 py-2 text-sm") 師資認證 Teacher Training
          li(class="m-5 py-2 text-sm") 據點介紹 Location
          li(class="m-5 py-2 text-sm") 報名資訊 Activity

    div(class="my-5 flex items-center justify-around text-white xl:flex")
      div(class=" relative h-4 w-5 justify-start sm:hidden" @click="Mobilebtnclick(true)")
        span(class="absolute left-0 block h-[1px] w-full rounded-[9px] bg-white opacity-100")
        span(class="absolute left-0 top-[6px] block h-[1px] w-full rounded-[9px] bg-white opacity-100")
        span(class="absolute left-0 top-3 block h-[1px] w-full rounded-[9px] bg-white opacity-100")
      NuxtLink(to="/" class=" flex select-none items-center xl:flex")
        img(src="@/assets/img/logo.svg" alt="" class="h-8 xl:h-10")
        span(class="ml-5")
          p(class="hidden xl:block") AntiGravity® Taiwan
      ul(class="hidden items-center justify-around xl:flex")
        li(class="dropdown p-5 text-sm")
          label(class="cursor-pointer ") 品牌介紹
            div(class="dropdown-menu absolute z-20 ml-7 hidden pt-12 text-sm")
              ul(class=" -mt-1  mb-0 min-w-[220px]  pl-0")
                li(class=" hover:opacity-80")
                  NuxtLink(to="/intro/aboutus" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3]  bg-[#F09491] px-4 pb-3 pt-[10px]") FLY HIGH YOGA
                li(class=" hover:opacity-80")
                  NuxtLink(to="/intro/antigravity-fitness" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") AntiGravity® Fitness
                li(class=" hover:opacity-80")
                  NuxtLink(to="/activity/vip-active" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") ACTIVE™
        li(class="dropdown p-5 text-sm")
          label(class="cursor-pointer ") 官方訊息
            div(class="dropdown-menu absolute z-20 ml-7 hidden pt-12 text-sm")
              ul(class=" -mt-1  mb-0 min-w-[220px] pl-0")
                li(class=" hover:opacity-80")
                  NuxtLink(to="/press/list/news" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 官方訊息
                    span News
                li(class=" hover:opacity-80")
                  NuxtLink(to="/press/list/special-offers" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 優惠訊息
                    span SPECIAL OFFER
                li(class=" hover:opacity-80")
                  NuxtLink(to="/press/list/activity" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 課程分享
                    span Class Highlights
                li(class=" hover:opacity-80")
                  NuxtLink(to="/press/list/hall-info" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 特別活動
                    span Special Events
                li(class=" hover:opacity-80")
                  NuxtLink(to="/press/list/blog" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 部落格
                    span Blog
        li(class="dropdown p-5 text-sm")
          label(class="cursor-pointer ") 課程資訊
            div(class="dropdown-menu absolute z-20 ml-7 hidden pt-12 text-sm")
              ul(class=" -mt-1  mb-0   pl-0")
                li(class=" hover:opacity-80" @click="ClickSeminars")
                  a(href="#" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491]  px-4 pb-3 pt-[10px]") 瑜珈研習
                    span Seminars
                ul(v-show="isSeminars" class="pl-5")
                  li(class=" hover:opacity-80")
                    a(href="#" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#e84860] px-4 pb-3 pt-[10px]") 專班
                      span Special Course
                  li(class=" hover:opacity-80")
                    a(href="#" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#e84860] px-4 pb-3 pt-[10px]") 工作坊(籌備中)
                      span Workshop
                li(class=" hover:opacity-80" @click="ClickCourse")
                  a(href="#" class="inline-block min-w-[220px]  border-b  border-solid border-[#f0c4c3] bg-[#F09491]  px-4 pb-3 pt-[10px]") 瑜珈課程
                    span General Course
                ul(v-show="isCourse" class="pl-5")
                  li(class=" hover:opacity-80")
                    NuxtLink(to="/product/list/general/antiGravity-course" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#e84860] px-4 pb-3 pt-[10px]") 反重力課程
                      span AntiGravity® Fitness
                  li(class=" hover:opacity-80")
                    NuxtLink(to="/product/list/general/yoga" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#f9cda6] px-4 pb-3 pt-[10px]") 大地課程
                      span Yoga
                li(class=" hover:opacity-80")
                  NuxtLink(to="/product/list/private/" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 瑜珈私教
                    span PRIVATE COURSE
                li(class=" hover:opacity-80")
                  NuxtLink(to="/product/list/business/" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 瑜珈包班
                    span BUSINESS COURSE
                li(class=" hover:opacity-80")
                  NuxtLink(to="/teacher" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 瑜珈師資
                    span Teachers
                li(class=" hover:opacity-80")
                  NuxtLink(to="/schedule" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 瑜珈課程表
                    span Class Schedule
                li(class=" hover:opacity-80")
                  NuxtLink(to="/activity/vip-active" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 健身私教
        li(class="dropdown p-5 text-sm")
          label(class="cursor-pointer ") 據點介紹
            div(class="dropdown-menu absolute z-20 ml-7 hidden pt-12 text-sm")
              ul(class=" -mt-1  mb-0 min-w-[220px]  pl-0")
                li(class=" hover:opacity-80")
                  NuxtLink(to="/location/Central/Chong-De" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 台中崇德館
                    span Chong-De
                li(class=" hover:opacity-80")
                  NuxtLink(to="/location/Central/Chong-De2" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 台中崇德尊爵館
                    span Chong-De2
                li(class=" hover:opacity-80")
                  NuxtLink(to="/location/southern/Chong-Shan" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 台南崇善館
                    span Chong-Shan
                li(class=" hover:opacity-80")
                  NuxtLink(to="/location/Central/Ching-Cheng" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 台中精誠館
                    span Ching-Cheng
                li(class=" hover:opacity-80")
                  NuxtLink(to="/location/Central/He-Nan" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 台中河南館
                    span He-Nan
                li(class=" hover:opacity-80")
                  NuxtLink(to="/location/Central/Li-Ming" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 台中黎明館
                    span Li-Ming
                li(class=" hover:opacity-80")
                  NuxtLink(to="/location/Central/Yi-Jhong" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 台中一中館
                    span Yi-Jhong
        li(class="dropdown p-5 text-sm")
          label(class="cursor-pointer ") 師資認證
            div(class="dropdown-menu absolute z-20 ml-7 hidden pt-12 text-sm")
              ul(class=" -mt-1  mb-0 min-w-[220px]  pl-0")
                li(class=" hover:opacity-80")
                  NuxtLink(to="/coach-training/ag-coach-training" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 反重力空中培訓
                    span AG® Trainings
                li(class=" hover:opacity-80")
                  a(href="#" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 瑜珈師資培訓
                    span Yoga Teacher Trainings
        li(class="dropdown p-5 text-sm")
          label(class="cursor-pointer ") 報名資訊
            div(class="dropdown-menu absolute z-20 ml-7 hidden pt-12 text-sm")
              ul(class=" -mt-1  mb-0 min-w-[220px]  pl-0")
                li(class=" hover:opacity-80")
                  a(href="#" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 限時優惠
                li(class=" hover:opacity-80" @click="ClickCelebrating")
                  a(href="#" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 新館歡慶
                ul(v-show="isCelebrating" class="pl-5")
                  li(class=" hover:opacity-80")
                    NuxtLink(to="/forms/opower/reservation" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#e84860] px-4 pb-3 pt-[10px]") O'Power  Fitness 健身私人教練預約
                li(class=" hover:opacity-80" @click="ClickTraining")
                  a(href="#" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 師資培訓
                ul(v-show="isTraining" class="pl-5")
                  li(class=" hover:opacity-80")
                    NuxtLink(to="/forms/AgCoachTraining01" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#e84860] px-4 pb-3 pt-[10px]") 【AntiGravity®】Fundamentals 反重力體適能基礎 1+2 &amp; 培訓說明會
                  li(class=" hover:opacity-80")
                    NuxtLink(to="/forms/AgCoachTraining02" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#e84860] px-4 pb-3 pt-[10px]") 【AntiGravity®】Advanced Trainings進階培訓
                li(class=" hover:opacity-80")
                  a(href="#" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 會員活動
                li(class=" hover:opacity-80" @click="ClickSpecial")
                  a(href="#" class="inline-block  min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 特別活動
                ul(v-show="isSpecial" class="pl-5")
                  li(class=" hover:opacity-80")
                    NuxtLink(to="/forms/AgCoachTraining04" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#e84860] px-4 pb-3 pt-[10px]") AntiGravity®師資培訓：分享說明會

        li(class="dropdown p-5 text-sm")
          label(class="cursor-pointer ") 聯絡我們
            div(class="dropdown-menu absolute z-20 ml-7 hidden pt-12 text-sm")
              ul(class=" -mt-1  mb-0 min-w-[220px]  pl-0")
                li(class=" hover:opacity-80")
                  NuxtLink(to="/business" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 企業合作方案
                    span Business cooperation
                li(class=" hover:opacity-80")
                  NuxtLink(to="/recruit" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px] ") 徵才資訊
                    span Recruit
                li(class=" hover:opacity-80")
                  NuxtLink(to="/contact" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 聯絡資訊
                    span Contact Information
                li(class=" hover:opacity-80")
                  NuxtLink(to="/survey/survey-student-satisfaction" class="inline-block w-full min-w-[220px] max-w-[360px] border-b border-solid border-[#f0c4c3] bg-[#F09491] px-4 pb-3 pt-[10px]") 學生滿意度問卷
                    span Student Satisfaction Survey
      button(class="rounded-s-sm border-2 px-2 py-1 text-xs") 會員登入

</template>

<style lang="scss" scoped>

/** 控制子選單hover打開 */
  .dropdown:hover .dropdown-menu {
    display: block;
  }

/** 控制選單開關的動畫 主要用動態class實現 */
  .open{
  left: 0 !important;
  transition: all 0.3s ease 0;
}

</style>
