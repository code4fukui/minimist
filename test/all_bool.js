import parse from '../index.js';
//var test = require('tape');
import * as _t from "https://deno.land/std/testing/asserts.ts";

const t = {
	deepEqual: _t.assertEquals,
	end: () => {},
};
const test = (name, func) => Deno.test(name, () => func(t));

test('flag boolean true (default all --args to boolean)', function (t) {
	var argv = parse(['moo', '--honk', 'cow'], {
		boolean: true,
	});

	t.deepEqual(argv, {
		honk: true,
		_: ['moo', 'cow'],
	});

	t.deepEqual(typeof argv.honk, 'boolean');
	t.end();
});

test('flag boolean true only affects double hyphen arguments without equals signs', function (t) {
	var argv = parse(['moo', '--honk', 'cow', '-p', '55', '--tacos=good'], {
		boolean: true,
	});

	t.deepEqual(argv, {
		honk: true,
		tacos: 'good',
		p: 55,
		_: ['moo', 'cow'],
	});

	t.deepEqual(typeof argv.honk, 'boolean');
	t.end();
});
