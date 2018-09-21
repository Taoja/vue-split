module.exports = function() {
  const app = require(this.resourcePath).app
  var list = this.context.split('/')
  const page = list.pop()
  const dir = list.pop()
  let source = `
  const page = require('./index.vue');
  top.__pages = {
    ...top.__pages,
    ...{
      ${dir}_${page}: page
    }
  }`
  return source
}