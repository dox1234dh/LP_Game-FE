// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: 'LP GAME',
    },
  },
  css: ['~/assets/css/main.css'],
  plugins: [
    { src: 'node_modules/nuxtjs-phaser', mode: 'client' },
  ],
  modules: ['@pinia/nuxt'],
  typescript: { tsConfig: { compilerOptions: { baseUrl: ".", }, }, },
})
