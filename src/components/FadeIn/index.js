import React, { useEffect, useState } from 'react'

import './fade-in.css'

const FadeIn = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 50)
  }, [])

  const className = 'fade-in' + (isLoading ? ' loading' : '')

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default FadeIn