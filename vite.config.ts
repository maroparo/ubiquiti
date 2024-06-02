/// reference types=”vitest” />
import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ command }) => {
  const config = {
    base: '/',
    plugins: [
      react(),
      tsconfigPaths(),
      svgr({
        include: '**/*.svg',
        svgrOptions: {
          exportType: 'default',
        },
      }),
    ],
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['src/test/test.config.ts'],
    },
  }

  if (command !== 'serve') {
    config.base = '/ubiquiti/'
  }

  return config
})
