<script setup lang="ts">
// main 請填寫功能描述👈
// const inputVal = ref('');
// const res = useState('main_res', () => ref([])) as Ref;
const resData = ref();

const ApiDemo = async () => {
  console.log('r3');
  // const _res = await api.Login({
  //   account: 'harry',
  //   password: '123456',
  //   from_type: '2' // 1:前台, 2:後台
  // });
  const _res = await api.GetDemo();
  resData.value = _res;
  console.log('r4', _res);
};
// const ServerApiDemo = async () => {
//   console.log('r1');
//   const res = await $fetch('/api/announcementType', { headers: { 'Content-Type': 'application/json' } });
//   console.log('r2', res);
//   console.log('server', res);
// };

// await useAsyncData('init', async () => {
//   console.log('11');
//   await ApiDemo();
//   // await ServerApiDemo();
//   console.log('22');
//   return true;
// });
const storeI18n = StoreI18n();
console.log('t', i18n('welcome'));
</script>

<template lang="pug">
#Main
  pre {{ resData }}
  //- p {{ list }}`
  p main
  svg-icon(name="icon_aside_marker1")
  //- img(src="@/assets/icons/rise_icon_bj_wpc.svg")
  div
    nuxt-link(to="/about") about
  div
    nuxt-link(to="/posts/1") posts1
  div
    nuxt-link(to="/posts/2" class="bg-slate-300 sm:px-2 xl:bg-slate-500 xl:px-1") posts2
  //- el-input(v-model="inputVal")

  el-button(@click="storeI18n.ChangeLocale('en')") En
  el-button(@click="storeI18n.ChangeLocale('zhTw')") Tw
  el-button(@click="ApiDemo") Api1
  //- el-button(@click="ServerApiDemo") ServerApi
  el-date-picker
  p {{ i18n('welcome') }}

  global-demo
  //- pre {{ inputVal }}
</template>

<style lang="scss" scoped>
// 佈局
#Main {
  color: $secondary;
  background-color: var(--color-background);
}

</style>
