<script setup lang="ts">
// error 頁面
const props = defineProps({
  error: {
    type: Object,
    default: () => ({})
  }
});
const handleError = () => clearError({ redirect: '/' });
</script>

<template lang="pug">
#error
  p error
  pre {{ props.error }}
  button(@click="handleError") Clear errors
</template>
