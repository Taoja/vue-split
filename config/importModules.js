module.exports = function() {
  const list = require(this.resourcePath)
  const dir = this.context.split('/').pop()
  let source = 'const __pages = {'
  list.forEach((a) => {
    source = source + `${dir}_${a}: require('./${a}'),`
  })
  source = source + `}
  top.__pages = {
    ...__pages,
    ...top.__pages
  }`
  return source
}