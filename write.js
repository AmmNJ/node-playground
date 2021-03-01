const fs = require('fs')
const { exit } = require('process')

const file = 'tools.json'
const tool = process.argv[2]
const score = process.argv[3]

fs.promises
  .readFile(file, { encoding: 'utf-8' })
  .then(addToolToJSON)
  .then(onWriteSuccess)
  .catch(onError)

function addToolToJSON(data) {
  const tools = JSON.parse(data)
  tools.push({ name: tool, score: score })
  return fs.promises.writeFile(file, JSON.stringify(tools), {
    encoding: 'utf-8',
  })
}

function onWriteSuccess() {
  exit(0)
}

function onError(error) {
  console.error(error)
}
// old style with nested callbacks
// fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
//   const tools = err ? [] : JSON.parse(data)
//   tools.push({ name: tool, score: score })

//   console.log(tools)

//   fs.writeFile(file, JSON.stringify(tools), { encoding: 'utf-8' }, err => {
//     exit(err ? 1 : 0)
//   })
// })
