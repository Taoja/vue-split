const fs = require('fs')
const path = require('path');
var modules = []
const files = fs.readdirSync( path.resolve(__dirname, '../src/modules'))
files.forEach(function (item) {
    let stat = fs.lstatSync( path.resolve(__dirname, "../src/modules/" + item))
    if (stat.isDirectory() === true) { 
      modules.push(item)
    }
})

var pages = []
modules.forEach(function (a) {
  const dir = fs.readdirSync( path.resolve(__dirname, '../src/modules/' + a))
  dir.forEach(function (item) {
    let stat = fs.lstatSync( path.resolve(__dirname, "../src/modules/" + a + '/' + item))
    if (stat.isDirectory() === true) { 
      pages.push({
        dir: a,
        page: item
      })
    }
  })
})

module.exports = {
  modules,
  pages
}
