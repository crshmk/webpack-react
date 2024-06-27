import React, { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'

const makeRoute = ({ Component, path, isProtected }) => (
  <Route path={path} key={path} element={
    <Suspense fallback={null}>
      {!isProtected ? <Component /> : (
        <ProtectedRoute>
          <Component />
        </ProtectedRoute>
      )}
    </Suspense>
    } 
  />
) 

export default makeRoute