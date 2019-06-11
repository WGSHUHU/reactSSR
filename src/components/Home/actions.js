// 1. action可以是一个对象，也可以是一个函数进行异步操作
// 为什么可以在action函数中进行异步操作 ----> redux-thunk的特性
import axios from 'axios'
import { CHANGE_LIST } from './constant'
const createAction = (type, list) => {
  return {
    type,
    list: list
  }
}

const getHomeListAction = server => {
  const url = server ? 'https://cnodejs.org/api/v1/topics' : '/api/v1/topics'
  return dispatch => {
    return axios.get(url).then(res => {
      if (res.status === 200) {
        const list = res.data.data
        dispatch(createAction(CHANGE_LIST, list))
      }
    })
  }
}

export { getHomeListAction }
