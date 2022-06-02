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

export {getPost}