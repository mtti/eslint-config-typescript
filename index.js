module.exports = {
  "extends": [
    "airbnb-base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],

  "env": {
    "jest": true,
    "es6": true,
    "node": true
  },

  "parser": "@typescript-eslint/parser",

  "parserOptions": {
      "ecmaVersion": 2017,
      "sourceType": "module"
  },

  "plugins": [
      "@typescript-eslint/eslint-plugin"
  ],

  "settings": {
      "import/extensions": [".js",".ts"],
      "import/parsers": {
          "@typescript-eslint/parser": [".ts"]
      },
      "import/resolver": {
          "node": {
              "extensions": [".js",".ts"]
          }
      }
  },

  "rules": {
    "no-console": "warn",
    "no-underscore-dangle": ["error", {
        "allowAfterThis": true
    }],
    "max-len": ["error", {
        "code": 80,
        "ignoreTemplateLiterals": true,
        "ignoreStrings": true,
        "ignoreRegExpLiterals": true
    }],
    "sort-imports": ["error", {
        "ignoreCase": true,
        "memberSyntaxSortOrder": ["none", "all", "single", "multiple"]
    }],
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": ["error", {
        "args": "none"
    }],
    "@typescript-eslint/no-inferrable-types": 0,
    "operator-linebreak": 0,
    "import/order": 0
  },
};