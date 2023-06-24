import { configureStore } from '@reduxjs/toolkit'
import SettingsSlice from './slices/SettingsSlice'
import PackageSlice from './slices/PackageSlice'
import SubjectsSlice from './slices/SubjectsSlice'

export const store = configureStore({
  reducer: {
    subjects:SubjectsSlice,
    package:PackageSlice,
    settings:SettingsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch