import { resolve } from "node:path"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages'
  },
  devtools: { enabled: true },
  modules: ['@nuxthq/ui', "@hebilicious/authjs-nuxt"],
  sourcemap: {
    server: true,
    client: true
  },
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  },
  colorMode: {
    classSuffix: '',
    // preference: 'light'
  },
  // authJs: {
  //   verifyClientOnEveryRequest: true,
  //   guestRedirectTo: "/",
  //   baseUrl: ""
  // },
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_SECRET // You can generate one with `openssl rand -base64 32`
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: process.env.ORIGIN, // The base URL is used for the Origin Check in prod only
        verifyClientOnEveryRequest: true // whether to hit the /auth/session endpoint on every client request
      }
    }
  }
})
