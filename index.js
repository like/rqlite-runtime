const runtime = require('spawn-runtime')

module.exports = runtime('rqlite-runtime', 'rqlited', { spawn: false })
