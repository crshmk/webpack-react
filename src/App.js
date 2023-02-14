import React, { useEffect, useState } from 'react'

import './index.css'

const App = () => {
  const [message, setMessage] = useState('')

  const pingIpc = () => {
    window.ipc.send('toMain', 'data to main')
  }

  useEffect(() => {
    window.ipc.receive('fromMain', setMessage)
  }, [])

  return (
    <div>
      <button onClick={pingIpc}>ping ipc</button>
      <p>{message}</p>
    </div>
  ) 
}
 

export default App

