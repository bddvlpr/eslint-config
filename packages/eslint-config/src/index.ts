import type { Linter } from "eslint";

export = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
} as Linter.Config;
