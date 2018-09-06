const __pages = {
  home: require('./home'),
}
top.__pages = {
  ...__pages,
  ...top.__pages
}
