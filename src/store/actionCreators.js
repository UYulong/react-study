import * as actionType from './constants'

export const addCounterAction = (num) => ({
  type: actionType.ADD_COUNTER,
  num
})

export const subCounterAction = (num) => ({
  type: actionType.SUB_COUNTER,
  num
})