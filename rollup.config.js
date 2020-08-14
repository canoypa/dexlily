import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";

export default [
  {
    input: "src/index.ts",

    output: {
      dir: "dist/es",
      format: "es",
    },

    plugins: [typescript(), babel(), commonjs(), nodeResolve()],
  },
  {
    input: "src/index.ts",

    output: {
      dir: "dist/cjs",
      format: "cjs",
    },

    plugins: [typescript(), babel(), commonjs(), nodeResolve()],
  },
];
