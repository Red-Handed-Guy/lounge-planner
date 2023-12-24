import React, { useRef, useState } from 'react'
import Item from '../Item/Item'
import { useDispatch } from 'react-redux'
import { addItem, setItemsList } from '../../redux/slice_itemsList'

export default function ItemsMenu() {
  const dispatch = useDispatch()
  const [blobLink, setBlobLink] = useState('')

  const linkRef = useRef()
  const inputRef = useRef()

  function handleAddItem(newTable) {
    dispatch(addItem({ item: newTable }))
  }

  function createNewItem(itemType, itemName) {
    return {
      id: new Date().getTime(),
      x: 0,
      y: 0,
      angle: 0,
      itemType: itemType,
      itemName: itemName,
    }
  }
  function exportFile() {
    let stroka = `не-лезь-убьёт${localStorage.getItem('items-list')}`
    let blob = new Blob([stroka], { type: 'application/json' })
    setBlobLink(URL.createObjectURL(blob))
    setTimeout(() => {
      linkRef.current.click()
    }, 1000)
  }

  function handleClearItemsList() {
    dispatch(setItemsList({ itemsList: [] }))
    localStorage.clear()
  }

  function importFile(ev) {
    const reader = new FileReader()
    reader.readAsText(ev.target.files[0])
    reader.onload = (e) => {
      if (e.target.result.indexOf('не-лезь-убьёт') === 0) {
        const transcript = e.target.result.replace(/не-лезь-убьёт/g, '')
        dispatch(setItemsList({ itemsList: JSON.parse(transcript) }))
        localStorage.setItem('items-list', transcript)
        ev.target.value = null
      } else {
        alert('Неподходящий файл')
        ev.target.value = null
      }
    }
  }

  function handleClickImport() {
    inputRef.current.click()
  }

  return (
    <section className='items-menu'>
      <div className='work-panel'>
        <button onClick={exportFile} className='work-panel__delete-button'>
          Экспорт JSON
        </button>
        <a
          ref={linkRef}
          href={blobLink}
          download='Lounge_plan'
          className='work-panel__stealth-link'>
          Выгрузить
        </a>
        <button
          onClick={handleClickImport}
          className='work-panel__delete-button'>
          Импорт JSON
        </button>
        <input
          accept='.json'
          ref={inputRef}
          onChange={importFile}
          type='file'
          className='work-panel__stealth-link'
        />
        <button
          onClick={handleClearItemsList}
          className='work-panel__delete-button'>
          Очистить всё
        </button>
      </div>
      <ul className='items-menu__list'>
        <Item
          handleAdd={handleAddItem}
          createNewItem={createNewItem}
          itemType={'object__type_round-table'}
          itemName={'Стол кр. 1x1'}
        />
        <Item
          handleAdd={handleAddItem}
          createNewItem={createNewItem}
          itemType={'object__type_long_table'}
          itemName={'Cтол пр. 2x1'}
        />
        <Item
          handleAdd={handleAddItem}
          createNewItem={createNewItem}
          itemType={'object__type_chair'}
          itemName={'Стул 0.4x0.4'}
        />
        <Item
          handleAdd={handleAddItem}
          createNewItem={createNewItem}
          itemType={'object__type_partition'}
          itemName={'Перегородка 2x0.1'}
        />
      </ul>
    </section>
  )
}
