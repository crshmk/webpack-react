import React from 'react'

import useUser from '@store/useUser'

const Dashboard = () => {
  const { user } = useUser()

  return (
    <div>
      <h1>Your Dashboard</h1>
      <p>Welcome, {user.name}</p>
    </div>
  )
}
  

export default Dashboard