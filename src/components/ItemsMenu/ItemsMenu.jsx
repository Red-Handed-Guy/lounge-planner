import React from 'react'
import Item from '../Item/Item'
import { useSelector, useDispatch } from 'react-redux'
import { addTableRound } from '../../redux/slice_tables_round'

export default function ItemsMenu() {
  const tablesRoundList = useSelector(
    (state) => state.tablesRoundReducer.tablesRound
  )
  const dispatch = useDispatch()

  console.log(tablesRoundList)

  function handleAddTableRound(newTable) {
    dispatch(addTableRound({ tableRound: newTable }))
  }

  function createNewItem() {
    return {
      id: new Date().getTime(),
      x: 0,
      y: 0,
    }
  }

  return (
    <section className='items-menu'>
      <ul className='items-menu__list'>
        <Item handleAdd={handleAddTableRound} createNewItem={createNewItem} />
      </ul>
    </section>
  )
}
