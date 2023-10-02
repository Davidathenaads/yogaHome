// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const isDev = process.env.NODE_ENV === 'development';

const DevServerConfig = () => {
  if (isDev) return {
    proxy: {
      '/api': {
        target: process.env.NUXT_PUBLIC_API_BASE as string,
        // target: 'http://pltf.org.tw',
        changeOrigin: true
      }
    }
  };
  return {};
};

export default defineNuxtConfig({
  devtools: { enabled: true },
  // 模塊注入
  modules: [
    // '@nuxtjs/i18n', // 目前壞了，等待官方修復 https://nuxt.com.cn/modules/i18n
    // '@zadigetvoltaire/nuxt-gtm', // GTM 要使用請解除 https://nuxt.com.cn/modules/nuxt-gtm
    // 'nuxt3-meta-pixel', // FB 像素 要使用請解除 https://github.com/quando1910/nuxt3-meta-pixel
    '@element-plus/nuxt', // https://nuxt.com.cn/modules/element-plus
    '@pinia/nuxt', // https://ithelp.ithome.com.tw/articles/10302381
    '@nuxtjs/device', // const {} = useDevice(); // https://nuxt.com/modules/device
    '@nuxtjs/stylelint-module', // https://github.com/nuxt-modules/stylelint
    '@nuxtjs/tailwindcss' // https://nuxt.com/modules/tailwindcss
  ],
  // i18n: { // i18n 目前 8.0.0-rc.3 error 打包運行會 500
  //   vueI18n: './i18n/i18n.config.ts'
  // },
  devServer: {
    // port: process.env.NUXT_PORT || 2000,
    // host: process.env.NUXT_HOST || '0.0.0.0'
    // https: { // Nuxt3Https 模式
    //   key: './https/localhost.key',
    //   cert: './https/localhost.crt'
    // }
  },
  // .env setting
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiUrl: '',
      clarityOpen: '',
      clarityCode: '',
      testMode: isDev ? 'T' : 'F'
    }
  },
  // ts 設定
  typescript: {
    // strict: true // 使用 ts
  },
  // 全局組件設定
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true
      }
    ]
  },
  // composables utils 全局範圍設定
  imports: {
    dirs: [
      // 掃描 composables 目錄頂層
      'composables',
      // 掃描深度一層的特定檔案
      'composables/*/index.{ts,js,mjs,mts}',
      // 掃描整個 composables 目錄下的檔案
      'composables/**',
      // utils
      'utils/*/index.{ts,js,mjs,mts}'
    ]
  },
  // style
  css: ['@/assets/styles/css/index.css'],
  stylelint: {
    lintOnStart: false, // 專案啟動時不自動檢查所有相關檔案
    chokidar: true // 監聽文件異動進行檢核（文件未列出此選項）
  },
  app: {
    // baseUrl: '/calculator3/',
    pageTransition: { name: 'page', mode: 'out-in' },
    // meta
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW',
        // @ts-ignore
        version: process.env.npm_package_version as string
      },
      // viewport: 'width=500, initial-scale=1',
      title: 'Nuxt3 ts base',
      meta: [
        { name: 'robots', content: 'index' }, // content: https://www.newscan.com.tw/all-seo/robots-meta-directives.htm
        { name: 'description', content: '這是 Nuxt3 ts base' },
        { property: 'og:title', content: 'Nuxt3 ts base' },
        { property: 'og:url', content: 'http://localhost:3000/' },
        { property: 'og:description', content: '這是 Nuxt3 ts base' }
      ]
    }
  },
  // google gtm
  gtm: {
    id: process.env.NUXT_PUBLIC_GTM_ID as string || '',
    enabled: true, // dev 可使用
    debug: true, // 可 debug (印 console.log)
    // loadScript: true, // 是否加載 GTM 腳本（如果您手動包含 GTM，但需要在組件中使用 dataLayer 功能，則很有幫助）（可選）
    trackOnNextTick: false // 是否在 Vue.nextTick 中調用 trackView
  },
  // FB 像素 https://github.com/quando1910/nuxt3-meta-pixel
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: process.env.NUXT_PUBLIC_FB_PIXELID_ID as string || '',
    autoPageView: true,
    disabled: false // 禁用像素
  },
  // vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/scss/index.scss" as *;'
        }
      }
    },
    plugins: [
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: '[dir]/[name]',
        customDomId: '__svg__icons__dom__'
      })
    ],
    // axios CORS
    server: DevServerConfig(),
    build: {
      chunkSizeWarningLimit: 1500, // 分割檔案
      rollupOptions: {
        output: {
          manualChunks (id: any) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  }
});
