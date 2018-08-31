const black = () => import('black')
const white = () => import('white')
const orange = () => import('orange')

const routers = [
  {
    path: '/',
    redirect: '/black'
  },
  {
    path: '/black',
    name: 'black',
    component: black
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
  }
]

export default routers
