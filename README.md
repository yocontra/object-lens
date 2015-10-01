# object-lens [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
## Information
<table><br><tr><br><td>Package</td><br><td>object-lens</td><br></tr><br><tr><br><td>Description</td><br><td>ACL-like filtering of objects</td><br></tr><br><tr><br><td>Node Version</td><br><td>>= 0.10</td><br></tr><br></table>  

## Usage
## Install

```
npm install object-lens --save
```

## Example

```js
var filter = require('object-lens');

var schema = {
  name: ['public', 'admin'],
  lastName: ['admin']
};

var data = {
  name: 'Todd',
  lastName: 'Johnson'
};

// Filtering a single piece of data
filter(schema, ['public'], data); // {name: 'Todd'}

// Filtering an array of data
var mapFn = filter.bind(null, schema, ['public']);
var filtered = [data, data].map(mapFn); // [{name: 'Todd'}, {name: 'Todd'}]
```

## LICENSE
(MIT License)

Copyright (c) 2015 Contra [contra@maricopa.edu](mailto:contra@maricopa.edu)

Permission is hereby granted, free of charge, to any person obtaining<br>a copy of this software and associated documentation files (the<br>"Software"), to deal in the Software without restriction, including<br>without limitation the rights to use, copy, modify, merge, publish,<br>distribute, sublicense, and/or sell copies of the Software, and to<br>permit persons to whom the Software is furnished to do so, subject to<br>the following conditions:

The above copyright notice and this permission notice shall be<br>included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,<br>EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF<br>MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND<br>NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE<br>LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION<br>OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION<br>WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[gittip-url]: https://www.gittip.com/contra/
[gittip-image]: http://img.shields.io/gittip/contra.svg
[downloads-image]: http://img.shields.io/npm/dm/object-lens.svg
[npm-url]: https://npmjs.org/package/object-lens
[npm-image]: http://img.shields.io/npm/v/object-lens.svg
[travis-url]: https://travis-ci.org/contra/object-lens
[travis-image]: https://travis-ci.org/contra/object-lens.png?branch=master
[coveralls-url]: https://coveralls.io/r/contra/object-lens
[coveralls-image]: https://coveralls.io/repos/contra/object-lens/badge.png
[depstat-url]: https://david-dm.org/contra/object-lens
[depstat-image]: https://david-dm.org/contra/object-lens.png
[david-url]: https://david-dm.org/contra/object-lens
[david-image]: https://david-dm.org/contra/object-lens.png?theme=shields.io
