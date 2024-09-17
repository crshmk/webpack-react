import React from 'react'
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'

import './index.css'

import FadeIn from '@components/FadeIn'
import Nav from '@components/Nav'
import Providers from '@store/Providers'
import Routes from './Routes'
import ScrollToTop from './ScrollToTop'

const View = () => (
  <FadeIn>
    <div className="view">
      <Nav />
      <Routes />
    </div>
  </FadeIn>
)

export const App = () => (
  <Router>
  <ScrollToTop />
  <Providers>
  <View />
  </Providers>
  </Router>
)

export default App

export const TestApp = () => (
  <MemoryRouter initialEntries={['/']}>
  <Providers>
  <View />
  </Providers>
  </MemoryRouter>
)
