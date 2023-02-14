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

  const pingIpc = () => {
    window.ipc.send('toMain', 'data to main')
  }

  const addItem = item => {
    setItems(prevItems => [...prevItems, item])
  }

  useEffect(() => {
    window.ipc.receive('fromMain', addItem)
  }, [])

  const ctx = { items, pingIpc }

  return (
    <StoreContext.Provider value={ctx}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default useStore