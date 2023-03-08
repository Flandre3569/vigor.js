import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/node/cli.ts", "src/node/index.ts"], // cli的入口地址和api的入口地址
  clean: true, // 清除之前构建的产物
  bundle: true,
  splitting: true,
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  shims: true,
});
