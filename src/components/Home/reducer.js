const defauleState = {
  name: 'wgs 23',
  newList: []
}

const reducer = (state = defauleState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
}

export default reducer
