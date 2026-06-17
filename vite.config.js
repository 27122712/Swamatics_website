import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/netcore": {
        target: "https://web.pdsi.in:3095",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/netcore/, "/api/netcore"),
      },
    },
  },
});
