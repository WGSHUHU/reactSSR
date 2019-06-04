import React from 'react'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import ReactDOMSSR from 'react-dom/server'
import { Provider } from 'react-redux'
import getStore from '../store'
import Routes from '../Routes'

// 1. 需要在此处提前加载好组件需要的数据 ----> 前提是要知道用户请求地址和路由
// 2. 根据路由来往store中添加数据

const render = req => {
  let matchRoutes = []
  Routes.forEach(route => {
    const match = matchPath(req.path, route)
    if (match) {
      matchRoutes.push(route)
    }
  })
  console.log(matchRoutes)

  const store = getStore()
  const App = () => {
    return (
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          {Routes.map(item => {
            return <Route {...item} />
          })}
        </StaticRouter>
      </Provider>
    )
  }
  const content = ReactDOMSSR.renderToString(<App />)
  return content
}

export { render }
