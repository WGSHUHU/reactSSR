// 1. action可以是一个对象，也可以是一个函数进行异步操作
// 为什么可以在action函数中进行异步操作 ----> redux-thunk的特性
const createAction = (type, list) => {
  return {
    type,
    name: list
  }
}

const getHomeListAction = () => {
  return dispatch => {
    dispatch(createAction('CHANGE_NAME', 'li'))
  }
}

export { getHomeListAction }
