import resolve from "rollup-plugin-node-resolve"
import postcss from "rollup-plugin-postcss"
import unprefix from "postcss-unprefix"
import compiler from "@ampproject/rollup-plugin-closure-compiler"

export default {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/index.js",
      format: "cjs",
    },
    {
      file: "./dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    resolve(),
    postcss({
      plugins: [unprefix],
      minimize: true,
      inject: false,
      extension: [".css"],
    }),
    compiler(),
  ],
}
