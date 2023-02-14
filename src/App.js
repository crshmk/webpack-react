import React from 'react'

import './index.css'

import AddItemButton from './components/AddItemButton'
import Header from './components/Header'
import Items from './components/Items'
import StdOut from './components/StdOut'
import { StoreProvider } from './store'

const App = () => (
  <div className="window">
    <StoreProvider>
      <Header />
      <Items />
      <AddItemButton />
      <StdOut />
    </StoreProvider>
  </div>
)

export default App

