// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: {
    shim: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  buildModules: [
    '@nuxt/postcss8',
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    }
  },
  css: [
    'assets/css/main.css',
  ],
});
