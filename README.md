# vamo

[![npm version](https://badge.fury.io/js/vamo.svg)](https://www.npmjs.com/package/vamo)
[![GitHub license](https://img.shields.io/github/license/rfoel/vamo.svg)](https://github.com/rfoel/vamo/blob/master/LICENSE) ![GitHub stars](https://img.shields.io/github/stars/rfoel/vamo?style=social)

Run Node scripts with dependencies without npm installing them.

## Quick start

First, install the package globally. You can also use `npx` if you will.

```
npm install -g vamo
```

Now you can run any Node script without worrying about the dependencies as they will be installed at runtime.

```
// index.js

const dayjs = require('dayjs')

console.log('Today is:')
console.log(dayjs().format('DD/MM/YYYY'))
```

```
➜ vamo index.js
+ dayjs@1.9.1
added 1 package from 1 contributor and audited 1 package in 0.643s
found 0 vulnerabilities

Today is:
09/10/2020
```

## Usage

```
Usage: vamo <filename>

Run Node scripts with dependencies without npm installing them

Options:
  -V, --version  output the version number
  -h, --help     display help for command
```

## Contributing

Issues and pull requests are welcome.

## License

[MIT](https://github.com/rfoell/vamo/blob/master/LICENSE)
