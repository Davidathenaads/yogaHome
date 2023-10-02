import locales from './locales';

const index = {
  en: 0,
  zhTw: 1
};
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zhTw',
  messages: {
    en: locales[index.en],
    zhTw: locales[index.zhTw]
  }
}));
