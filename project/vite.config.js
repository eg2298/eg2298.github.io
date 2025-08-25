import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 9002,
  },
  base: '',
  build: {
    rollupOptions: {
      input: {
        main:  'index.html', // Assuming your main HTML is index.html in the root
        voxel:'volume.html', // Path to page1.html
        pendulum: 'double_pendulum.html', // Path to page2.html
        pendulum_imgui: 'pendulum_imgui.html', // Path to page2.html
        
        background: 'shader_background.html',
        // If your HTML files are in a 'pages' directory:
        // about: resolve(__dirname, 'pages/about.html'),
        // contact: resolve(__dirname, 'pages/contact.html'),
      },
      output: {
        entryFileNames: "[name].js", 
        // For asynchronously loaded chunks
        chunkFileNames: "[name].js", 
        // For other assets (images, CSS, etc.)
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});
