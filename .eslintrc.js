module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: { commonjs: true, node: true, jest: true },
  extends: ["standard", "prettier"],
  plugins: ["prettier"],
};
