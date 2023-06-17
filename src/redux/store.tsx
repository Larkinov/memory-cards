import { configureStore } from '@reduxjs/toolkit'
import SubjectsSlice from './slices/SubjectsSlice'
import SettingsSlice from './slices/SettingsSlice'

export const store = configureStore({
  reducer: {
    subjects:SubjectsSlice,
    settings:SettingsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch