import parse from '../index.js';
import { test } from "./tape.js";

test('whitespace should be whitespace', function (t) {
	t.plan(1);
	var x = parse(['-x', '\t']).x;
	t.equal(x, '\t');
});
