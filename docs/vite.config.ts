import { defineConfig } from 'vite'

const re = /from ["']vue["']/g
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      name: 'resolver',
      transform(code) {
        if (re.test(code)) {
          return code.replace(re, "from 'vue/vapor'")
        }
      }
    }
  ]
})
