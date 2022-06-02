import { createSlice } from '@reduxjs/toolkit'
import { getPost } from '../asyncThunks/postThunk'

const initialState = {
  posts: [],
  status:"idle",
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
   
  },
  extraReducers:{
    [getPost.fulfilled]: (state, action) => {
        state.posts = action.payload.data.posts
        state.status = 'success'
      },
      [getPost.rejected]: (action) => {
        state.status = 'failed'
        console.log(action)
      },
  }
})

export default postSlice.reducer