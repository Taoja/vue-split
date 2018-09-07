const { getOptions } = require('loader-utils');

module.exports = function() {
  const options = getOptions(this)
  let importLine = ''
  let exportLine = ''
  const entry = require(this.resourcePath)
  options.pages.forEach((a) => {
    importLine = importLine + `var ${a.name} = () => import('${a.page}');`
    exportLine = exportLine + `{
      path: '/${a.page}',
      name: '${a.page}',
      component: ${a.name}
    },`
  })
  exportLine = `const routers = [
    {
      path: '/',
      redirect: '/${entry.entry}'
    },
    ${exportLine}
  ]
  
  export default routers
  `
  return importLine + exportLine
}
