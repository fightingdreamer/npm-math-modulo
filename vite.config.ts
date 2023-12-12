import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/math/modulo.ts"),
      name: "@fightingdreamer/math-modulo",
      formats: ["es", "cjs"],
      fileName: "math-modulo",
    },
  },
});
