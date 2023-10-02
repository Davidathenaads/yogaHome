// 1. 引入組件
import naive from 'naive-ui';
// 2. 引入組件樣式
// import 'ant-design-vue/dist/reset.css';
// 3. 註冊
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(naive);
});
