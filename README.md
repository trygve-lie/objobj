# objobj

Get and set properties in deeply nested object structures.

## Installation

```bash
$ npm i objobj
```

## Usage

Set and get a value in a deeply neste object structure:

```js
const objobj = require('objobj');

const obj = objobj.get('a.b.c', 'cheeze');
const val = objobj.get('a.b.c', obj);

console.log(obj); // { a: { b: { c: 'cheeze' } } }
console.log(val); // cheeze
```

## API

ObjObj has the following methods:

### .get(path, object)

Get a value from a deeply nested object structure.

```js
const objobj = require('objobj');

const obj = {
    a: {
        b: {
            c: 'cheeze',
        }
    }
}

const val = objobj.get('a.b.c', obj);
console.log(val) // cheeze
```

This method take the following arguments:

 * **path** - `String` - The path, in dot notation, of the property to get - Required
 * **object** - `Object` - The object to query - Required

If the `path` does not match anything in the `object` the method will return
`undefined`.


### .set(path, value, object)

Set a value into a deeply nested object structure.

```js
const objobj = require('objobj');

const obj = objobj.set('a.b.c', obj, { bar: 'foo' });

/*
obj is now:
{
    a: {
        b: {
            c: 'cheeze',
        }
    },
    bar: 'foo',
}
*/
```

This method take the following arguments:

 * **path** - `String` - The path of the property, in dot notation, to set a value - Required
 * **value** - `*` - The value to set. Required
 * **object** - `Object` - A object to append the value too - Optional

When a `path` is defined and it does not pre exist in `object`, a deeply nested
object structure will be created based on `path`.

If `object` contain parts of the structure of the `path`, this will be left
untouched and the rest of the structure in `path` will be appended to the
pre existing structure in `object`.

If a value already exist on the `path`, the value will be overwritten.

If `object` is not provided, a new object will be created.


## License

The MIT License (MIT)

Copyright (c) 2018 - Trygve Lie - post@trygve-lie.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
