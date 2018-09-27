var path = require('path')

module.exports = function() {
  const page = path.basename(this.context)
  const dir = path.basename(path.dirname(this.context))
  let source = `
  const page = require('./index.vue');
  window.__pages = {
    ...window.__pages,
    ...{
      ${dir}_${page}: page
    }
  }`
  return source
}