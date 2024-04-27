# rqlite-runtime

Prebuilt RQLite binaries for Linux, macOS, and Windows

```
npm i -g rqlite
```

https://rqlite.io

## Usage

```sh
# Server
rqlited -node-id=1 data1

# CLI
rqlite
```

Also, it can be required by Node.js to spawn it easily

```js
const rqlited = require('rqlite')

console.log(rqlited) // => '.../node_modules/rqlite/bin/rqlited'
```

## New builds

<details>
<summary>How to make a new build</summary>
<br>

Know your runtime:

```sh
node -e "console.log(process.platform + '-' + process.arch)"
# E.g. "linux-x64"
```

Create a folder with your runtime name like `npm/linux-x64`, and adjust the package file.

Finally, copy the compiled binaries into `npm/linux-x64/bin/...`.
</details>

## License

MIT
