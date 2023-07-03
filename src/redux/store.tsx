import { configureStore } from '@reduxjs/toolkit'
import SettingsSlice from './slices/SettingsSlice'
import PackageSlice from './slices/PackageSlice'
import SubjectsSlice from './slices/SubjectsSlice'
import UserSlice from './slices/UserSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    subjects:SubjectsSlice,
    package:PackageSlice,
    settings:SettingsSlice,
    user:UserSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
