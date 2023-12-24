import { configureStore } from '@reduxjs/toolkit'
import itemsListReducer from './slice_itemsList'
import selectedItemIdReducer from './slice_selectedItemId'

export default configureStore({
  reducer: {
    itemsListReducer,
    selectedItemIdReducer,
  },
})
