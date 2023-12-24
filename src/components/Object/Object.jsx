import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editItem } from '../../redux/slice_itemsList'
import { setSelectedItemId } from '../../redux/slice_selectedItemId'

export default function TableRoundLounge({ item }) {
  const [isSelected, setIselected] = useState('')
  const [isGrabbing, setIsGrabbing] = useState('')
  const itemRef = useRef(null)
  const dispatch = useDispatch()

  let startX = item.x
  let startY = item.y

  const selectedId = useSelector(
    (state) => state.selectedItemIdReducer.selectedItemId
  )

  useEffect(() => {
    itemRef.current.style.rotate = `${item.angle}deg`
    itemRef.current.style.left = `${item.x}px`
    itemRef.current.style.top = `${item.y}px`
  }, [item.angle, item.x, item.y])

  useEffect(() => {
    selectedId === item.id ? setIselected('object_selected') : setIselected('')
  }, [item.id, selectedId])

  function onMouseUp() {
    document.body.removeEventListener('mousemove', moveMouse)
    document.body.removeEventListener('mouseup', onMouseUp)
    setIsGrabbing('')
    dispatch(
      editItem({
        item: {
          ...item,
          x: Number.parseInt(itemRef.current.style.left),
          y: Number.parseInt(itemRef.current.style.top),
        },
      })
    )
  }

  function moveMouse(e) {
    itemRef.current.style.left = `${
      e.pageX - startX >= 0 ? e.pageX - startX : 0
    }px`
    itemRef.current.style.top = `${
      e.pageY - startY >= 0 ? e.pageY - startY : 0
    }px`

    document.body.addEventListener('mouseup', onMouseUp)
  }

  function handleDragStart(e) {
    e.preventDefault()
    e.stopPropagation()
    setIsGrabbing('object_grabbind')
    dispatch(setSelectedItemId({ id: item.id }))
    startX = e.pageX - Number.parseInt(itemRef.current.style.left || 0)
    startY = e.pageY - Number.parseInt(itemRef.current.style.top || 0)

    document.body.addEventListener('mousemove', moveMouse)
  }

  function handleClick(e) {
    e.stopPropagation()
    dispatch(setSelectedItemId({ id: item.id }))
  }

  function handleMouseDown(e) {
    e.stopPropagation()
  }

  return (
    <li
      onMouseDown={handleMouseDown}
      draggable={true}
      ref={itemRef}
      onDragStart={handleDragStart}
      onClick={handleClick}
      className={`object object_draggable ${item.itemType} ${isSelected} ${isGrabbing}`}></li>
  )
}
