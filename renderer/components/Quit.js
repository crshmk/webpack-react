import React from 'react'

const quit = () => {
  window.ipc.send('quit')
}

const Quit = () => (
  <ul>
    <li onClick={quit}>Quit</li>
  </ul>
)

export default Quit