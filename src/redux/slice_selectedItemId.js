import { createSlice } from '@reduxjs/toolkit'

const selectedItemIdSlice = createSlice({
  name: 'selectedItemId',
  initialState: {
    selectedItemId: 0,
  },
  reducers: {
    setSelectedItemId(state, action) {
      state.selectedItemId = action.payload.id
    },
  },
})

export const { setSelectedItemId} = selectedItemIdSlice.actions
export default selectedItemIdSlice.reducer
