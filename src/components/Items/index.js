import React from 'react'

import './items.css'

import useStore from '../../store'

const makeItem = (item, i) => <li key={item+i}>{item}</li>

const Items = () => {
  const { items } = useStore()

  return (
    <ul>
      {items.map(makeItem)}
    </ul>
  ) 
} 

export default Items