import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4068,
    host: "0.0.0.0", // Allows access from external devices
    strictPort: true, // Ensures Vite does not switch to another port if 4046 is occupied
    allowedHosts: ["algoapp.in", "www.algoapp.in"], // Include both with and without www
  },
});
