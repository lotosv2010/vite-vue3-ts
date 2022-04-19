import { createI18n } from 'vue-i18n';
import messages from './messages';

const i18nConfig = createI18n({
  fallbackLocale: 'zh',
  globalInjection: true,
  legacy: false, // you must set `false`, to use Composition API
  locale: 'zh',
  messages,
});

export default i18nConfig;
