# minimist

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

[
![npm version](https://img.shields.io/npm/v/minimist.svg)
](https://www.npmjs.com/package/minimist)
[
![License](https://img.shields.io/npm/l/minimist.svg)
](LICENSE)

A minimalist argument parser for command-line interfaces.

This library is the guts of optimist's argument parser without all the fanciful decoration.

## Features

- Parses arguments into a convenient object.
- Supports long options (`--foo`) and short options (`-f`).
- Handles combined short options (`-abc` is equivalent to `-a -b -c`).
- Converts numeric and boolean values automatically.
- Supports option-value pairs with or without an equals sign (`--foo=bar`, `-f bar`).
- Populates `_` with positional arguments.
- Stops parsing after a `--` argument.
- Supports aliases and default values for options.
- Handles dotted notation to create nested objects (`--foo.bar=baz`).

## Usage

### Deno

```js
import parse from "https://code4fukui.github.io/minimist/index.js";

const argv = parse(Deno.args);
console.log(argv);
```

### Node.js

First, install `minimist` using npm:
```bash
npm install minimist
```

Then, use it in your script:
```js
import parse from 'minimist';
// Or: const parse = require('minimist');

const argv = parse(process.argv.slice(2));
console.log(argv);
```

## Examples

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

Parses the given `args` array of strings using the provided `opts` configuration object.

The returned `argv` object contains parsed options as keys. Any arguments that are not associated with an option are collected in the `_` array.

**Options (`opts`):**

-   `string`: A string or an array of strings to always treat as string arguments.
-   `boolean`: A string or an array of strings to always treat as boolean arguments. If `true`, all `--` style arguments will be treated as booleans.
-   `alias`: An object mapping string argument names to string or array of string aliases.
-   `default`: An object mapping string argument names to default values.
-   `stopEarly`: If `true`, parsing stops at the first non-option argument (e.g., a positional argument), and all subsequent arguments are added to the `_` array.
-   `--`: If `true`, all arguments after a standalone `--` are treated as positional arguments and collected in a `['--']` property.
-   `unknown`: A function that is called for any argument that is not defined in `opts`. If the function returns `false`, the unknown argument is not parsed.

## License

MIT License — see [LICENSE](LICENSE).