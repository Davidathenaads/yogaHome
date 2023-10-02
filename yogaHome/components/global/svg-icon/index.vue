<script setup lang="ts">
// SvgIcon 請填寫功能描述👈
const props = defineProps({
  // icon name 不用加 rise_
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  size: {
    type: String,
    default: '20'
  }
});

const svgName = computed(() => {
  return props.name.includes('/') ? `#${props.name}` : `#/${props.name}`;
});

const svgSize = computed(() => {
  return `${props.size}px`;
});

</script>

<template lang="pug">
svg#SvgIcon(aria-hidden="true")
  use(:href="svgName" :fill="props.color")
</template>

<style lang="scss" scoped>
// 佈局
#SvgIcon {
  width: v-bind(svgSize);
  height: v-bind(svgSize);

  &:focus {
    outline: none !important;
  }
}

</style>
