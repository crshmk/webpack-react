import React from 'react'

import { MessageProvider } from './useMessage'
import { UserProvider } from './useUser'
import { UsersProvider } from './useUsers'

const Providers = ({ children }) => (
  <>
  <MessageProvider>
  <UserProvider>
  <UsersProvider>
  {children}
  </UsersProvider>
  </UserProvider>
  </MessageProvider>
  </>
)

export default Providers