import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Nav from '@components/Nav'
import Providers from '@store/Providers'
import Routes from './Routes'

import './index.css'

const View = () => (
  <div className="view">
    <Nav />
    <Routes />
  </div>
)

const App = () => (
  <Router>
  <Providers>
  <View />
  </Providers>
  </Router>
)

export default App

