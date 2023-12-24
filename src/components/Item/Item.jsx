import React from 'react'
import { useSelector } from 'react-redux'

export default function Item({
  handleAdd,
  createNewItem,
  itemType,
  itemName,
}) {
  const itemsList = useSelector((state) => state.itemsListReducer.itemsList)
  function addOnClick() {
    handleAdd(createNewItem(itemType, itemName))
  }

  return (
    <li className='item'>
      <div className='item__header'>
        <p className='item__name'>{itemName}</p>
        <div className='item__button-wrapper'>
          <button onClick={addOnClick} type='button' className='item__add'>
            +
          </button>
          <p className='item__name'>
            {itemsList.filter((item) => item.itemType === itemType).length}
          </p>
        </div>
      </div>
      <div className='item__container'>
        <div className={`object ${itemType}`}></div>
      </div>
    </li>
  )
}
