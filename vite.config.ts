// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [tailwindcss()],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Добавляем поддержку React
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),       // обязательно для JSX/TSX
    tailwindcss()  // Tailwind
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // корневая папка src
    },
  },
});
