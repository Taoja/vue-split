const { getOptions } = require('loader-utils');

module.exports = function() {
  const options = getOptions(this)
  let importLine = ''
  let exportLine = ''
  const entry = require(this.resourcePath)
  options.pages.forEach((a) => {
    importLine = importLine + `var t${a.name} = () => import('${a.page}');`
    exportLine = exportLine + `{
      path: '/${a.dir}/${a.name}',
      name: '${a.page}',
      component: t${a.name}
    },`
  })
  exportLine = `const routers = [
    {
      path: '/',
      redirect: '${entry.entry}'
    },
    ${exportLine}
  ]
  
  export default routers
  `
  return importLine + exportLine
}
