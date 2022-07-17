import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
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
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server:{
    port:4000
  },
  
  // base:'/mangosteen-fe/dist/'
})