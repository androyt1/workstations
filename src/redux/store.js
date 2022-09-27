import { configureStore } from '@reduxjs/toolkit'
import WorkStationReducer from './features/workStationSlice'
import AuthReducer from './features/authSlice'

export const store = configureStore({
  reducer: {
    workstations:WorkStationReducer,
    auth:AuthReducer
  },
}) 