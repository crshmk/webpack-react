import React from 'react'

import { MessageProvider } from './useMessage'
import { UserProvider } from './useUsers'

const Providers = ({ children }) => (
  <>
  <MessageProvider>
  <UserProvider>
  {children}
  </UserProvider>
  </MessageProvider>
  </>
)

export default Providers