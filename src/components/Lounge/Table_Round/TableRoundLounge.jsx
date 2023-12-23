import React, {useRef, useEffect } from 'react'

export default function TableRoundLounge({ table }) {

  const tableRef = useRef(null)

  // const [startX, setStartX] = useState(table.x)
  // const [startY, setstartY] = useState(table.y)

  let startX = table.x
  let startY = table.y

  useEffect(() => {
    tableRef.current.style.left = `${table.x}px`
    tableRef.current.style.top = `${table.y}px`
  }, [table.x, table.y])

  function moveMouse(e) {
    tableRef.current.style.left = `${
      e.pageX - startX >= 0 ? e.pageX - startX : 0
    }px`
    tableRef.current.style.top = `${
      e.pageY - startY >= 0 ? e.pageY - startY : 0
    }px`
  }

  function handleDragStart(e) {
    e.preventDefault()
    startX = e.pageX - Number.parseInt(tableRef.current.style.left || 0)
    startY = e.pageY - Number.parseInt(tableRef.current.style.top || 0)

    document.body.addEventListener('mousemove', moveMouse)
  }

  function handleDragEnd(e) {
    e.preventDefault()
    document.body.removeEventListener('mousemove', moveMouse)
  }

  return (
    <li
      draggable={true}
      ref={tableRef}
      onMouseLeave={handleDragEnd}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      className='lounge-item lounge-item_size_one-meter'>
      <div className='table_round'></div>
    </li>
  )
}
