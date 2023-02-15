import React, { 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from 'react'

const StoreContext = createContext()
const useStore = () => useContext(StoreContext)

export const StoreProvider = props => {
  const [ipcMessage, setIpcMessage] = useState('')
  const [stdOut, setStdOut] = useState('')
  const [stdErr, setStdErr] = useState('')

  const pingIpc = () => {
    window.ipc.send('to-main', 'Payload to Main')
  }

  const callBashScript = () => {
    window.ipc.send('call-bash-script')
  }

  useEffect(() => {
    window.ipc.receive('from-main', setIpcMessage)
    window.ipc.receive('std-out-from-bash-script', setStdOut)
    window.ipc.receive('std-err-from-bash-script', setStdErr)
  }, [])

  const ctx = { callBashScript, ipcMessage, pingIpc, stdErr, stdOut }

  return (
    <StoreContext.Provider value={ctx}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default useStore