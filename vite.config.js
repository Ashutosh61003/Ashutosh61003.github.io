import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    root: 'src',
    envDir: '..', // Keep local public backend configuration at the repository root.
    publicDir: '../public',
    plugins: [react()],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
})
