import React, { 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from 'react'

const StoreContext = createContext()
const useStore = () => useContext(StoreContext)

const defaultItems = ['one', 'two']

export const StoreProvider = props => {
  const [items, setItems] = useState(defaultItems)
  const [stdOut, setStdOut] = useState('')
  const [stdErr, setStdErr] = useState('')

  const pingIpc = () => {
    window.ipc.send('to-main', 'data to main')
  }

  const addItem = item => 
    setItems(prevItems => [...prevItems, item])

  const callBashScript = () => {
    window.ipc.send('call-bash-script', 'data to main')
  }

  useEffect(() => {
    window.ipc.receive('from-main', addItem)
    window.ipc.receive('std-out-from-bash-script', setStdOut)
    window.ipc.receive('std-err-from-bash-script', setStdErr)
  }, [])

  const ctx = { callBashScript, items, pingIpc, stdErr, stdOut }

  return (
    <StoreContext.Provider value={ctx}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default useStore