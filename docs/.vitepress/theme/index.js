// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "element-plus/dist/index.css";

// 注册全局组件: https://vitepress.vuejs.org/guide/theme-introduction#registering-global-components
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
    import("element-plus").then((module) => {
      app.use(module);
    });
  },
};
