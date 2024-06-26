import React, { lazy } from 'react'

const Page = lazy(() => import('@components/Page') )

import './index.css'

const App = () => 
  <Page />

export default App

