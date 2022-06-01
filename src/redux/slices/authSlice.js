import { createSlice } from '@reduxjs/toolkit'
import {login,signup} from "./../asyncThunks/authThunk"

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    },
    
  },
  extraReducers:{
    [login.fulfilled]: (state, action) => {
      console.log(action,"action");
      state.user = action.payload.data.foundUser
      state.token = action.payload.data.encodedToken
    },
    [login.rejected]: (action) => {
      console.error(action)
    },
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload.data.createdUser
      state.token = action.payload.data.encodedToken
    },
    [signup.rejected]: (action) => {
      console.error(action)
    },
  }

})

export const {logoutUser } = authSlice.actions
export default authSlice.reducer