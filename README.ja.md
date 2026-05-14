# minimist

[
![npm version](https://img.shields.io/npm/v/minimist.svg)
](https://www.npmjs.com/package/minimist)
[
![License](https://img.shields.io/npm/l/minimist.svg)
](LICENSE)

コマンドラインインターフェース向けの、ミニマリストな引数パーサーです。

このライブラリは、optimistの引数パーサーのコア部分から、派手な装飾をすべて取り除いたものです。

## 機能

- 引数をパースして扱いやすいオブジェクトに変換します。
- ロングオプション（`--foo`）とショートオプション（`-f`）をサポートします。
- 結合されたショートオプションを処理します（`-abc` は `-a -b -c` と同等）。
- 数値と真偽値を自動的に変換します。
- 等号の有無にかかわらず、オプションと値のペアをサポートします（`--foo=bar`、`-f bar`）。
- 位置引数を `_` プロパティに格納します。
- `--` 引数以降のパースを停止します。
- オプションのエイリアスとデフォルト値をサポートします。
- ドット記法を処理し、ネストされたオブジェクトを作成します（`--foo.bar=baz`）。

## 使い方

### Deno

```js
import parse from "https://code4fukui.github.io/minimist/index.js";

const argv = parse(Deno.args);
console.log(argv);
```

### Node.js

まず、`minimist` をnpmでインストールします:
```bash
npm install minimist
```

その後、スクリプト内で使用します:
```js
import parse from 'minimist';
// または: const parse = require('minimist');

const argv = parse(process.argv.slice(2));
console.log(argv);
```

## 例

```
$ deno run example/parse.js -a beep -b boop
{ _: [], a: 'beep', b: 'boop' }
```

```
$ deno run example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{
  _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop'
}
```

## API

### `parse(args, opts={})`

提供された設定オブジェクト `opts` を使用して、与えられた文字列配列 `args` をパースします。

返される `argv` オブジェクトには、パースされたオプションがキーとして含まれます。オプションに関連付けられていない引数はすべて `_` 配列に格納されます。

**オプション（`opts`）:**

-   `string`: 常に文字列として扱う引数名（文字列）、またはその配列。
-   `boolean`: 常に真偽値として扱う引数名（文字列）、またはその配列。`true` の場合、すべての `--` 形式の引数が真偽値として扱われます。
-   `alias`: 引数名（文字列）をエイリアス（文字列または文字列の配列）にマッピングするオブジェクト。
-   `default`: 引数名（文字列）をデフォルト値にマッピングするオブジェクト。
-   `stopEarly`: `true` の場合、最初の非オプション引数（例: 位置引数）に到達した時点でパースを停止し、それ以降のすべての引数を `_` 配列に追加します。
-   `--`: `true` の場合、単独の `--` 以降のすべての引数を位置引数として扱い、`['--']` プロパティに格納します。
-   `unknown`: `opts` で定義されていないすべての引数に対して呼び出される関数。この関数が `false` を返した場合、その未知の引数はパースされません。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
