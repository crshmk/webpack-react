import React from 'react'

import './std-out.css'

import useStore from '../../store'

const StdOut = () => {
  const { callBashScript, stdErr, stdOut } = useStore()

  return (
    <div className="std-out">
      <div>
        <button onClick={callBashScript}>execute script</button>
      </div>
      <p>{stdOut}</p>
      <p className="error-message">{stdErr}</p>
    </div>
  )
}

export default StdOut