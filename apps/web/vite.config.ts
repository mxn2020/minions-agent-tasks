import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@minions-agent-tasks/sdk'],
    },
    build: {
        commonjsOptions: {
            include: [/agent-tasks/, /node_modules/],
        },
    },
});
