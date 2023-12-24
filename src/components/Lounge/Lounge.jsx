import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableRoundLounge from '../Object/Object.jsx'
import {
  setItemsList,
  editItemValueX,
  editItemValueY,
  editItemValueAngle,
  deleteItem,
} from '../../redux/slice_itemsList.js'
import { setSelectedItemId } from '../../redux/slice_selectedItemId.js'

export default function Lounge() {
  const [selectedItem, setSelectedItem] = useState({})
  const itemsList = useSelector((state) => state.itemsListReducer.itemsList)
  const selectedId = useSelector(
    (state) => state.selectedItemIdReducer.selectedItemId
  )

  const floorRef = useRef()

  const dispatch = useDispatch()

  useEffect(() => {
    const lastitemsList = JSON.parse(localStorage.getItem('items-list'))
    if (!!lastitemsList) {
      dispatch(
        setItemsList({
          itemsList: JSON.parse(localStorage.getItem('items-list')),
        })
      )
    }
    setSelectedItem()
  }, [dispatch])

  useEffect(() => {
    if (selectedId > 0) {
      setSelectedItem(
        itemsList.find(function (item) {
          return item.id === selectedId
        })
      )
    }
  }, [itemsList, selectedId])

  function changeItemX(e) {
    if (!selectedItem || e.target.value < 0) {
      return
    }
    dispatch(
      editItemValueX({
        item: {
          id: selectedItem.id,
          x: e.target.value,
        },
      })
    )
  }

  function changeItemY(e) {
    if (!selectedItem || e.target.value < 0) {
      return
    }
    dispatch(
      editItemValueY({
        item: {
          id: selectedItem.id,
          y: e.target.value,
        },
      })
    )
  }

  function changeItemAngle(e) {
    if (!selectedItem) {
      return
    }
    dispatch(
      editItemValueAngle({
        item: {
          id: selectedItem.id,
          angle: e.target.value,
        },
      })
    )
  }

  function unSelect() {
    if (!selectedItem) {
      return
    }
    dispatch(setSelectedItemId({ id: 0 }))
    setSelectedItem({})
  }

  function handleDeleteItem() {
    if (!selectedItem) {
      return
    }
    dispatch(deleteItem({ id: selectedItem.id }))
    unSelect()
  }

  return (
    <section className='lounge'>
      <div className='work-panel'>
        <p className='work-panel__text work-panel__text_type_item-name'>
          {selectedItem?.itemName || 'Выберите объект'}
        </p>
        <div className='work-panel__input-wrapper'>
          <p className='work-panel__text'>X:</p>
          <input
            onChange={changeItemX}
            value={selectedItem?.x || 0}
            className='work-panel__input'
            type='number'
          />
          <p className='work-panel__text'>px</p>
        </div>
        <div className='work-panel__input-wrapper'>
          <p className='work-panel__text'>Y:</p>
          <input
            onChange={changeItemY}
            value={selectedItem?.y || 0}
            className='work-panel__input'
            type='number'
          />
          <p className='work-panel__text'>px</p>
        </div>
        <div className='work-panel__input-wrapper'>
          <p className='work-panel__text'>Angle:</p>
          <input
            value={selectedItem?.angle || 0}
            onChange={changeItemAngle}
            className='work-panel__input'
            type='number'
          />
          <p className='work-panel__text'>deg</p>
        </div>
        <button
          onClick={handleDeleteItem}
          className='work-panel__delete-button'>
          Удалить объект
        </button>
      </div>
      <ul ref={floorRef} onMouseDown={unSelect} className='lounge__floor'>
        {itemsList?.map((item) => (
          <TableRoundLounge item={item} key={item.id} />
        ))}
      </ul>
    </section>
  )
}
