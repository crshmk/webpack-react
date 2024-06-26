import React, { createContext, useContext, useState } from 'react'

const MessageContext = createContext()
const useMessage = () => useContext(MessageContext)

export const MessageProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // (messageType: 'success' | 'error', message: String) > void
  const showMessage = (messageType, message) => {
    const setMessage = messageType === 'error' 
    ? setErrorMessage 
    : setSuccessMessage

    setMessage(message)
    setTimeout(() => setMessage(''), 5000)
  }

  const ctx = { showMessage, errorMessage, successMessage }

  return (
    <MessageContext.Provider value={ctx}>
      {children}
    </MessageContext.Provider>
  )
}

export default useMessage
