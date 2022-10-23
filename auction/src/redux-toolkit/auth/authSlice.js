import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authServices from './authServices'

const user = JSON.parse(localStorage.getItem('user'))

const API_URL = process.env.REACT_APP_BACKEND_URL + '/api/user'


const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    message: '',
  }

  export const signup = createAsyncThunk(
    API_URL+'/signup',
    async (user, thunkAPI) => {
      try {
        return await authServices.signup(user)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const login = createAsyncThunk(  API_URL + '/login', async (user, thunkAPI) => {
    try {
      return await authServices.login(user)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })
  
  export const logout = createAsyncThunk(  API_URL , async () => {
    await authServices.logout()
  })

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    
    reducers: {
      reset: (state) => {
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(signup.pending, (state) => {
          state.isLoading = true
        })
        .addCase(signup.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
        })
        .addCase(signup.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
        })
        .addCase(login.pending, (state) => {
          state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
        })
        .addCase(login.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
        })
        .addCase(logout.fulfilled, (state) => {
          state.user = null
        })
    }
  })
  
  export const { reset } = authSlice.actions
  export default authSlice.reducer