module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: ["error", "smart"]
  }
};
