const { getOptions } = require('loader-utils');

module.exports = function() {
  const options = getOptions(this)
  let importLine = ''
  let exportLine = ''
  const entry = require(this.resourcePath)
  options.pages.forEach((a) => {
    importLine = importLine + `var t_${a.page} = () => import('${a.page}');`
    exportLine = exportLine + `{
      path: '/${a.dir}/${a.name}',
      name: '${a.page}',
      component: t_${a.page}
    },`
  })
  exportLine = `const routers = [
    {
      path: '/',
      redirect: '${entry.entry}'
    },
    ${exportLine}
  ]
  
  window.routes = routers
  `
  return importLine + exportLine
}
