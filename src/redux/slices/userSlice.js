import { createSlice } from '@reduxjs/toolkit'
import { getAllUser ,followUser, unfollowUser} from './../asyncThunks/index'

const initialState = {
  users: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUser.fulfilled]: (state, action) => {
      state.users = action.payload.data.users
    },
    [getAllUser.rejected]: (action) => {
      console.log(action)
    },
    [followUser.fulfilled]: (state, action) => {
      state.users = action.payload.data.users
    },
    [followUser.rejected]: (action) => {
      console.log(action)
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.users = action.payload.data.users
    },
    [unfollowUser.rejected]: (action) => {
      console.log(action)
    },
  },
})

export default userSlice.reducer
