import React, { lazy } from 'react'

const Page = lazy(() => import('./Page') )

import './index.css'

const App = () => 
  <Page />

export default App

