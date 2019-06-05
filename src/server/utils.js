import React from 'react'
import fs from 'fs'
import { StaticRouter, Route } from 'react-router-dom'
import ReactDOMSSR from 'react-dom/server'
import { matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import getStore from '../store'
import Routes from '../Routes'

// 1. 需要在此处提前加载好组件需要的数据 ----> 前提是要知道用户请求地址和路由
// 2. 根据路由来往store中添加数据

export const render = (req, res) => {
  const store = getStore()
  // 1. 根据路由，往store中添加数据
  let matchRoutesArr = matchRoutes(Routes, req.path)
  // console.log(matchRoutesArr)

  // 2. 让matchRoutesArr的组件对于的loadData方法执行一次
  let promises = []

  matchRoutesArr.forEach(item => {
    if (item.route.loadData) {
      // 3. 执行loadData方法，传入store数据源
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
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

    let template = fs.readFileSync('index.html', 'utf8')
    template = template.replace('{{{body}}}', content)

    res.send(template)
  })
}
