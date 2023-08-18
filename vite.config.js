import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default {
  plugins: [cssInjectedByJsPlugin()],
  build: {
    minify: 'terser',
    terserOptions: {
      mangle: false,
    },
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: 'main.js'
      },
      output: {
        entryFileNames: 'script.js',
        manualChunks: undefined,
      },
    },
    exclude: ['index.html', 'vite.svg']
  },
};
