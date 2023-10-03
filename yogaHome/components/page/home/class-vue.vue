<script setup lang="ts">
// ClassVue 課程介紹
import WhiteBtn from '@/components/at-ui/white-btn.vue';
import ClassCard from '@/components/page/home/class-card.vue';
import classStr from '@/components/page/home/classStr';
// 資料 --------------------------------------------------------------------------------------------
// const props = defineProps({}); const val = computed(() => {}); definePageMeta({})

// 接收事件 -----------------------------------------------------------------------------------------

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
#classVue
    div(class="pt-[60px] xl:mt-[120px]")
      div(class="container mx-auto pb-20")
        h2(class="mb-2 text-center text-[28px] font-medium text-white xl:mb-4 xl:text-4xl") 三大授課結構
        p(class="text-center text-sm font-light text-white opacity-50") TEACHING STRUCTURE

        div(class="flex flex-col xl:flex xl:flex-row xl:justify-center")
          ClassCard(
            class="xl:w-1/3"
            :color="classStr.classCardLeft.value"
            :title="classStr.titleLeft.value"
            :title-sec="classStr.titleSecLeft.value"
            :text="classStr.textLeft.value"
            :text-sec="classStr.textSecLeft.value"
            )
          ClassCard(
            class="xl:w-1/3"
            :color="classStr.classCardRight.value"
            :title="classStr.titleRight.value"
            :title-sec="classStr.titleSecRight.value"
            :text="classStr.textRight.value"
            :text-sec="classStr.textSecRight.value"
            )
        div(class="mx-[5%] mb-0 mt-5 xl:mb-16 xl:mt-36")
          div(class="flex justify-between xl:justify-center xl:gap-20")
            WhiteBtn
              a(href="＃") 師資介紹
            WhiteBtn
              a(href="＃") 據點介紹
</template>

<style lang="scss" scoped>
// 佈局
</style>
