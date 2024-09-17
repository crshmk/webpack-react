import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { TestApp } from "../App"

describe('App', () => {
  test('sanity', () => {
    const { asFragment } = render(<TestApp />)
    
    expect(asFragment()).toMatchSnapshot()

    const homeLink = screen.getByText('Home')
    expect(homeLink).toBeTruthy()
  })
})
