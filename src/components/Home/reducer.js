import { CHANGE_LIST } from './constant'

const defauleState = {
  list: [],
  newList: []
}

const reducer = (state = defauleState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

export default reducer
