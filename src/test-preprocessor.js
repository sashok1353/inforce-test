// eslint-disable-next-line import/no-extraneous-dependencies
import tsc from "typescript";
import tsConfig from "../tsconfig.json";

module.exports = {
  process(src, path) {
    if (path.endsWith(".ts") || path.endsWith(".tsx") || path.endsWith(".js")) {
      return tsc.transpile(src, tsConfig.compilerOptions, path, []);
    }
    return src;
  },
};
