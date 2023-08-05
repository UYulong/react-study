import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    counter: 888
  },

  reducers: {
    addCounter(state, { payload }) {
      state.counter += payload
    },

    subCounter(state, { payload }) {
      state.counter -= payload
    }
  }
})

export const { addCounter, subCounter } = counterSlice.actions


export default counterSlice.reducer