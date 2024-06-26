import React, { lazy } from 'react'

import Providers from '@store/Providers'

const Page = lazy(() => import('@components/Page') )
const Users = lazy(() => import('@components/Users') )

import './index.css'

const App = () => (
  <Providers>
    <Page />
    <Users />
  </Providers>
)

export default App

