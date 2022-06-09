import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getAllUser = createAsyncThunk(
  'user/getAllUser',
  async (rejectWithValue) => {
    try {
      const response = await axios.get('/api/users')
      const data = { data: response.data }
      return data
    } catch (error) {
      return rejectWithValue({ data: error.response.data })
    }
  },
)

const followUser = createAsyncThunk(
  'user/followUser',
  async ({ _id, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${_id}`,
        {},
        { headers: { authorization: token } },
      )
      const data = { data: response.data }
      return data
    } catch (error) {
      return rejectWithValue({data:error.response.data})
    }
  },
)

const unfollowUser = createAsyncThunk(
  'user/unfollowUser',
  async ({ _id, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${_id}`,
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
export { getAllUser, followUser, unfollowUser }
