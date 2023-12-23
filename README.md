# minimist

parse argument options

This module is the guts of optimist's argument parser without all the
fanciful decoration.

# example

``` js
import parse from "https://code4fukui.github.io/minimist/index.js";

const argv = parse(Deno.args);
console.log(argv);
```

```
$ deno run example/parse.js -a beep -b boop
{ _: [], a: "beep", b: "boop" }
```

```
$ deno run example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{
  _: [ "foo", "bar", "baz" ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: "boop"
}
```

# methods

``` js
import parseArgs from "https://code4fukui.github.io/minimist/index.js";
```

## var argv = parseArgs(args, opts={})

Return an argument object `argv` populated with the array arguments from `args`.

`argv._` contains all the arguments that didn't have an option associated with
them.

Numeric-looking arguments will be returned as numbers unless `opts.string` or
`opts.boolean` is set for that argument name.

Any arguments after `'--'` will not be parsed and will end up in `argv._`.

options can be:

* `opts.string` - a string or array of strings argument names to always treat as
strings
* `opts.boolean` - a boolean, string or array of strings to always treat as
booleans. if `true` will treat all double hyphenated arguments without equal signs
as boolean (e.g. affects `--foo`, not `-f` or `--foo=bar`)
* `opts.alias` - an object mapping string names to strings or arrays of string
argument names to use as aliases
* `opts.default` - an object mapping string argument names to default values
* `opts.stopEarly` - when true, populate `argv._` with everything after the
first non-option
* `opts['--']` - when true, populate `argv._` with everything before the `--`
and `argv['--']` with everything after the `--`. Here's an example:

  ```
  > parseArgv('one two three -- four five --six'.split(' '), { '--': true })
  {
    _: ['one', 'two', 'three'],
    '--': ['four', 'five', '--six']
  }
  ```

  Note that with `opts['--']` set, parsing for arguments still stops after the
  `--`.

* `opts.unknown` - a function which is invoked with a command line parameter not
defined in the `opts` configuration object. If the function returns `false`, the
unknown option is not added to `argv`.

# license

MIT

[package-url]: https://npmjs.org/package/minimist
[npm-version-svg]: https://versionbadg.es/minimistjs/minimist.svg
[npm-badge-png]: https://nodei.co/npm/minimist.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/minimist.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/minimist.svg
[downloads-url]: https://npm-stat.com/charts.html?package=minimist
[codecov-image]: https://codecov.io/gh/minimistjs/minimist/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/minimistjs/minimist/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/minimistjs/minimist
[actions-url]: https://github.com/minimistjs/minimist/actions
