const {modules, pages} = require('./fsList')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const isDev = process.env.NODE_ENV === 'development'

var entryList

var args = JSON.parse(process.env.npm_config_argv).cooked.slice(3)

var argList = args.length > 0 ? args[0].split('/') : []

if (argList.length <= 0) {
  entryList = modules
} else {
  entryList = argList
}

var entryPages = pages.filter((a) => {
  return entryList.includes(a.dir)
})

var packageList = function () {
  var base = {
    main:  path.resolve(__dirname, '../src/index.js')
  }
  var package = {}
  entryPages.forEach(function (a) {
    package[a.page] =  path.resolve(__dirname, `../src/modules/${a.dir}/${a.name}/index.js`)
  })
  if (entryList.includes('entry') || isDev || (argList.length <= 0 && !isDev)) {
    package.main = base.main
  }
  package.stores = path.resolve(__dirname, '../src/store/index.js')
  package.routes = path.resolve(__dirname, '../src/router/index.js')
  if (argList.includes('components') || isDev || (argList.length <= 0 && !isDev)) {
    package.components = path.resolve(__dirname, '../src/components/index.js')
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
    package[a.page] = 'window.__pages.' + a.page
  })
  package.components = 'window.__components'
  package.stores = 'window.__stores'
  package.routes = 'window.__routes'
  return package
}

function copyStatic () {
  return (entryList.includes('entry') || (argList.length <= 0 && !isDev)) && !isDev ?  [new CopyWebpackPlugin([
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
  copyStatic,
  entryPages
}
