/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */

export default {
  arrowParens: 'avoid',
  singleQuote: false,
  printWidth: 120,
  semi: true,
  trailingComma: 'none',
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
  // @ianvs/prettier-plugin-sort-imports plugin's options
  // https://github.com/IanVS/prettier-plugin-sort-imports#options
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.4.5'
}
