// 1. action可以是一个对象，也可以是一个函数进行异步操作
// 为什么可以在action函数中进行异步操作 ----> redux-thunk的特性
import axios from 'axios'

const getHomeListAction = () => {
  return () => {
    axios.get('/get').then(res => {
      console.log(res)
    })
  }
}

export { getHomeListAction }
