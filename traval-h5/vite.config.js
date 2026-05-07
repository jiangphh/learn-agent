import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import vantResolver from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import AutoRoutesPlugin from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      imports:['vue','vue-router'],
      resolvers:[vantResolver()],
      dts: '.typings/auto-import.d.ts',
      eslintrc: {
        enabled: true,
        filepath: '.typings/.eslintrc-auto-import.json',
      },
    }),
    AutoRoutesPlugin({
      routerStyle:'nuxt',
      dirs: ['src/views'],
      exclude: ['**/components', '**/*.ts'],
    }),
    Components({
      resolvers:[vantResolver()],
      globs: [
        'src/components/*.{vue,tsx}',
        'src/components/*/index.{vue,tsx}',
      ]
    })
  ],
})