// 搭配 assets/styles/css/_theme.css
export const StoreTheme = pinia.defineStore('StoreTheme', () => {
  onMounted(() => {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    ColorSchemeChangeHandler(colorSchemeQuery);
  });

  const ColorSchemeChangeHandler = (event: any) => {
    console.log(event);
    if (event.matches) {
      // 當前顏色方案是暗色（dark）
      ChangeTheme('dark');
    } else {
      // 當前顏色方案是亮色（light）
      ChangeTheme('light');
    }
  };

  const ChangeTheme = (theme: 'dark' | 'light') => {
    if (!document) return;
    const html: any = document.querySelector('html');
    if (!html) return;
    switch (theme) {
      case 'dark':
        html.style['color-scheme'] = 'dark';
        html.setAttribute('theme', 'dark');
        break;
      case 'light':
        html.style['color-scheme'] = 'light';
        html.setAttribute('theme', 'light');
        break;
      default:
        html.style['color-scheme'] = '';
        html.removeAttribute('theme');
        break;
    }
  };
  return { ChangeTheme };
});
