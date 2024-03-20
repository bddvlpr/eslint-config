/** @type { import("eslint").Linter.Config } */
module.exports = {
  extends: [
    "./packages/eslint-config/dist",
    "./packages/eslint-config-typescript/dist",
  ],
  env: {
    node: true,
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};
