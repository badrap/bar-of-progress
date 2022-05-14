module.exports = {
  root: true,
  extends: ["plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "warn",
    "linebreak-style": ["error", "unix"],
    eqeqeq: ["error", "smart"],
  },
  overrides: [
    {
      files: ["src/**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-for-in-array": ["error"],
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          { accessibility: "no-public" },
        ],
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          { allowExpressions: true, allowTypedFunctionExpressions: true },
        ],
      },
    },
  ],
};
