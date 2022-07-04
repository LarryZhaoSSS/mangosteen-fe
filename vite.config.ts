import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore';
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn:true,
      mergeProps:true
    }),
    svgstore(),
  ],
  server:{
    port:4000
  },
  // base:'/mangosteen-fe/dist/'
})