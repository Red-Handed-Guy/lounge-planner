import { createSlice } from '@reduxjs/toolkit'

const tablesRoundSlice = createSlice({
  name: 'tablesRound',
  initialState: {
    tablesRound: [],
  },
  reducers: {
    setTablesRound(state, action) {
      state.tablesRound = action.payload.tablesRound
    },
    addTableRound(state, action) {
      console.log(action.payload.tableRound)
      state.tablesRound.push(action.payload.tableRound)
    },
  },
})

export const { addTableRound } = tablesRoundSlice.actions
export default tablesRoundSlice.reducer
