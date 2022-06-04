import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getPost = createAsyncThunk('posts/getPost', async () => {
  try {
    const response = await axios.get('/api/posts')
    const data = { data: response.data, status: response.status }
    return data
  } catch (error) {
    console.error(error)
  }
})

const likePost = createAsyncThunk(
  'posts/likePost',
  async ({ _id, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/like/${_id}`,
        {},
        { headers: { authorization: token } },
      )
      const data = { data: response.data }
      return data
    } catch (error) {
      return rejectWithValue({ data: error.response.data })
    }
  },
)

const dislikePost = createAsyncThunk(
  'posts/dislikePost',
  async ({ _id, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/dislike/${_id}`,
        {},
        { headers: { authorization: token } },
      )
      console.log(response, 'dislikes')
      const data = { data: response.data }
      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue({ data: error.response.data })
    }
  },
)

export { getPost, likePost, dislikePost }
