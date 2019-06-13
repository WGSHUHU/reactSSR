import { CHNAGE_LOGIN } from './constant'

const defaultState = {
  login: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHNAGE_LOGIN:
      return {
        ...state,
        login: action.data
      }
    default:
      return state
  }
}
