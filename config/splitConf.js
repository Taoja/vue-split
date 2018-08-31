const {modules, pages} = require('./fsList')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
const isDev = process.env.NODE_ENV === 'development'

var entryList

var args = JSON.parse(process.env.npm_config_argv).cooked.slice(3)

entryList = args.length > 0 ? args[0].split('/') : []

if (entryList.length <= 0) {
  entryList = modules
}

var packageList = function () {
  var base = {
    main:  path.resolve(__dirname, '../src/index.js')
  }
  var package = {}
  pages.forEach(function (a) {
    if (entryList.includes(a.dir)) {
      package[a.page] =  path.resolve(__dirname, '../src/modules/' + a.dir + '/index.js')
    }
  })
  if (entryList.includes('entry') || isDev) {
    package.main = base.main
  }
  if (isDev) {
    return package
  } else {
    return package
  }
}

var importList = function () {
  var package = {}
  pages.forEach(function (a) {
    package[a.page] = 'window.' + a.page
  })
  return package
}

function copyStatic () {
  return entryList.includes('entry') ?  [new CopyWebpackPlugin([
    { 
      from:  path.resolve(__dirname, '../static'), 
      to: path.resolve(__dirname, '../dist/static')
    },
    { 
      from:  path.resolve(__dirname, '../index.html'), 
      to: path.resolve(__dirname, '../dist')
    }
  ])] : []
}

module.exports = {
  packageList,
  importList,
  copyStatic
}
