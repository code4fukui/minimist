import * as _t from "https://deno.land/std/testing/asserts.ts";

const t = {
	deepEqual: _t.assertEquals,
	same: _t.assertEquals,
	equal: _t.assertEquals,
	end: () => {},
  plan: () => {},
};
export const test = (name, func) => Deno.test(name, () => func(t));
