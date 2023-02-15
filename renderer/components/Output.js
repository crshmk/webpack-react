import React from 'react'

import useStore from '../store'

const useBashScriptMessage = () => {
  const { stdErr, stdOut } = useStore()
  return stdErr || stdOut || 'Before Script Executed'
}

const useIpcMessage = () => {
  const { ipcMessage } = useStore()
  return ipcMessage || 'Change this Message'
}

const Output = () => {
  const ipcMessage = useIpcMessage()
  const bashScriptMessage = useBashScriptMessage()

  return (
    <div className="std-out">
      <ul>
        <li className="subtext">{ipcMessage}</li>
        <li className="subtext">{bashScriptMessage}</li>
      </ul>
    </div>
  )
}

export default Output