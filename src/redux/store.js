import { configureStore } from '@reduxjs/toolkit'
import tablesRoundReducer from './slice_tables_round'

export default configureStore({
  reducer: {
    tablesRoundReducer,
  },
})
