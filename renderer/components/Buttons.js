import React from 'react'

import useStore from '../store'

const Buttons = () => {
  const { callBashScript, pingIpc } = useStore()

  return (
    <ul>
      <li onClick={pingIpc}>Ping the Main Process</li>
      <li onClick={callBashScript}>Call Bash Script</li>
    </ul>
  ) 
} 

export default Buttons