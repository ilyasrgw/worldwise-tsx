module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended", // Добавляем поддержку TypeScript
    "plugin:react/jsx-uses-react", // Добавляем поддержку JSX в React
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser", // Указываем парсер для TypeScript
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true }, // Для поддержки JSX
  },
  settings: {
    react: { version: "18.2" },
  },
  plugins: [
    "react-refresh",
    "@typescript-eslint", // Добавляем TypeScript plugin
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off", // Можно настроить правила для TypeScript
    "@typescript-eslint/no-unused-vars": "warn", // Можно настроить предупреждения для неиспользуемых переменных
  },
};
