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
      <p className="subtext">{stdOut}</p>
      <p className="subtext">{stdErr}</p>
    </div>
  )
}

export default StdOut