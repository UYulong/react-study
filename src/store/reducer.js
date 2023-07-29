import * as actionType from './constants'

const initState = {
  counter: 100
}

function reducer(state = initState, action) {
  switch (action.type) {
    case actionType.ADD_COUNTER:
      return { ...state, counter: state.counter + action.num }
    case actionType.SUB_COUNTER:
      return { ...state, counter: state.counter - action.num }

    default:
      return state
  }
}

export default reducer