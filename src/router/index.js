var home = () => import('home')
var white = () => import('white')
var orange = () => import('orange')
var flex = () => import('flex')
var header = () => import('header')
var cell = () => import('cell')

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
    path: '/white',
    name: 'white',
    component: white
  },
  {
    path: '/orange',
    name: 'orange',
    component: orange
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
  }
]

export default routers
