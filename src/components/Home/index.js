import React from 'react'
import { isAbsent } from 'ramjam' 

import './home.css'

import sunbeam from '@img/sunbeam.jpeg'

import useMessage from '@store/useMessage'

const ErrorMessage = () => {
  const { errorMessage } = useMessage()
  return isAbsent(errorMessage) ? null : <p>{errorMessage}</p>
}

const Home = () => {
  return (
    <div className="home">
      <img src={sunbeam} />
      <ErrorMessage />
    </div>
  )
}

export default Home