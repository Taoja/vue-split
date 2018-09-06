const __pages = {
  flex: require('./flex'),
  header: require('./header'),
  cell: require('./cell'),
  actionSheet: require('./actionSheet'),
  dialog: require('./dialog'),
  toast: require('./toast'),
}
top.__pages = {
  ...__pages,
  ...top.__pages
}