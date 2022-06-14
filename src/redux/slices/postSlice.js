import { createSlice } from '@reduxjs/toolkit'

import {
  getPost,
  likePost,
  dislikePost,
  createPost,
  deletePost,
  editPost,
  commentPost,
  deleteComment,
} from '../asyncThunks/index'

const initialState = {
  posts: [],
  status: 'idle',
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    trendingPostHandler:(state)=>{
      state.posts.sort((a, b ) =>b.likes.likeCount - a.likes.likeCount)
     },
     latestPostHandler:(state)=>{
       state.posts.sort((a,b)=>b.createdAt - a.createdAt)
     }
  },

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
    [createPost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts
    },
    [createPost.rejected]: (action) => {
      console.log(action)
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts
    },
    [deletePost.rejected]: (action) => {
      console.log(action)
    },
    [editPost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts
    },
    [editPost.rejected]: (action) => {
      console.log(action)
    },
    [commentPost.fulfilled]: (state, action) => {
      state.posts = action?.payload?.data.posts
    },
    [commentPost.rejected]: (action) => {
      console.log(action)
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts
    },
    [deleteComment.rejected]: (action) => {
      console.log(action)
    },
  },  
})

export const {trendingPostHandler, latestPostHandler} = postSlice.actions;      
export default postSlice.reducer
