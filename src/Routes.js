import Home from './components/Home'
import Login from './components/Login'

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    loadData: Home.loadData,
    key: 'home'
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    key: 'login'
  }
]

// export default () => {
//   return (
//     <div>
//       <Route path="/" exact component={Home} />
//       <Route path="/login" exact component={Login} />
//     </div>
//   )
// }
