import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";


{
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "requireConfigFile": false
    }
}

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
]);

