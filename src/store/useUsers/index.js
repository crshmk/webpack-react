import React, { 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from 'react'

import useMessage from '@store/useMessage'

import fetchUsers from './fetchUsers'

const UsersContext = createContext()
const useUsers = () => useContext(UsersContext)

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const { showMessage } = useMessage()
  
  useEffect(fetchUsers(setUsers, showMessage), [])

  const ctx = { users }

  return (
    <UsersContext.Provider value={ctx}>
      {children}
    </UsersContext.Provider>
  )
}

export default useUsers
