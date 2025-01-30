import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    alias: {
      $lib: '.src/lib',
      $components: 'src/components'
    },
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/mySiteV2' : ''
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        if (path.includes('.') || !referrer) {
          return;
        }
        throw new Error(message);
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config;
