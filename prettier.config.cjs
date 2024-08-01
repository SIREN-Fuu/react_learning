/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

// https://zenn.dev/shimakaze_soft/articles/57642e22124968

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

  //必要な場合にのみ、オブジェクトプロパティを引用符で囲む(デフォルト)
  quoteProps: 'as-needed',

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

  //Print Widthで指定した値を超える時は折り返す(デフォルト)
  proseWrap: 'preserve',

  //displayプロパティのデフォルト値を尊重(デフォルト)
  htmlWhitespaceSensitivity: 'css',

  // ファイルの末尾に改行を追加する
  endOfLine: 'lf',

  //埋め込まれたコードを自動的にフォーマットしない
  embeddedLanguageFormatting: 'off',

  // プラグインの設定（必要に応じて追加）
  //   plugins: [require('prettier-plugin-tailwindcss')],
};
