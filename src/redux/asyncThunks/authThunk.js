import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const login = createAsyncThunk(
  'auth/login',
  async (loginuser, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/login', loginuser)
      const data = { data: response.data, status: response.status }
      return data
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      })
    }
  },
)

const signup = createAsyncThunk(
  'auth/signup',
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/signup', newUser)
      const data = { data: response.data, status: response.status }
      return data
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      })
    }
  },
)

const addBookmark = createAsyncThunk(
  'auth/addBookmark',
  async ({ _id, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${_id}`,
        {},
        { headers: { authorization: token } },
      )
      const data = { data: response.data }
      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue({ data: error.response.data })
    }
  },
)

const removeBookmark = createAsyncThunk(
  'auth/removeBookmark',
  async ({ _id, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${_id}`,
        {},

        { headers: { authorization: token } },
      )
      console.log(response, 'remove')
      const data = { data: response.data }
      return data
    } catch (error) {
      console.error(error)
      return rejectWithValue({ data: error.response.data })
    }
  },
)

const editProfile = createAsyncThunk(
  'user/editProfile',
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        '/api/users/edit',
        { userData },
        { headers: { authorization: token } },
      )
      const data = { data: response.data }
      return data
    } catch (error) {
      console.error(error)
      return rejectWithValue({ data: error.response.data })
    }
  },
)

export { login, signup, addBookmark, removeBookmark,editProfile }
