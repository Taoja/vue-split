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
  var pageList = require(path.resolve(__dirname, '../src/modules/' + a))
  pageList.forEach((item) => {
    pages.push({
      dir: a,
      page: `${a}_${item}`,
      name: item
    })
  })
})

module.exports = {
  modules,
  pages,
}
