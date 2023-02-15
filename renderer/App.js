import React from 'react'

import './index.css'

import Buttons from './components/Buttons'
import Header from './components/Header'
import Output from './components/Output'
import { StoreProvider } from './store'
import Quit from './components/Quit'

const App = () => (
  <div className="window">
    <StoreProvider>
      <Header />
      <Buttons />
      <div className="divider" />
      <Output />
      <div className="divider" />
      <Quit />
    </StoreProvider>
  </div>
)

export default App

