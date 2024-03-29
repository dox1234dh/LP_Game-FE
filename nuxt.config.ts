// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: 'LP GAME',
    },
  },
  css: ['~/assets/css/main.scss'],
  plugins: [
    { src: 'node_modules/nuxtjs-phaser', mode: 'client' },
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@ant-design-vue/nuxt',
    "@nuxt/image"
  ],
  typescript: { tsConfig: { compilerOptions: { baseUrl: ".", }, }, },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL
    }
  }
})