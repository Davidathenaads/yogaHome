<script setup lang="ts">
import 'virtual:svg-icons-register'; // icons
const storeI18n = StoreI18n();

</script>

<template lang="pug">
ElConfigProvider(:locale="storeI18n.elLocale")
  NuxtlLoadingIndicator(color="#baeacb87")
  NuxtLayout
</template>
