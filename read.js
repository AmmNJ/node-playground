const fs = require('fs')

module.exports = function read(path) {
  fs.promises
    .readFile(path, { encoding: 'utf-8' })
    .then(data => console.log(data.split('\n').length))
}
