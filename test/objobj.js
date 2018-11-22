'use strict';

const tap = require('tap');
const oo = require('../lib/objobj');

/**
 * .set()
 */

tap.test('.set() - no arguments - should return empty object', (t) => {
    t.same(oo.set(), {});
    t.end();
});

tap.test('.set() - shallow path - input: "a", "test", {} - should return { a: "test" }', (t) => {
    t.same(oo.set('a', 'test', {}), { a: 'test' });
    t.end();
});

tap.test('.set() - shallow path, override value - input: "a", "test", { a: "foo" } - should return { a: "test" }', (t) => {
    t.same(oo.set('a', 'test', { a: 'foo' }), { a: 'test' });
    t.end();
});


tap.test('.set() - shallow path, undefined value - input: "a", undefined, {} - should return { a: undefined }', (t) => {
    t.same(oo.set('a', undefined, {}), { a: undefined });
    t.end();
});

tap.test('.set() - deep path - input: "a.b.c", "test", {} - should return { a: { b: { c: "test" } } }', (t) => {
    t.same(oo.set('a.b.c', 'test', {}), {
        a: {
            b: {
                c: 'test'
            }
        }
    });
    t.end();
});

tap.test('.set() - deep path, partly filled - input: "a.b.c", "test", { a: { bb: "x" } } - should return { a: { bb: "x", b: { c: "test" } } }', (t) => {
    t.same(oo.set('a.b.c', 'test', {
        a: {
            bb: 'x'
        }
    }), {
        a: {
            b: {
                c: 'test'
            },
            bb: 'x',
        }
    });
    t.end();
});

tap.test('.set() - deep path, partly filled - input: "a.b.c", "test", { a: { b: "x" } } - should return { a: { b: { c: "test" } } }', (t) => {
    t.same(oo.set('a.b.c', 'test', {
        a: {
            b: 'x'
        }
    }), {
        a: {
            b: {
                c: 'test'
            }
        }
    });
    t.end();
});


/**
 * .get()
 */

tap.test('.get() - no arguments - should return "undefined"', (t) => {
    t.same(oo.get(), undefined);
    t.end();
});

tap.test('.get() - deep path, match deepest property - input: "a.b.c", { a: { b: { c: "test" } } },  - should return "test"', (t) => {
    t.same(oo.get('a.b.c', {
        a: {
            b: {
                c: 'test'
            }
        }
    }), 'test');
    t.end();
});

tap.test('.get() - deep path, match intermediate property - input: "a.b", { a: { b: { c: "test" } } },  - should return { c: "test" }', (t) => {
    t.same(oo.get('a.b', {
        a: {
            b: {
                c: 'test'
            }
        }
    }), {
        c: 'test'
    });
    t.end();
});

tap.test('.get() - deep path, no match - input: "x.y", { a: { b: { c: "test" } } },  - should return "undefined"', (t) => {
    t.same(oo.get('x.y', {
        a: {
            b: {
                c: 'test'
            }
        }
    }), undefined);
    t.end();
});
