import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.js"], 
    languageOptions: { globals: globals.node },
    ignores: ["node_modules"],
    rules:{
      "prefer-const" : "error",
      "no-unused-vars": "error",
      "no-var": "error",
      "quotes": ["error", "single"],
      "no-empty": "error",
      "camelcase": ["error", {"properties": "always"}],
      "no-alert": "error"
    }
   },
]);
