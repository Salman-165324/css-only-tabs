// Import Vite's configuration function for setting up the build tool
import { defineConfig } from 'vite'
// Import the React plugin with SWC (Speedy Web Compiler) for fast compilation
import react from '@vitejs/plugin-react-swc'

/**
 * Vite Configuration File
 * 
 * Vite is a fast build tool for modern web development.
 * This configuration sets up the development server and build process.
 * 
 * Key Features Enabled:
 * - React JSX compilation via SWC (faster than Babel)
 * - Hot Module Replacement (HMR) for instant updates during development
 * - Optimized production builds with code splitting
 * - ES modules support for modern JavaScript
 * 
 * SWC (Speedy Web Compiler) Benefits:
 * - Written in Rust for superior performance
 * - Faster compilation compared to traditional Babel
 * - Built-in TypeScript support
 * - Modern JavaScript feature support
 * 
 * @see https://vite.dev/config/ - Official Vite configuration documentation
 */
export default defineConfig({
  plugins: [
    // Enable React support with SWC compiler
    // This handles JSX transformation and React-specific optimizations
    react()
  ],
})
