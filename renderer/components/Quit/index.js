import React from 'react'

const Quit = () => {

  const quit = () => {
    window.ipc.send('quit')
  }

  return (
    <ul>
      <li onClick={quit}>Quit</li>
    </ul>
  )
}

export default Quit