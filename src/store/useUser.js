import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()
const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [isFetchingUser, setIsFetchingUser] = useState(false)

  const ctx = { isFetchingUser, setUser, user }

  return (
    <UserContext.Provider value={ctx}>
      {children}
    </UserContext.Provider>
  )
}

export default useUser
