import React from 'react'

export default function Item({ handleAdd, createNewItem }) {
  function addOnClick() {
    handleAdd(createNewItem())
  }

  return (
    <li className='item'>
      <div className='item__header'>
        <h2 className='item__name'>Стол 1х1</h2>
        <button onClick={addOnClick} type='button' className='item__add'>
          +
        </button>
      </div>
      <div className='item__container'>
        <div className='table_round'></div>
      </div>
    </li>
  )
}
