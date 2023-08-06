import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchHomeData = createAsyncThunk('home/fetchData', async () => {
  const { data } = await axios.get("http://123.207.32.32:8000/home/multidata")
  return data
})

const homeSlice = createSlice({
  name: 'home',

  initialState: {
    banners: [],
    recommends: [],
  },

  reducers: {
    changeBanners(state, { payload }) {
      console.log(payload);
    },

    changeRecommends(state, { payload }) {
      console.log(payload);
    }
  },

  // extraReducers: {
  //   [fetchHomeData.fulfilled](state, { payload }) {
  //     const { banner, recommend } = payload.data
  //     state.banners = banner.list
  //     state.recommends = recommend.list
  //   }
  // }

  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.fulfilled, (state, { payload }) => {
      const { banner, recommend } = payload.data
      state.banners = banner.list
      state.recommends = recommend.list
    })
  }
})

export default homeSlice.reducer