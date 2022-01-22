import React from 'react'
import '@testing-library/jest-dom'

import App from "../App"

import { render, screen } from '@testing-library/react'

describe('App', () => {
  test('sanity', () => {
    render(<App />)
    const appContainer = screen.getByText('app')
    expect(appContainer).toBeTruthy()

  })
})
