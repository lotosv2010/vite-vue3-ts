import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    title: 'App',
    theme: 'default',
    language: 'zh',
  }),
  // getters
  getters: {
    // title: (state) => state.title,
  },
  actions: {
    setTitle(payload: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.title = payload;
    },
    setTheme(payload: string) {
      this.theme = payload;
    },
    async setLanguage(payload: string) {
      // 模拟接口请求
      await new Promise((resolve) => {
        setTimeout(() => {
          this.language = payload;
          resolve(payload);
        }, 1000);
      });
    },
  },
});
