import { configureStore } from '@reduxjs/toolkit'
import SubjectsSlice from './slices/SubjectsSlice'

export const store = configureStore({
  reducer: {
    subjects:SubjectsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch