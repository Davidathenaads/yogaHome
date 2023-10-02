// 1. 引入組件
import * as ElementPlus from 'element-plus';
import zhTw from 'element-plus/es/locale/lang/zh-tw'
// 2. 引入組件樣式
import 'element-plus/dist/index.css';
import '@/assets/styles/css/_element-plug.scss';
// 3. 註冊
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus, {
    locale: zhTw,
  });
});

