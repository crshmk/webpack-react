import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const container = document.getElementsByTagName('div')[0]

const root = createRoot(container)

const renderApp = () => root.render(<App  />)

// delay render until fonts arrive
if(!!document.fonts?.ready) {

  let hasLoaded = false 

  setTimeout(() => {
    if(!hasLoaded) {
      hasLoaded = true 
      renderApp()
    }
  }, 3000)

  document.fonts.ready.then((fontFaceSet) => {
    if(!hasLoaded) {
      hasLoaded = true
      renderApp()
    }
    hasLoaded = true
  })
} else {
  renderApp()
}