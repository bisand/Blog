// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages'
  },
  devtools: { enabled: true },
  modules: ['@nuxthq/ui', '@sidebase/nuxt-auth'],
  sourcemap: {
    server: true,
    client: true
  },
  colorMode: {
    classSuffix: '',
    // preference: 'light'
  },
  auth: {
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: false,
}
})
