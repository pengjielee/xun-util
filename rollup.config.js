import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import path from "path";
import fs from "fs-extra";

const distPath = path.join(__dirname, "dist");
const esPath = path.join(__dirname, "es");
const umdPath = path.join(__dirname, "umd");

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const isProd = process.env.NODE_ENV === "production";

const plugins = [
  babel({
    exclude: "node_modules/**",
    extensions,
    presets: ["@babel/preset-env"],
  }),
  nodeResolve({
    browser: true,
    extensions,
  }),
  commonjs(),
  isProd ? terser() : null,
];

export default (async () => {
  await fs.remove(distPath);
  await fs.remove(esPath);
  await fs.remove(umdPath);

  return [
    {
      input: { index: path.join(__dirname, "src/index.js") },
      output: [
        {
          format: "cjs",
          exports: "named",
          entryFileNames: "index.js",
          dir: "dist",
        },
        {
          format: "es",
          exports: "named",
          entryFileNames: "index.js",
          dir: "es",
        },
        {
          format: "umd",
          name: "XunUtil",
          assetFileNames: "[name].[ext]",
          entryFileNames: "xun-util.js",
          dir: "umd",
        },
      ],
      plugins,
    },
  ];
})();
