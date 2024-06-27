import React from 'react'
import { isAbsent } from 'ramjam' 

import './home.css'

import sunbeam from '@img/sunbeam.jpeg'

import useMessage from '@store/useMessage'

import FadeIn from '@components/FadeIn'

const ErrorMessage = () => {
  const { errorMessage } = useMessage()
  return isAbsent(errorMessage) ? null : <p>{errorMessage}</p>
}

const Home = () => {
  return (
    <FadeIn>
    <div className="home">
      <img src={sunbeam} />
      <ErrorMessage />
    </div>
    </FadeIn>
  )
}

export default Home