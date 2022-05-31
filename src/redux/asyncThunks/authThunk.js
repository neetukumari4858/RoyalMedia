import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const login = createAsyncThunk(
  'auth/login',
  async (loginuser, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/login', loginuser)
      console.log(response)
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

export { login, signup }
