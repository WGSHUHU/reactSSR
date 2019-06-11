// 1. action可以是一个对象，也可以是一个函数进行异步操作
// 为什么可以在action函数中进行异步操作 ----> redux-thunk的特性
import clientAxios from '../../client/request'
import serverAxios from '../../server/request'
import { CHANGE_LIST } from './constant'
const createAction = (type, list) => {
  return {
    type,
    list: list
  }
}

const getHomeListAction = server => {
  const request = server ? serverAxios : clientAxios
  return dispatch => {
    return request.get('/api/v1/topics').then(res => {
      if (res.status === 200) {
        const list = res.data.data
        dispatch(createAction(CHANGE_LIST, list))
      }
    })
  }
}

export { getHomeListAction }
