import React from 'react'

import './add-item-button.css'

import useStore from '../../store'

const AddItemButton = () => {
  const { pingIpc } = useStore()

  return (
    <>
    <div className="divider"></div>
    <div className="add-item-button">
      <button onClick={pingIpc}>add item</button>
    </div>
    </>
  )
}

export default AddItemButton