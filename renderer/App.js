import React from 'react'

import './index.css'

import AddItemButton from './components/AddItemButton'
import Header from './components/Header'
import Items from './components/Items'
import StdOut from './components/StdOut'
import { StoreProvider } from './store'
import Quit from './components/Quit'

const App = () => (
  <div className="window">
    <StoreProvider>
      <Header />
      <Items />
      <AddItemButton />
      <StdOut />
      <Quit />
    </StoreProvider>
  </div>
)

export default App

