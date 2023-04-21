import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: {
    cli: "./src/node/cli.ts",
    index: "./src/node/index.ts",
    dev: "./src/node/dev.ts",
  }, // cli的入口地址和api的入口地址
  clean: true, // 清除之前构建的产物
  minify: process.env.NODE_ENV === "production",
  bundle: true,
  splitting: true,
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  shims: true,
});
