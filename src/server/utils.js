import React from 'react'
import { StaticRouter, Route } from 'react-router-dom'
import ReactDOMSSR from 'react-dom/server'
import { Provider } from 'react-redux'
import getStore from '../store'
import Routes from '../Routes'

// 1. 需要在此处提前加载好组件需要的数据 ----> 前提是要知道用户请求地址和路由

const render = req => {
  const store = getStore()
  const App = () => {
    return (
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          {Routes.map(item => {
            return <Route key={item.path} {...item} />
          })}
        </StaticRouter>
      </Provider>
    )
  }
  const content = ReactDOMSSR.renderToString(<App />)
  return content
}

export { render }
