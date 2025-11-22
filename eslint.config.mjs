import path from "path";
import { fileURLToPath } from "url";
import eslintConfig, { tsLanguageOptions } from "@easysql/eslint-config";
import eslintConfigReact from "@easysql/eslint-config-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  ...eslintConfig,
  ...eslintConfigReact,
  {
    languageOptions: tsLanguageOptions({ tsconfigRootDir: __dirname }),
  },
  {
    rules: {
      "jsx-a11y/click-events-have-key-events": "off",
    },
  },
];
