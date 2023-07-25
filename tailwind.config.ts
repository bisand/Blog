import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  darkMode: 'class',
  content: [
    'docs/content/**/*.md',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
