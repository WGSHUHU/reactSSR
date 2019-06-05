import Home from './components/Home'
import Login from './components/Login'

export default [
  {
    path: '/',
    // exact: true,
    component: Home,
    routes: [
      {
        path: '/test',
        exact: true,
        component: Login,
        key: 'test'
      }
    ],
    loadData: Home.loadData, // 3. loadData可以是其他的名字
    key: 'home' // 2. 每个Route中唯一的标志key，例：<Route key="home"/>
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    key: 'login'
  }
]
