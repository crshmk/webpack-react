import React from 'react'

import './index.css'

import AddItemButton from './components/AddItemButton'
import Header from './components/Header'
import Items from './components/Items'
import { StoreProvider } from './store'

const App = () => (
  <StoreProvider>
    <Header />
    <Items />
    <AddItemButton />
  </StoreProvider>
)

export default App

