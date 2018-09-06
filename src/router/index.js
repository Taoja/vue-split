var home = () => import('home')
var flex = () => import('flex')
var header = () => import('header')
var cell = () => import('cell')
var actionSheet = () => import('actionSheet')
var toast = () => import('toast')
var dialog = () => import('dialog')

const routers = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/flex',
    name: 'flex',
    component: flex
  },
  {
    path: '/header',
    name: 'header',
    component: header
  },
  {
    path: '/cell',
    name: 'cell',
    component: cell
  },
  {
    path: '/actionSheet',
    name: 'actionSheet',
    component: actionSheet
  },
  {
    path: '/toast',
    name: 'toast',
    component: toast
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: dialog
  }
]

// import pageList from 'pageList'

// const routers = [
//   {
//     path: '/',
//     redirect: '/home'
//   }
// ]

// pageList.forEach((a) => {
//   routers.push({
//     path: `/${a.page}`,
//     name: a.page,
//     component: resolve => require.ensure([], () => resolve(require(a.page)), a.page)
//   })
// })

export default routers
