import React from 'react'
import { isAbsent } from 'ramjam' 

import './page.css'

import sunbeam from '@img/sunbeam.jpeg'

import useMessage from '@store/useMessage'

const ErrorMessage = () => {
  const { errorMessage } = useMessage()
  return isAbsent(errorMessage) ? null : <p>{errorMessage}</p>
}

const Page = () => {
  return (
    <div className="page">
      <img src={sunbeam} />
      <ErrorMessage />
    </div>
  )
}

export default Page