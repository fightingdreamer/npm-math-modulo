import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/math/modulo.ts"),
      name: "@fd/math-modulo",
      formats: ["es", "cjs"],
      fileName: "math-modulo",
    },
  },
});
