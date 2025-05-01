
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { execSync } from "child_process";

// Run browserslist update (will only run during development builds)
if (process.env.NODE_ENV !== "production") {
  try {
    console.log("Updating browserslist database...");
    execSync("npx update-browserslist-db@latest", { stdio: "inherit" });
  } catch (error) {
    console.warn("Failed to update browserslist database:", error);
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
