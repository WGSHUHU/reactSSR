import React from 'react'
import { StaticRouter } from 'react-router-dom'
import ReactDOMSSR from 'react-dom/server'
import { matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { getStore } from '../store'
import { renderRoutes } from 'react-router-config'
import Routes from '../Routes'

// 1. 需要在此处提前加载好组件需要的数据 ----> 前提是要知道用户请求地址和路由
// 2. 根据路由来往store中添加数据

export const render = (req, res) => {
  const store = getStore(req)
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
  let context = {
    css: []
  }
  Promise.all(promises).then(() => {
    const App = () => {
      return (
        <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
            {renderRoutes(Routes)}
          </StaticRouter>
        </Provider>
      )
    }

    const content = ReactDOMSSR.renderToString(<App />)
    const cssStr = context.css.length ? context.css.join('\n') : ''

    const serverStore = `window.__ssr_data=${JSON.stringify(store.getState())}`
    const template = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <style>${cssStr}</style>
      </head>
      <body>
        <div id="app">${content}</div>
        <script>${serverStore}</script>
        <script src="/client.js"></script>
      </body>
    </html>`

    res.send(template)
  })
}
