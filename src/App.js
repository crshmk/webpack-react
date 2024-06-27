import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import FadeIn from '@components/FadeIn'
import Nav from '@components/Nav'
import Providers from '@store/Providers'
import Routes from './Routes'
import ScrollToTop from './ScrollToTop'

import './index.css'

const View = () => (
  <FadeIn>
    <div className="view">
        <Nav />
        <Routes />
    </div>
  </FadeIn>
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

