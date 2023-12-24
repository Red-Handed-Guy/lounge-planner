import { createSlice } from '@reduxjs/toolkit'

const itemsListSlice = createSlice({
  name: 'itemsList',
  initialState: {
    itemsList: [],
  },
  reducers: {
    setItemsList(state, action) {
      state.itemsList = action.payload.itemsList
    },
    addItem(state, action) {
      state.itemsList.push(action.payload.item)
    },
    editItem(state, action) {
      const newList = state.itemsList.map((item) =>
        item.id === action.payload.item.id ? action.payload.item : item
      )
      state.itemsList = newList
      localStorage.setItem('items-list', JSON.stringify(newList))
    },
    editItemValueX(state, action) {
      const newList = state.itemsList.map((item) =>
        item.id === action.payload.item.id
          ? { ...item, x: action.payload.item.x }
          : item
      )
      state.itemsList = newList
      localStorage.setItem('items-list', JSON.stringify(newList))
    },
    editItemValueY(state, action) {
      const newList = state.itemsList.map((item) =>
        item.id === action.payload.item.id
          ? { ...item, y: action.payload.item.y }
          : item
      )
      state.itemsList = newList
      localStorage.setItem('items-list', JSON.stringify(newList))
    },
    editItemValueAngle(state, action) {
      const newList = state.itemsList.map((item) =>
        item.id === action.payload.item.id
          ? { ...item, angle: action.payload.item.angle }
          : item
      )
      state.itemsList = newList
      localStorage.setItem('items-list', JSON.stringify(newList))
    },
    deleteItem(state, action) {
      const newList = state.itemsList.filter(
        (item) => item.id !== action.payload.id
      )
      state.itemsList = newList
      localStorage.setItem('items-list', JSON.stringify(newList))
    },
  },
})

export const {
  addItem,
  editItem,
  setItemsList,
  editItemValueX,
  editItemValueY,
  editItemValueAngle,
  deleteItem,
} = itemsListSlice.actions
export default itemsListSlice.reducer
