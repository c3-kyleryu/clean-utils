# clean-utils

[![CI](https://github.com/c3-kyleryu/clean-utils/actions/workflows/ci.yml/badge.svg)](https://github.com/c3-kyleryu/clean-utils/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/badge/coverage-96%25-brightgreen)](./coverage/coverage-summary.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A small, **zero-dependency** collection of well-tested JavaScript utility
functions. Every exported function is documented and covered by tests.

## Installation

```bash
npm install clean-utils
```

## Usage

```js
const { clamp, unique, chunk, groupBy } = require('clean-utils');

clamp(11, 0, 10);            // 10
unique([1, 2, 2, 3]);        // [1, 2, 3]
chunk([1, 2, 3, 4], 2);      // [[1, 2], [3, 4]]
groupBy([1, 2, 3], n => n % 2 ? 'odd' : 'even'); // { odd: [1,3], even: [2] }
```

## API

| Function | Description |
| --- | --- |
| `clamp(value, min, max)` | Constrain a number to a range |
| `unique(arr)` | Remove duplicates, preserving order |
| `chunk(arr, size)` | Split an array into fixed-size chunks |
| `deepFreeze(obj)` | Recursively freeze an object |
| `capitalize(str)` | Uppercase the first character |
| `sum(nums)` | Sum an array of numbers |
| `mean(nums)` | Arithmetic mean |
| `groupBy(arr, keyFn)` | Group items by a key function |

## Development

```bash
npm install
npm run lint
npm test
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)
