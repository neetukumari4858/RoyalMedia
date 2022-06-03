import { createSlice } from '@reduxjs/toolkit'

import { getPost, likePost, dislikePost } from '../asyncThunks/index'

const initialState = {
  posts: [],
  status: 'idle',
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},

  extraReducers: {
    [getPost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts
      state.status = 'success'
    },
    [getPost.rejected]: (action) => {
      state.status = 'failed'
      console.log(action)
    },
    [likePost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts
    },
    [likePost.rejected]: (action) => {
      console.log(action)
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts
    },
    [dislikePost.rejected]: (action) => {
      console.log(action)
    },
  },
})

export default postSlice.reducer
