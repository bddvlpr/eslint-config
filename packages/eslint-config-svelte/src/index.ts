import type { Linter } from "eslint";

export = {
  extends: ["@bddvlpr/eslint-config-typescript", "plugin:svelte/recommended"],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  parserOptions: {
    extraFileExtensions: [".svelte"],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
} satisfies Linter.Config;
