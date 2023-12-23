import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableRoundLounge from './Table_Round/TableRoundLounge.jsx'

export default function Lounge() {
  const tablesRoundList = useSelector(
    (state) => state.tablesRoundReducer.tablesRound
  )

  return (
    <section className='lounge'>
      <ul className='lounge__floor'>
        {tablesRoundList.map((table) => (
          <TableRoundLounge table={table} key={table.id} />
        ))}
      </ul>
    </section>
  )
}
