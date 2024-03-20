import type { Linter } from "eslint";

export = {
  extends: [
    "@bddvlpr/eslint-config",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  rules: {
    "import/no-unresolved": "off",
    "import/no-self-import": "error",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
} as Linter.Config;
