const { createVuePlugin } = require('vite-plugin-vue2');

import path from 'path';

module.exports = {
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    https: false,
    host: true,
  },
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
    sourcemap: true,
    manifest: true,
    assetsInlineLimit: '4096',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  define: {
    'process.env': process.env, // required for envs
  },
};
