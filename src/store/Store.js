import { configureStore } from '@reduxjs/toolkit'
import auth from './authSlice'
import books from './BookSlice'

export const store = configureStore({
  reducer: {books,auth},
})


