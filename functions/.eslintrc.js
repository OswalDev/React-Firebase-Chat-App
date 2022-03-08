module.exports = {
  parser: "babel-eslint",
  plugins: ["babel"],
  extends: [
   "plugin:prettier/recommended",
   "plugin:react/recommended"],
  env: {
    "browser": true,
    "es6": true,
    "jest": true,
  },
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  rules: {
    "curly": "error",
    "eqeqeq": "error",
    "guard-for-in": "error",
    "no-extend-native": "error",
    "complexity": ["error", 200],
    "max-depth": ["error", 5],
    "max-params": ["error", 12],
    "max-statements": ["error", 200],
    "no-caller": "error",
    "no-irregular-whitespace": "error",
    "no-new": "error", "no-undef": "error", "no-unused-vars": "error",
    "no-global-assign": "error", "react/prop-types": "off", "babel/semi": 1},
};
