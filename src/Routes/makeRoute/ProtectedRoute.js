import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import useUser from '@store/useUser'

import { tail } from 'ramda'
import { isAbsent, isPresent } from 'ramjam'

const ProtectedRoute = ({ children }) => {
  const { isFetchingUser, user } = useUser()
  const navigate = useNavigate()
  const { pathname, search } = useLocation()

  useEffect(() => {
    const params = tail(search)
      if(!isFetchingUser && !isPresent(user)) {
        navigate(`/login?continue=${pathname}&${params}`, { replace: true })
      }
    }, [user, isFetchingUser])

  return isAbsent(user) ? null : children
}

export default ProtectedRoute