import Home from './components/Home'
import Login from './components/Login'

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    loadData: Home.loadData
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    loadData: Home.loadData
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
