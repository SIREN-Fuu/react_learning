/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
  // 行の最大長
  printWidth: 80,

  // インデントに使用するスペースの数
  tabWidth: 2,

  // タブではなくスペースを使用
  useTabs: false,

  // セミコロンを行末に追加する
  semi: true,

  // シングルクォートを使用する
  singleQuote: true,

  // JSX内ではダブルクォートを使用する
  jsxSingleQuote: false,

  // 複数行の配列やオブジェクトの最後にカンマを付ける
  trailingComma: 'es5',

  // オブジェクトリテラルの中括弧内のスペース
  bracketSpacing: true,

  // JSXタグの最後の括弧を同じ行に配置する
  jsxBracketSameLine: false,

  // アロー関数のパラメータに1つの引数がある場合でも括弧を常に付ける
  arrowParens: 'always',

  // ファイルの末尾に改行を追加する
  //   endOfLine: 'lf',

  // プラグインの設定（必要に応じて追加）
  //   plugins: [require('prettier-plugin-tailwindcss')],
};
