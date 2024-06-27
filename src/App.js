import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Nav from '@components/Nav'
import Providers from '@store/Providers'
import Routes from './Routes'
import ScrollToTop from './ScrollToTop'

import './index.css'

const View = () => (
  <div className="view">
    <Nav />
    <Routes />
  </div>
)

const App = () => (
  <Router>
  <ScrollToTop />
  <Providers>
  <View />
  </Providers>
  </Router>
)

export default App

